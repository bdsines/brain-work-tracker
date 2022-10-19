
import React, { useState, useEffect } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Icon , Input} from "@rneui/themed";
import styles from '../../styles/styles';
import { auth } from '../../firebase';
import { SocialIcon } from "@rneui/themed";
import * as GoogleSignin from 'expo-auth-session/providers/google';
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { navigateToAppNav } from '../../actions'

export default function GoogleSigninComponent() {
    //https://console.developers.google.com/apis/credentials/oauthclient/456962430770-16hdvp1b67irmjqakv3ubskmu2e41oov.apps.googleusercontent.com
    const [request, response, promptAsync] = GoogleSignin.useIdTokenAuthRequest(
        {
            clientId:
                '456962430770-16hdvp1b67irmjqakv3ubskmu2e41oov.apps.googleusercontent.com',
        },
    );
    useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params.id_token;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential)
                .then((result) => {
                    console.log('Google Auth Result', result);
                    navigateToHome();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert("Unable to SignIn via Google: ", errorMessage);
                });
        }

    }, [response]);
   
    return (
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '50%' }}
            keyboardShouldPersistTaps="always">

            <Button
                onPress={() => promptAsync()} title="Signin With Google" icon={{
                    name: 'google',
                    type: 'font-awesome',
                    size: 15,
                    color: 'white',
                  }}>
            </Button>

        </KeyboardAwareScrollView>
    )
}