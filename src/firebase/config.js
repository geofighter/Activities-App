// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/*

    NOTE: ONCE THAT FILL THE FIELDS "YourCredentials" with your data,
    RENAME THIS FILE AS "config.js" to connect with firebase services

*/

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YourCredentials",
    authDomain: "YourCredentials",
    projectId: "YourCredentials",
    storageBucket: "YourCredentials",
    messagingSenderId: "YourCredentials",
    appId: "YourCredentials"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );