import { Grid, Typography} from "@mui/material";

export const AuthLayout = ({ children, title = '' }) =>{

    return(
        <Grid container
              spacing={ 0 }
              direction="column"
              alignItems="center"
              sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4, paddingTop: 20 }}
        >
            <Grid
                item
                className='box-shadow'
                xs={3}
                sx={{
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 10,
                    width: { sm: 450 }
                }}
            >
                <Typography variant="h5" sx={{ marginBottom: 5 }} align="center">{ title }</Typography>

            {/*  children  */}
                { children }

            </Grid>
        </Grid>
    );

}