import {Typography, Grid, Button, TextField} from "@mui/material";
import { SaveTwoTone} from "@mui/icons-material";
import {ImageGallery} from "../components";
import {useForm} from "../../hooks/useForm.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo} from "react";
import {setActiveNote} from "../../store/journal/journalSlice.js";
import { startSaveNote } from "../../store/journal/thunks.js";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () =>{ 

    const dispatch = useDispatch();
    const { activeNote: note, savedMessage } = useSelector(state => state.journal);

    const { body, title, onInputChange, formState, date } = useForm( note );

    //colocar instantaneamente la actualizacion de la nota en el state
    useEffect( () => {
        dispatch( setActiveNote( formState ) );
    }, [formState]);

    //efecto que controla el cambio del string en la propiedad savedMessage del state
    useEffect(() => {
        //aqui lanzar el modal de notificacion
        if( savedMessage.length > 0){
            Swal.fire('Nota Actualizada', savedMessage, 'success');
        }
        console.log(savedMessage)
    }, [ savedMessage ]);

    //guardar nota editada en firebase, llamando el thunk para peticiones asincronas
    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

    return(
        <Grid container className="animate__animated animate__fadeInUpBig" direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight="lighter">{ date }</Typography>
            </Grid>
            <Grid item>
                <Button className="button-accent" sx={{ padding: 2, marginBottom:2 }}
                    onClick={ onSaveNote }
                >
                    <SaveTwoTone sx={{ fontSize: 30, marginRight: 1, color: "#fff" }}/>
                    <Typography color="white">Guardar</Typography>
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    placeholder="Escribe el título"
                    label="Título"
                    sx={{ border: 'none', marginBottom: 3 }}
                    name="title"
                    value={title}
                    onChange={ onInputChange }
                />
                <TextField
                    multiline
                    type="text"
                    variant="outlined"
                    fullWidth
                    placeholder="Actividad del día"
                    label="Descripción de la Actividad"
                    minRows={ 5 }
                    name="body"
                    value={body}
                    onChange={ onInputChange }
                />
            </Grid>
            {/*  Image gallery  */}
            <ImageGallery />

        </Grid>
    );

}