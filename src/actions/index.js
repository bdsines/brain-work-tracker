import * as RootNavigator from "../navigator";
import {screenNames, navigatorNames} from "../constants/screennames";

export const navigateToLogin = () =>
RootNavigator.navigate(screenNames.SIGNIN);
    

export const navigateToSignUp = () =>
RootNavigator.navigate(screenNames.SIGNUP);
    // NavigationActions.navigate({
    //     routeName: screenNames.SIGNUP
    // });
export const navigateToHome = () =>
RootNavigator.navigate(screenNames.HOME);

export const navigateToRecordings = (parms) =>{
        console.log("navigateToRecordings",parms);
        RootNavigator.navigate(screenNames.RECORDINGS,parms);
    }
    // export const navigateToAuthNav = () =>
    // RootNavigator.navigate(navigatorNames.AUTH);
    // export const navigateToAppNav = () =>{
    //     RootNavigator.navigate(navigatorNames.APP);
    // }
    // export const navigateToRecordings = (selectedSession) =>{
    //     RootNavigator.navigate(navigatorNames.APP, {screen:screenNames.RECORDINGS,params:{session:selectedSession}});
    // }
    // route(navigatorNames.APP);
    
    // NavigationActions.navigate({
    //     routeName: navigatorNames.APP
    // });