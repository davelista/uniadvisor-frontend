import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {Button} from "../../Buttons/Button";
import {ApiRegister} from "../../../api";
import {Redirect} from "react-router";

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [university, setUniversity] = useState('');
    const [loading, setLoading] = useState('');
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);

    /*const nameValidation = (fieldName, fieldValue) => {
        if (fieldValue.trim() === '') {
            return `${fieldName} is required`;
        }
        if (/[^a-zA-Z -]/.test(fieldValue)) {
            return 'Invalid characters';
        }
        if (fieldValue.trim().length < 3) {
            return `${fieldName} needs to be at least three characters`;
        }
        return null;
    };

    const emailValidation = (email) => {
        if (
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                email,
            )
        ) {
            return null;
        }
        if (email.trim() === '') {
            return 'Email is required';
        }
        return 'Please enter a valid email';
    };

    const validate = (name, email, university, password) => {
        nameValidation('Name', name);
        emailValidation(email);
    };*/

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (name !== '') {
            try {
                await ApiRegister(name, lastname, email, password, university);
            } catch (e) {
                throw e;
            }
            setLoading(false);
            setDone(true);
        }
        else {
            setError(true);
        }
    }



    return (
        <>
            <div className={"form-container"}>
                <form className={"login-form"} noValidate autoComplete="off" onSubmit={submit}>
                    <TextField
                        id="outlined-textarea"
                        label="Nome"
                        placeholder="Inserisci il tuo nome"
                        multiline
                        variant="outlined"
                        aria-required="true"
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Cognome"
                        placeholder="Inserisci il tuo cognome"
                        multiline
                        variant="outlined"
                        aria-required="true"
                        onChange={e => setLastname(e.target.value)}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Email"
                        placeholder="Inserisci la tua email"
                        multiline
                        variant="outlined"
                        aria-required="true"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Università"
                        placeholder="Inserisci la tua università"
                        multiline
                        variant="outlined"
                        aria-required="true"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Password"
                        placeholder="Inserisci la tua password"
                        multiline
                        variant="outlined"
                        aria-required="true"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button buttonStyle='btn--outline' type="submit"><h6 style={{color: "white"}}>Registrati</h6></Button>
                    {done ? <Redirect to="/login" /> : (error ? "errore" : null)} {/*Una volta che ha mandato i dati, viene reindirizzato a login*/}
                </form>
            </div>
        </>
    );
}

export default SignUpForm;