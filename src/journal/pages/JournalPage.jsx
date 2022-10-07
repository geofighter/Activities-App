import {Container, IconButton, Typography} from "@mui/material";
import {AddTask} from "@mui/icons-material";
import {JournalLayout} from "../layout/JournalLayout";
import {NoteView, NothingSelectedView} from "../view";

export const JournalPage = () =>{
    return(
        <>
            <JournalLayout>
                <NothingSelectedView />
                {/*<NoteView/>*/}
                <IconButton
                    className="color-buttons"
                    size="large"
                    sx={{
                        color: 'white',
                        ':hover': { opacity: 40.9 },
                        position: 'fixed',
                        right: 50,
                        bottom: 50
                    }}
                >
                    <AddTask sx={{ fontSize: 30 }}/>

                </IconButton>
            </JournalLayout>
        </>

);
}
