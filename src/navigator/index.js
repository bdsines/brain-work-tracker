import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { db, auth } from '../../src/firebase';
import { doc, getDoc } from 'firebase/firestore';

import { SigninScreen, SignupScreen,SessionRecordingsScreen,HomeScreen } from '../../src/views'

const NavStack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef()

const RootNavigator = () =>  {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    // const [signedIn, setsignedIn] = useState(false)

    useEffect(() => {

        auth.onAuthStateChanged(user => {
            if (user) {
                // setsignedIn(true);
                getDoc(doc(db, 'users', user.uid))
                    .then((userDoc) => {
                        const userData = userDoc.data()
                        setLoading(false)
                        setUser(userData)

                    })
                    .catch((error) => {
                        setLoading(false)
                    });
            } else {
                // setsignedIn(false);
                setLoading(false)
            }
        });
    }, []);
    if (loading) {
        return (
            <></>
        )
    }
    return (
<NavigationContainer ref={navigationRef}>
        <NavStack.Navigator initialRouteName={user ? 'SigninScreen' : 'AuthNavigator'}>
            <NavStack.Screen name="SigninScreen" component={SigninScreen} />
            <NavStack.Screen name="SignupScreen" component={SignupScreen} />
            <NavStack.Screen name="HomeScreen">
                    {(props) => <HomeScreen {...props} extraData={user} />}
                </NavStack.Screen>
                <NavStack.Screen name="SessionRecordingsScreen">
                {(props) => <SessionRecordingsScreen {...props} />}
                    </NavStack.Screen> 
        </NavStack.Navigator>
        </NavigationContainer>
    );
}

export function navigate(name, params) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  }
export default RootNavigator;
