import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {Button} from "../../Buttons/Button";
import {ApiRegister} from "../../../api";
import {Redirect} from "react-router";
import LoginFacebook from "./LoginFacebook";

/* Complete data for facebook register */

const SignUpFb = (props) => {
    const {userFb, onChangeUser} = props;

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [university, setUniversity] = useState('');

    const [error, setError] = useState(true);
    const [msgError, setMsgError] = useState('');
    const [typeError, setTypeError] = useState('');

    const displayError = () => {
        switch (typeError) {
            case 'Empty':
                setMsgError("ATTENZIONE, compilare tutti i campi");
                break;
            default:
                setMsgError('');
                break;
        }
    }

    const validation = () => {
        if(firstname.length < 1 || lastname.length < 1 || university.length < 1){
            setTypeError('Empty');
            setError(true);
        }
        else {
            setTypeError('No Error');
            setError(false);
            return true;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(validation()){
            try {
                await ApiRegister(firstname, lastname, userFb.email, university);
                /* Se mi ritorna codice 200/user allora setto l'user altrimenti messaggio d'errore
                * onChangeUser(user) */
            } catch (e) {
                throw e;
            }
        } else {
            displayError();
        }
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
                                className: "TextField",
                                readOnly: true
                            }}
                            name="email"
                            id="outlined-textarea"
                            label="Email"
                            defaultValue={userFb.email}
                            aria-required="true"
                            variant="outlined"
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
                    <div className={"form-input"}>
                        <Button buttonStyle='btn--outline' buttonSize={"btn--small"}  type="submit" onClick={validation}><h6
                            style={{color: "white"}}>Completa la registrazione</h6>
                        </Button>
                    </div>
                    {error === false ? <Redirect
                            to="/dashboard"/> : <div>{msgError}</div> } {/*Una volta che ha mandato i dati, viene reindirizzato a login*/}
                </form>
            </div>
        </>
    );
}

export default SignUpFb;