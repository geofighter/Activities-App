import {checkingCredentials, login, logout} from "./authSlice";
import {
    signInWithGoogle,
    registerUserWithEmailPassword,
    loginWithEmailPassword,
    logoutFirebase
} from "../../firebase/providers";
import {clearNotes} from "../journal/journalSlice";

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startCreatingUserWithEmailPassword = ( { name, lastName1st, lastName2nd ,email, password } ) => {
    return async( dispatch ) => {

        let displayName = name + " " + lastName1st + " " + lastName2nd
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword( { displayName ,email, password } )
        if( !ok ){
            return dispatch( logout({errorMessage}) );
        }
        else{
            dispatch( login({uid, displayName, email, photoURL} ));
        }
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {

    return async ( dispatch ) => {
        debugger

        dispatch( checkingCredentials() );
        const { ok, uid, displayName, emailFireBase, photoURL, errorMessage } = await loginWithEmailPassword({ email, password } )
        if( ok ){
            dispatch( login( { uid, displayName, emailFireBase, photoURL } ) );
        }
        else{
            return dispatch( logout({errorMessage} ) );
        }
    }

}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
        console.log({result})

        if( result.ok === true ){
            return dispatch( login( result ) );
        }
        else{
            return dispatch( logout( result.errorMessage ) );
        }
        // console.log({result})
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        await logoutFirebase();
        dispatch( clearNotes() );
        dispatch( logout({}) );
    }
}