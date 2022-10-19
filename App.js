import { createTheme, ThemeProvider } from '@rneui/themed';
import 'react-native-gesture-handler';

import RootNavigator from "./src/navigator";
import {DataProvider} from './src/context/DataContext';
const theme = createTheme({
    components: {
        Button: {
            raised: true,
        },
    },
});
const App = () => {
    return (
        <DataProvider>

    <ThemeProvider theme={theme}>
        <RootNavigator />
    </ThemeProvider>
    </DataProvider>
    );
};
export default App;

