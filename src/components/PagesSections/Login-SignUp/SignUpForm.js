import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {Button} from "../../Buttons/Button";
import {ApiRegister} from "../../../api";
import {Redirect} from "react-router";
import LoginFacebook from "./LoginFacebook";

const SignUpForm = (props) => {
    const {onChangeUserFb, onChangeFb} = props;

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [password, setPassword] = useState('');
    const [passwordControl, setPasswordControl] = useState('');

    const [error, setError] = useState(true);
    const [msgError, setMsgError] = useState('');
    const [typeError, setTypeError] = useState('');
    const [done, setDone] = useState(false);


    const displayError = () => {
        switch (typeError) {
            case 'Empty':
                setMsgError("ATTENZIONE, compilare tutti i campi");
                break;
            case 'Different passwords':
                setMsgError("ATTENZIONE, le password non coincidono");
                break;
            case 'Invalid email':
                setMsgError("ATTENZIONE, la mail non è valida");
                break;
            case 'Short Password':
                setMsgError("ATTENZIONE, la password è troppo corta");
                break;
            case 'Already registered':
                setMsgError("ATTENZIONE, utente già registrato");
                break;
            default:
                setMsgError('');
                break;
        }
    }

    const validation = () => {

        if (firstname.length < 1 || lastname.length < 1 || email.length < 1 || university.length < 1 || password.length < 1 || passwordControl.length < 1) {
            setTypeError('Empty');
            setError(true);
        } else if (!email.includes('@')) {
            setTypeError('Invalid email');
            setError(true);
        } else if (password.length < 8) {
            setTypeError('Short Password');
            setError(true);
        } else if (password !== passwordControl) {
            setTypeError('Different passwords');
            setError(true);
        } else {
            setTypeError('No Error');
            setError(false);
        }
    }

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (!error) {
            try {
                let res = await ApiRegister(firstname, lastname, email, password, university, "Unihub", null);

                switch (res.data) {
                    case "OK":
                        setDone(true);
                        break;
                    case "Already registered":
                        console.log("UTENTE GIÀ REGISTRATO");
                        break;
                    default:
                        break;
                }
            } catch (e) {
                throw e;
            }

        }
        displayError();
    }


    return (
        <>
            <div className={"login-title-container"}>
                <div className={"title-red"}>Registrati</div>
            </div>
            <div className={"form-container"}>
                <form className={"login-form"} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <div className={"form-row"}>
                        <div className={"form-input"}>
                            <TextField
                                className={"TextField"}
                                InputProps={{
                                    className: "TextField",
                                }}
                                name="firstname"
                                id="outlined-textarea"
                                label="Nome"
                                placeholder="Inserisci il tuo nome"
                                variant="outlined"
                                aria-required="true"
                                onChange={e => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className={"form-input"}>
                            <TextField
                                className={"TextField"}
                                InputProps={{
                                    className: "TextField"
                                }}
                                name="lastname"
                                id="outlined-textarea"
                                label="Cognome"
                                placeholder="Inserisci il tuo cognome"
                                variant="outlined"
                                aria-required="true"
                                onChange={e => setLastname(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={"form-input"}>
                        <TextField
                            className={"TextField"}
                            InputProps={{
                                className: "TextField"
                            }}
                            name="email"
                            id="outlined-textarea"
                            label="Email"
                            placeholder="Inserisci la tua email"
                            variant="outlined"
                            aria-required="true"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={"form-input"}>
                        <TextField
                            className={"TextField"}
                            InputProps={{
                                className: "TextField"
                            }}
                            name="university"
                            id="outlined-textarea"
                            label="Università"
                            placeholder="Inserisci la tua università"
                            variant="outlined"
                            aria-required="true"
                            onChange={e => setUniversity(e.target.value)}
                        />
                    </div>
                    <div className={"form-row"}>
                        <div className={"form-input"}>
                            <TextField
                                className={"TextField"}
                                InputProps={{
                                    className: "TextField",
                                }}
                                name="password"
                                id="outlined-textarea"
                                label="Password"
                                placeholder="Inserisci la tua password"
                                variant="outlined"
                                aria-required="true"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={"form-input"}>
                            <TextField
                                className={"TextField"}
                                InputProps={{
                                    className: "TextField",
                                }}
                                name="passwordControl"
                                id="outlined-textarea"
                                label="Conferma Password"
                                placeholder="Inserisci di nuovo la tua password"
                                variant="outlined"
                                aria-required="true"
                                type="password"
                                onChange={e => setPasswordControl(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={"form-input"}>
                        <Button buttonStyle='btn--outline' type="submit" onClick={validation}><h6
                            style={{color: "white"}}>Registrati</h6>
                        </Button>
                    </div>
                    {done ? <Redirect
                            to="/login"/> :
                        <div>{msgError}</div>} {/*Una volta che ha mandato i dati, viene reindirizzato a login*/}
                    <div>
                        oppure registrati con
                    </div>
                    <LoginFacebook onChangeUserFb={onChangeUserFb} onChangeFb={onChangeFb}/>
                </form>
            </div>
        </>
    );
}

export default SignUpForm;