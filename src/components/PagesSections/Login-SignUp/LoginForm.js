import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import './Login.css'
import {Button} from "../../Buttons/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from "react-router-dom";
import {ApiRegister} from "../../../api";
import {Redirect} from "react-router";

const LoginForm = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        /*if (name !== '') {
            try {
                await ApiLogin(name, lastname, email, password, university);
            } catch (e) {
                throw e;
            }
            setLoading(false);
            setDone(true);
        }
        else {
            setError(true);
        }*/
    }

    return (
        <>
            <div className={"form-container"}>
                <form className={"login-form"} noValidate autoComplete="off">
                    <TextField
                        id="outlined-textarea"
                        label="Username"
                        placeholder="Inserisci la tua mail"
                        multiline
                        variant="outlined"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Password"
                        placeholder="Inserisci la tua password"
                        multiline
                        variant="outlined"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button buttonStyle='btn--outline' type="submit"><h6 style={{color: "white"}}>Accedi</h6></Button>
                    {done ? <Redirect to="/dashboard" /> : (error ? "errore" : null)} {/*Una volta che ha mandato i dati, viene reindirizzato a login*/}
                    {/*<FormControlLabel
                        value="ricordami"
                        control={<Checkbox color="primary" />}
                        label="Ricordami"
                        labelPlacement="end"
                    />*/}
                    <div>Se non sei ancora registrato clicca
                        <Link to='/sign-up'> qui </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginForm;