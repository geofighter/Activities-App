import {CircularProgress, Grid, Typography} from "@mui/material";

export const CheckingAuth = () => {

    return (
            <Grid container
                  className="animate__animated animate__zoomIn"
                  spacing={ 0 }
                  direction="column"
                  alignItems="center"
                  sx={{ minHeight: '100vh', backgroundColor: '', padding: 4, paddingTop: 42 }}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                >
                    <CircularProgress color='secondary' />
                </Grid>
                <Typography color="primary" fontWeight="bold">Cargando</Typography>
            </Grid>
    );

}