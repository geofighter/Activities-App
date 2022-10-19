import { collection , doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {addNewEmptyNote, savingNewNote, setActiveNote, setNotes} from "./journalSlice.js";
import {useSelector} from "react-redux";
import {loadNotes} from "../../helpers/loadNotes.js";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes`) );
        const setDocResp = await setDoc( newDoc ,newNote );

        newNote.id = newDoc.id
        dispatch(addNewEmptyNote( newNote ));
        dispatch( setActiveNote( newNote ) );
        //dispatch (newNote)
        //dispatch (activeNote)
    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        if( !uid ) throw new Error(' El uid del usuario no existe :/ ');
        const notes = await loadNotes(uid);
        if (notes) dispatch( setNotes( notes ) );
        // dispatch(  );
    }
}