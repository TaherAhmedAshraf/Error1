import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlCxyX47ZkbjsL2taazUSOQpq6V5nR7wc",
    authDomain: "miracloapidataentryserver.firebaseapp.com",
    projectId: "miracloapidataentryserver",
    storageBucket: "miracloapidataentryserver.appspot.com",
    messagingSenderId: "996266332450",
    appId: "1:996266332450:web:23b3cce4b6c4eae101957b",
    measurementId: "G-8K0S8HDWCQ"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase, useAuthState, useCollectionData };