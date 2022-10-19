import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SigninScreen, SignupScreen } from '../../src/views'

const AuthStack = createNativeStackNavigator();
export default function AuthNavigator() {
    return (

        <AuthStack.Navigator>
            <AuthStack.Screen name="SigninScreen" component={SigninScreen} />
            <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
        </AuthStack.Navigator>
    );
}
