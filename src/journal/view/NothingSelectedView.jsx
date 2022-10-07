import {Grid, Typography} from "@mui/material";
import {StarRate} from "@mui/icons-material";

export const NothingSelectedView = () =>{

    return(
        <Grid container
              spacing={ 0 }
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: 'calc(100vh - 100px)', backgroundColor: 'primary.main', borderRadius: 10}}
        >
            <Grid item xs={ 12 }>
                <StarRate sx={{ fontSize: 100, color: 'secondary.aux' }}/>
            </Grid>
            <Grid item xs={ 12 }>
                <Typography color="accent.aux" variant="h5">Selecciona / Crea una nota</Typography>
            </Grid>

        </Grid>
    );

}