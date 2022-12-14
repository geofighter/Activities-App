import { Link as RouterLink } from "react-router-dom";
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google, Key} from "@mui/icons-material";
import {AuthLayout} from "../layout/AuthLayout";
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import { startGoogleSignIn, startLoginWithEmailPassword} from "../../store/auth/thunks";
import {useMemo} from "react";

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () =>{

    const { status, errorMessage } = useSelector( state => state.auth  );
    const dispatch = useDispatch();

    const { email, password, onInputChange, formState } = useForm( formData );

    const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

    const onSubmit = ( event ) =>{
        event.preventDefault();
        //dispatch login with email and passwd action
        dispatch( startLoginWithEmailPassword({ email, password }) );
    }

    const onGoogleSignIn = () => {
        console.log("Google SignIn!")
        dispatch( startGoogleSignIn() )
    }

    return(
        <AuthLayout title="Login">
            <form onSubmit={ onSubmit } className="">
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

                    <Grid container className="animate__animated animate__tada" spacing={2} sx={{ marginBottom: 2, marginTop: 2 }} display={ !!errorMessage ? '' : 'none' }>
                        <Grid item xs={12} sm={12}>
                            <Alert severity="error">
                                { errorMessage }
                            </Alert>
                        </Grid>
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