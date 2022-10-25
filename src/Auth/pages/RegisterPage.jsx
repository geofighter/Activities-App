import { Link as RouterLink } from "react-router-dom";
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import { Check } from "@mui/icons-material";
import {AuthLayout} from "../layout/AuthLayout";
import {useForm} from "../../hooks/useForm";
import {useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { startCreatingUserWithEmailPassword} from "../../store/auth/thunks";

const formData = {
    name:'',
    lastName1st: '',
    lastName2nd: '',
    email: '',
    password: ''
}

const formValidations = {
    name: [ ( value ) => value.length >= 1, 'Debes escribir tu(s) Nombre(s)' ],
    lastName1st: [ ( value ) => value.length >= 1 || typeof value != "string", 'Debes escribir tu primer apellido' ],
    lastName2nd: [ ( value ) => value.length >= 1, 'Debes escribir tu segundo apellido' ],
    email: [ ( value ) => value.includes('@'), 'El correo debe tener un dominio @' ],
    password: [ ( value ) => value.length >= 6, 'Tu contraseña debe tener más de 6 caracteres' ],
}

export const RegisterPage = () =>{

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted ] = useState( false );

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ] );

    const {
        lastName2nd, lastName1st, name ,email, password, onInputChange, formState, isFormValid,
        lastName1stValid, lastName2ndValid, nameValid, emailValid, passwordValid
    } = useForm(formData, formValidations);

    const onSubmit = ( event ) =>{
        event.preventDefault();
        setFormSubmitted(true);
        if ( !isFormValid ) return;
        dispatch( startCreatingUserWithEmailPassword( formState ) );
    }

    return(
        <AuthLayout title="Registro">
            <form onSubmit={ onSubmit } >
                <Grid container>
                    <h3>FormValid: { isFormValid ? 'true' : 'false' }</h3>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Nombre(s)"
                            type="text"
                            placeholder="Ej. Marcos"
                            fullWidth
                            color="secondary"
                            name="name"
                            onChange={ onInputChange }
                            value={ name }
                            error={ !!nameValid && formSubmitted }
                            helperText={ nameValid }
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Primer Apellido"
                            type="text"
                            placeholder="Ej. Esteban"
                            fullWidth
                            color="secondary"
                            name="lastName1st"
                            onChange={ onInputChange }
                            value={ lastName1st }
                            error={ !!lastName1stValid && formSubmitted }
                            helperText={ lastName1stValid }
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Segundo Apellido"
                            type="text"
                            placeholder="Ej. Mendieta"
                            fullWidth
                            color="secondary"
                            name="lastName2nd"
                            onChange={ onInputChange }
                            value={ lastName2nd }
                            error={ !!lastName2ndValid && formSubmitted }
                            helperText={ lastName2ndValid }
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="Ej. micuenta@cobaeh.edu.mx"
                            fullWidth
                            color="secondary"
                            name="email"
                            onChange={ onInputChange }
                            value={ email }
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Ej. Contraseña#0"
                            fullWidth
                            color="secondary"
                            name="password"
                            onChange={ onInputChange }
                            value={ password }
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }} display={ !!errorMessage ? '' : 'none' }>

                        <Grid item xs={12} sm={12}>
                            <Alert severity="error">
                                { errorMessage }
                            </Alert>
                        </Grid>

                    </Grid>

                    <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>

                        <Grid item xs={12} sm={12}>
                            <Button variant={"contained"} className="button-primary" fullWidth type="submit" disabled={ isCheckingAuthentication }>
                                <Check sx={{ marginRight: 2, color: "#fff" }}/>
                                <Typography color="white">Registrarme</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container sx={{ marginBottom: 4 }} direction="row" justifyContent="end">
                        <Link component={ RouterLink } color="secondary" to="/auth/login">
                            Ya tengo una Cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
}