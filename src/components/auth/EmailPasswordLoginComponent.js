import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../../styles/styles';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import {navigateToHome} from '../../actions';
import { Button, Icon , Input} from "@rneui/themed";


export default function EmailPasswordLoginComponent() {
    const [email, setEmail] = useState('bdtest@gmail.com')
    const [password, setPassword] = useState('welcome1')  

    const onLoginPress = () => {
        console.log(email);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigateToHome();
                // navigation.navigate('AppNavigator');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error",error);
                alert("Unable to SignIn: ", errorMessage);
            });
    }  

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">               
                <Input
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Input
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    
                />
                
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity> */}
               
            </KeyboardAwareScrollView>
            <Button color="primary" uppercase="true" onPress={() => onLoginPress()} title="SignIn" icon={<Icon name="login" size={15} color="#0FF" />}>
                </Button>
        </View>
    )
}