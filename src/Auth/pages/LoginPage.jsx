import { Link as RouterLink } from "react-router-dom";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google, Key} from "@mui/icons-material";
import {AuthLayout} from "../layout/AuthLayout";
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {checkingAuthentication, startGoogleSignIn} from "../../store/auth/thunks.js";
import {useMemo} from "react";

export const LoginPage = () =>{

    const { status } = useSelector( state => state.auth  );
    const dispatch = useDispatch();

    const { email, password, onInputChange, formState } = useForm({
        email: 'itmarcosgeo@gmail.com',
        password: '12234'
    });

    const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

    const onSubmit = ( event ) =>{
        event.preventDefault();
        dispatch( checkingAuthentication() );
    }

    const onGoogleSignIn = () => {
        console.log("Google SignIn!")
        dispatch( startGoogleSignIn() )
    }

    return(
        <AuthLayout title="Login">
            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="correo@cobaeh.edu.mx"
                            fullWidth
                            color="secondary"
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="contraseña actual"
                            fullWidth
                            color="secondary"
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>

                        <Grid item xs={12} sm={6}>
                            <Button disabled={ isAuthenticating } className="button-primary" variant={"contained"} fullWidth type="submit">
                                <Key sx={{ marginRight: 2, color: "#fff" }}/>
                                <Typography color="white">Entrar</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button disabled={ isAuthenticating } className="button-primary" variant={"contained"} fullWidth onClick={ onGoogleSignIn }>
                                <Google sx={{ marginRight: 2, color: "#fff" }}/>
                                <Typography color="white">Google</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={ RouterLink } color="secondary" to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
}