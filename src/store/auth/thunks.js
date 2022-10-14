import {checkingCredentials, login, logout} from "./authSlice";
import {signInWithGoogle} from "../../firebase/providers.js";

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
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