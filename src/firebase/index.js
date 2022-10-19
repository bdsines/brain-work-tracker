import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// import { , FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "firebase/auth";

// import * as firebaseui from "firebaseui"
// import analytics from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyDIlMoOezp4KzKEh9ZiX9xXMu46QIBewJ4",
    authDomain: "brainworktimer.firebaseapp.com",
    projectId: "brainworktimer",
    storageBucket: "brainworktimer.appspot.com",
    messagingSenderId: "456962430770",
    appId: "1:456962430770:web:98be3557a9163320bd292b",
    measurementId: "G-LRERG37QNZ"
};


const brainTimerApp = initializeApp(firebaseConfig);

export const db = getFirestore(brainTimerApp);
// export const analyticsService = analytics;

export const auth = getAuth();
export const appAuth = getAuth(brainTimerApp);
export const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();
// const twitterProvider = new TwitterAuthProvider();
// const githubProvider = new GithubAuthProvider();

// export const firebaseSignInOptions=[
//     auth.GoogleAuthProvider.PROVIDER_ID
//     // auth.FacebookAuthProvider.PROVIDER_ID
// ];
// export const authUi = new firebaseui.auth.AuthUI(getAuth())
// export const firebaseAnalytics = getAnalytics(brainTimerApp);
// export { firebase };