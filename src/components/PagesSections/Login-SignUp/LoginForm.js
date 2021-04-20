import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import './Login.css'
import {Button} from "../../Buttons/Button";
import {Link} from "react-router-dom";
import {ApiLogin} from "../../../api";
import LoginFacebook from "./LoginFacebook";

const LoginForm = (props) => {
    const {onChangeUser, onChangeError} = props;


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [msgError, setMsgError] = useState('');

    const submit = async (e) => {
        if(e) e.preventDefault();

        if (email !== '' && password !== '') {
            try {
                let result = await ApiLogin(email, password);
                if (result !== null) {
                    onChangeError(false);
                    onChangeUser(email);
                } else onChangeError(true);
                setLoading(false);
            } catch (e) {
                throw e;
            }
        } else {
                setMsgError("ATTENZIONE! I campi sono vuoti")
        }
    }

    return (
        <>
            <div className={"form-container"}>
                <form className={"login-form"} noValidate autoComplete="off" onSubmit={submit}>
                    <div className={"form-input"}>

                        <TextField
                            className={"TextField"}
                            InputProps={{
                                className: "TextField",

                            }}
                            id="outlined-textarea"
                            label="Username"
                            placeholder="Inserisci la tua mail"
                            variant="outlined"
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={"form-input"}>
                        <TextField
                            className={"TextField"}
                            InputProps={{
                                className: "TextField",
                                autoFocus: true
                            }}
                            id="outlined-textarea"
                            label="Password"
                            placeholder="Inserisci la tua password"
                            variant="outlined"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={"form-input"}>
                        <Button buttonStyle='btn--outline' type="submit"><h6 style={{color: "white"}}>Accedi</h6>
                        </Button>
                    </div>
                    {msgError !== '' ? <div>{msgError}</div> : null}
                    {/*<FormControlLabel
                        value="ricordami"
                        control={<Checkbox color="primary" />}
                        label="Ricordami"
                        labelPlacement="end"
                    />*/}
                    {/*<div>
                        oppure
                    </div>
                    <LoginFacebook onChangeUserFb={onChangeUser}/>*/}
                </form>


            </div>
            <div className={"register-option-container"}>
                <div className={"register-option-text"}>
                    Non hai ancora un account?
                </div>
                <div className={"register-option-button"}>
                    <Link to='/sign-up'>
                        <Button buttonStyle='btn--outline--white'>
                            <h6>Registrati</h6>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default LoginForm;