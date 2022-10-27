import { collection , doc, setDoc, deleteDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
    addNewEmptyNote, deleteNoteById,
    savingNewNote,
    setActiveNote,
    setImgsUrl,
    setNotes,
    setSaving,
    updateNote
} from "./journalSlice.js";
import {loadNotes} from "../../helpers/loadNotes.js";
import {fileUpload} from "../../helpers/fileUpload.js";

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
        dispatch( updateNote( activeNote ));

    }
}
export const startUploadingFiles = ( files = [] ) => {

    return async ( dispatch ) => {

        dispatch(setSaving());

        //peticiones simultáneas
        const fileUploadPromises = [];
        for(const file of files){
            fileUploadPromises.push( fileUpload( file ) );
        }
        const photosUrls = await Promise.all(fileUploadPromises);
        console.log(photosUrls)

        if ( photosUrls ) dispatch( setImgsUrl( photosUrls ) );
    }

}

export const startDeleteNote = ({ id }) => {
    return async ( dispatch, getState ) => {
        debugger
        const { uid } = getState().auth;
        const { notes } = getState().journal;
        console.log(`ARRAY DE NOTAS ${notes}`)
        dispatch(setSaving());
        const path = `${ uid }/journal/notes/${ id }`;
        // console.log(path)
        const docRef = doc( FirebaseDB, path);
        await deleteDoc( docRef );
        dispatch( deleteNoteById(id) );
    }
}