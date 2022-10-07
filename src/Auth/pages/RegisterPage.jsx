import { Link as RouterLink } from "react-router-dom";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {ArrowBack, Check, Google, Key} from "@mui/icons-material";
import {AuthLayout} from "../layout/AuthLayout";

export const RegisterPage = () =>{

    return(
        <AuthLayout title="Registro">
            <form>
                <Grid container>

                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Nombre(s)"
                            type="text"
                            placeholder="Ej. Marcos"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Primer Apellido"
                            type="text"
                            placeholder="Ej. Esteban"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Segundo Apellido"
                            type="text"
                            placeholder="Ej. Mendieta"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="Ej. correo@cobaeh.edu.mx"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Ej. miContraseña_actual"
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>

                        <Grid item xs={12} sm={12}>
                            <Button variant={"contained"} className="color-buttons" fullWidth>
                                <Check sx={{ marginRight: 2, color: "#fff" }}/>
                                <Typography color="white">Registrarme</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container sx={{ marginBottom: 4 }} direction="row" justifyContent="end">
                        <Link component={ RouterLink } color="inherit" to="/auth/login">
                            Ya tengo una Cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
}