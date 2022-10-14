// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4CwHGniXEpzVvr2MeiY1oYFDodA0WVcg",
    authDomain: "react-example-918a5.firebaseapp.com",
    projectId: "react-example-918a5",
    storageBucket: "react-example-918a5.appspot.com",
    messagingSenderId: "1080423820996",
    appId: "1:1080423820996:web:c9f34a0bb1fbadcc172391"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth( FirebaseApp );
export const FirestoreDB = getFirestore( FirebaseApp );