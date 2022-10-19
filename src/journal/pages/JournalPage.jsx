import {Box, Container, IconButton, Typography} from "@mui/material";
import { shadows } from "@mui/system";
import {AddTask} from "@mui/icons-material";
import {JournalLayout} from "../layout/JournalLayout";
import {NoteView, NothingSelectedView} from "../view";
import {useDispatch, useSelector} from "react-redux";
import {startNewNote} from "../../store/journal/thunks";
import { savingNewNote } from "../../store/journal/journalSlice";

export const JournalPage = () =>{

    const dispatch = useDispatch();

    const onClickNewNote = () => {
        dispatch( startNewNote() );
    }

    const { isSaving, activeNote } = useSelector( state => state.journal );

    return(
        <>
            <JournalLayout>
                {
                    (!!activeNote) //convirtiendolo a valor booleano
                        ?
                        <NoteView/>
                        :
                        <NothingSelectedView />
                }
                <Box display={ !!isSaving ? 'none' : '' }>
                    <IconButton
                        className="button-accent animate__animated animate__bounceIn"
                        size="small"
                        sx={{
                            color: 'white',
                            ':hover': { opacity: 40.9 },
                            position: 'fixed',
                            right: 50,
                            bottom: 50,
                            boxShadow: 5
                        }}
                        onClick={ onClickNewNote }
                    >
                        <AddTask sx={{ fontSize: 40 }}/>

                    </IconButton>
                </Box>
            </JournalLayout>
        </>

);
}
