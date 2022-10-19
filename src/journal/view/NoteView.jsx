import {Typography, Grid, Button, TextField} from "@mui/material";
import { SaveTwoTone} from "@mui/icons-material";
import {ImageGallery} from "../components";

export const NoteView = () =>{

    return(
        <Grid container className="animate__animated animate__fadeInUpBig" direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight="lighter">28 De Oct 2022</Typography>
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
                    sx={{ border: 'none', marginBottom: 1 }}
                />
                <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    placeholder="Actividad del día"
                    minRows={ 5 }
                />
            </Grid>
            {/*  Image gallery  */}
            <ImageGallery />

        </Grid>
    );

}