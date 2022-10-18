import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {FireBaseAuth} from "../firebase/config.js";
import {login, logout} from "../store/auth/authSlice.js";

export const useCheckAuth = () =>{
    const { status } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged( FireBaseAuth, async ( user ) => {
            console.log(user)
            if( !user ) return dispatch( logout );

            const { uid, email, displayName, photoURL } = user;
            dispatch( login({ uid, email, displayName, photoURL }) );
        });
    });

    return{ status }

}