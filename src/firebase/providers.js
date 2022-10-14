import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {FireBaseAuth} from "./config";

const googleProvider = new GoogleAuthProvider();

// googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup( FireBaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        // console.log({credentials})
        const { displayName, email, photoURL, uid } = result.user;
        return{
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode, errorMessage
        }
    }
}