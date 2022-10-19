import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen,SessionRecordingsScreen } from '../../src/views'


const AppStack = createNativeStackNavigator();
export default function AppNavigator( {user}) {
    return (

        <AppStack.Navigator initialRouteName='HomeScreen'>
                <AppStack.Screen name="HomeScreen">
                    {(props) => <HomeScreen {...props} extraData={user} />}
                </AppStack.Screen>
                <AppStack.Screen name="SessionRecordingsScreen" component={SessionRecordingsScreen}>
                </AppStack.Screen>
            </AppStack.Navigator>
    );
}
