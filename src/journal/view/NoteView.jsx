import {Typography, Grid, Button, TextField} from "@mui/material";
import { SaveTwoTone} from "@mui/icons-material";
import {ImageGallery} from "../components";
import {useForm} from "../../hooks/useForm.js";
import {useSelector} from "react-redux";
import {useMemo} from "react";

export const NoteView = () =>{

    const { activeNote: note } = useSelector(state => state.journal);

    const { body, title, onInputChange, formState, date } = useForm( note );

    return(
        <Grid container className="animate__animated animate__fadeInUpBig" direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight="lighter">{ date }</Typography>
            </Grid>
            <Grid item>
                <Button className="color-buttons" sx={{ padding: 2, marginBottom:2 }}>
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