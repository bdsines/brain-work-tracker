import React from 'react';
import { Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { navigateToSignUp } from '../../actions';
import EmailPasswordLoginComponent from '../../components/auth/EmailPasswordLoginComponent';
import GoogleSigninComponent from '../../components/auth/GoogleSigninComponent';
import styles from '../../styles/styles';

export default function SigninScreen({ navigation }) {

    const onFooterLinkPress = () => {
        navigateToSignUp();
    }
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                />
                <EmailPasswordLoginComponent />
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
                <GoogleSigninComponent/>

            </KeyboardAwareScrollView>
        </View>
    )
}