import {Typography, Grid, Button, TextField, IconButton} from "@mui/material";
import {SaveTwoTone, UploadFileOutlined, UploadTwoTone} from "@mui/icons-material";
import {ImageGallery} from "../components";
import {useForm} from "../../hooks/useForm.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useRef} from "react";
import {setActiveNote} from "../../store/journal/journalSlice.js";
import {startSaveNote, startUploadingFiles} from "../../store/journal/thunks.js";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import {CheckingAuth} from "../../ui/index.js";

export const NoteView = () =>{ 

    const dispatch = useDispatch();
    const { activeNote: note, savedMessage, isSaving } = useSelector(state => state.journal);

    const { body, title, onInputChange, formState, date } = useForm( note );

    //utilizando el hook useRef para controlar el input customizado
    const fileInputRef = useRef();

    //colocar instantaneamente la actualizacion de la nota en el state
    useEffect( () => {
        dispatch( setActiveNote( formState ) );
    }, [formState]);

    //efecto que controla el cambio del string en la propiedad savedMessage del state
    useEffect(() => {
        debugger
        //aqui lanzar el modal de notificacion
        if( savedMessage.length > 0){
            Swal.fire('Nota Actualizada', savedMessage, 'success');
        }
    }, [ savedMessage ]);

    //guardar nota editada en firebase, llamando el thunk para peticiones asincronas
    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

    const onFileInputChange = ({ target }) => {
        // console.log(target.files)
        if( target.files.length === 0){
            console.log("ningun archivo seleccionado")
            return;
        }
        else{
            dispatch( startUploadingFiles( target.files ) );
        }
    }

    if ( isSaving === true ){
        return <CheckingAuth />;
    }

    return(
        <Grid container className="animate__animated animate__fadeInUpBig" direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight="lighter">{ note ? date : '' }</Typography>
            </Grid>

            <Grid item className={ !!isSaving ? "animate__animated animate__fadeOut" : "animate__animated animate__fadeIn" }  >
                <input
                    type="file"
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: "none" }}
                />
                <Button className={ !!isSaving ? "animate__animated animate__fadeOut button-secondary" : "animate__animated animate__fadeIn button-secondary" } sx={{ padding: 2, marginBottom: 2, marginRight: 2 }}
                        onClick={ () => fileInputRef.current.click() } disabled={ !!isSaving }
                >
                    <UploadTwoTone sx={{ fontSize: 30, marginRight: 1, color: "#fff" }}/>
                    <Typography color="white">Subir Archivos</Typography>
                </Button>
                <Button className={ !!isSaving ? "animate__animated animate__fadeOut button-accent" : "animate__animated animate__fadeIn button-accent" } sx={{ padding: 2, marginBottom:2 }}
                    onClick={ onSaveNote } disabled={ !!isSaving }
                >
                    <SaveTwoTone sx={{ fontSize: 30, marginRight: 1, color: "#fff" }}/>
                    <Typography color="white">Guardar</Typography>
                </Button>
                {/*<Button className={ !!isSaving ? "animate__animated animate__fadeOut button-primary" : "animate__animated animate__fadeIn button-primary" } sx={{ padding: 2, marginBottom:2 }}*/}
                {/*        onClick={ onSaveNote } disabled={ !!isSaving }*/}
                {/*>*/}
                {/*    <SaveTwoTone sx={{ fontSize: 30, marginRight: 1, color: "#fff" }}/>*/}
                {/*    <Typography color="white">Eliminar</Typography>*/}
                {/*</Button>*/}
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
                    value={ note ? title : '' }
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
                    value={note ? body : ''}
                    onChange={ onInputChange }
                />
            </Grid>
            {/*  Image gallery  */}
            <ImageGallery images={ note.imageUrls }/>

        </Grid>
    );

}