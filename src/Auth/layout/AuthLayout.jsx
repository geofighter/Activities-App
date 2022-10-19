import { Grid, Typography} from "@mui/material";

export const AuthLayout = ({ children, title = '' }) =>{

    return(
        <Grid container
              spacing={ 0 }
              direction="column"
              alignItems="center"
              sx={{ minHeight: '100vh', backgroundColor: 'secondary.aux', padding: 4, paddingTop: 20 }}
        >
            <Grid
                item
                className='box-shadow animate__animated animate__fadeIn'
                xs={3}
                sx={{
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 4,
                    width: { sm: 450 }
                }}
            >
                <Typography variant="h5" color="primary" sx={{ marginBottom: 5 }} align="center">{ title }</Typography>

            {/*  children  */}
                { children }

            </Grid>
        </Grid>
    );

}