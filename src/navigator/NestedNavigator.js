//https://reactnavigation.org/docs/nesting-navigators

import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { db, auth } from '../../src/firebase';
import { doc, getDoc } from 'firebase/firestore';

import {default as AuthNavigator} from './AuthNavigator';
import {default as AppNavigator} from './AppNavigator';


const Stack = createStackNavigator();
const navigationRef = createNavigationContainerRef()
const RootNavigator = () => {
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
            <Stack.Navigator initialRouteName={user ? 'AppNavigator' : 'AuthNavigator'}>
                <Stack.Screen name="AppNavigator" options={{ headerShown: false }}>
                    {(props) => <AppNavigator {...props} extraData={user} />}
                </Stack.Screen>
                <Stack.Screen name="AuthNavigator" component={AuthNavigator} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export function navigate(name, params) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  }
export default RootNavigator;