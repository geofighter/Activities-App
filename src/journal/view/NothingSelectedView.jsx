import {Grid, Typography} from "@mui/material";
import {StarRate} from "@mui/icons-material";

export const NothingSelectedView = () =>{

    return(
        <Grid container
              className="animate__animated animate__fadeInUpBig"
              spacing={ 0 }
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: 'calc(100vh - 100px)', backgroundColor: 'secondary.aux', borderRadius: 10, boxShadow: 5 }}
        >
            <Grid item xs={ 12 }>
                <StarRate sx={{ fontSize: 100, color: 'primary.main' }}/>
            </Grid>
            <Grid item xs={ 12 }>
                <Typography color="accent.main" variant="h5">Selecciona / Crea una nota</Typography>
            </Grid>

        </Grid>
    );

}