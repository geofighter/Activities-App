import { collection , doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote} from "./journalSlice.js";
import {useSelector} from "react-redux";
import {loadNotes} from "../../helpers/loadNotes.js";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().toUTCString(),
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

export const startSaveNote = () => {
    return async ( dispatch, getState ) => {
        debugger
        dispatch( setSaving() );
        const { uid } = getState().auth;
        const { activeNote } = getState().journal;
        const noteToFirestore = { ...activeNote };
        // quitando el id
        delete noteToFirestore.id;
        const path = `${ uid }/journal/notes/${ activeNote.id }`;
        const docRef = doc( FirebaseDB, path );
        //el argumento de options "merge" se usa para que en dado caso de que haya campos adicionales a la coleccion, estos se agreguen correctamente
        const upDoc = await setDoc( docRef, noteToFirestore, { merge: true } );
        // if ( !!upDoc ){
            dispatch( updateNote( activeNote ));
        // }
        ///LI4LA5Otf6hC7O0vZX257l8Qvev1/journal/notes/4i2M0K6YIrjoO7zK9rpw

    }
}