import {CircularProgress, Grid} from "@mui/material";

export const CheckingAuth = () => {

    return (
            <Grid container
                  spacing={ 0 }
                  direction="column"
                  alignItems="center"
                  sx={{ minHeight: '100vh', backgroundColor: 'secondary.aux', padding: 4, paddingTop: 20 }}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                >
                    <CircularProgress color='primary' />
                </Grid>
            </Grid>
    );

}