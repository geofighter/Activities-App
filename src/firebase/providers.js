import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import {FireBaseAuth} from "./config";

const googleProvider = new GoogleAuthProvider();

// googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const registerUserWithEmailPassword = async ( { displayName ,email, password } ) => {
    try {
        //connect with firebase
        const resp = await createUserWithEmailAndPassword( FireBaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        console.log(resp)

        await updateProfile( FireBaseAuth.currentUser, {
            displayName
        } );

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    }catch ( error ){
        return { ok: false, errorMessage: error.message }
    }

}

export const loginWithEmailPassword = async ({ email, password }) => {
    //call the funcion signInWithEmailAndPassword from firebase
    try{
        const res = await signInWithEmailAndPassword( FireBaseAuth, email, password );
        const { uid, email: emailFireBase, displayName, photoURL } = res.user;
        return {
            ok: true,
            uid, emailFireBase, displayName, photoURL
        }
    }catch ( error ){
        return { ok: false, errorMessage: error.message }
    }
}

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

export const logoutFirebase = async () => {
    return await FireBaseAuth.signOut();
}