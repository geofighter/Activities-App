import { Link as RouterLink } from "react-router-dom";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google, Key} from "@mui/icons-material";
import {AuthLayout} from "../layout/AuthLayout";

export const LoginPage = () =>{

    return(
        <AuthLayout title="Login">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="correo@cobaeh.edu.mx"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="contraseña actual"
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>

                        <Grid item xs={12} sm={6}>
                            <Button className="color-buttons" variant={"contained"} fullWidth>
                                <Key sx={{ marginRight: 2, color: "#fff" }}/>
                                <Typography color="white">Entrar</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button className="color-buttons" variant={"contained"} fullWidth>
                                <Google sx={{ marginRight: 2, color: "#fff" }}/>
                                <Typography color="white">Google</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={ RouterLink } color="inherit" to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
}