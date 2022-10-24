import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
      isSaving: false,
      savedMessage: '',
      notes: [],
      activeNote: null
      // activeNote: {
      //   id: 'qwerty1234',
      //   title: '',
      //   body: '',
      //   date: 12345678,
      //   imageUrls: [],
      // }
  },
  reducers: {
    savingNewNote : ( state ) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push( action.payload );
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
      state.savedMessage = '';
    },
    clearNotes : (state) => {
      state.activeNote = null
      state.notes = []
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.savedMessage = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map( note => {
        if (note.id === action.payload.id){
          return action.payload;
        }
        return note;
      } ) ;
      state.savedMessage = `<b>${action.payload.title}</b>, se ha actualizado de forma correcta!`;
    },
    deleteNoteById: (state, action) => {

    }
  },
})

export const { savingNewNote ,addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, clearNotes } = journalSlice.actions
