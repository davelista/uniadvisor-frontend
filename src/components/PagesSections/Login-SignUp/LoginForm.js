import React, { useContext, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import { Button } from "../../Buttons/Button";
import { Link } from "react-router-dom";
import { ApiLogin } from "../../../api";
import LoginFacebook from "./LoginFacebook";
import { AppContext } from "../../../context/AppContext";
import useLoginForm from "./useLoginForm";
import FormTextField from "../../Forms/FormTextField";
import FormCheckbox from "../../Forms/FormCheckbox";

const LoginForm = () => {
    const appData = useContext(AppContext);

    const [form, submit] = useLoginForm(appData.user.login);

    useEffect(() => {
        switch (appData.user.auth) {
            case "MISSING_USER":
                form.email.setError(true);
                break;
            case "INVALID_CREDENTIALS":
                form.password.setError(true);
                break;
            default:
                break;
        }
    }, [appData.user.auth, form.email, form.password]);

    return (
        <>
            <div className={"element-center"}>
                <div className={"title-red"}>Login</div>
            </div>
            <div className={"form-container"}>
                <form className={"login-form"} noValidate autoComplete="off" onSubmit={submit}>
                    <div className={"form-input"}>
                        <FormTextField field={form.email} variant="outlined" type="email" />
                    </div>
                    <div className={"form-input"}>
                        <FormTextField field={form.password} variant="outlined" type="password" />
                    </div>
                    <FormCheckbox field={form.remember_me} noUnderline />
                    <div className={"form-input"}>
                        <Button buttonStyle="btn--outline" type="submit">
                            <h6 style={{ color: "white" }}>Accedi</h6>
                        </Button>

                    </div>
                    <div className={'forgot-psw'}>Hai dimenticato la password?</div>
                    {/*<div>
                        oppure
                    </div>
                    <LoginFacebook onChangeUserFb={onChangeUser}/>*/}
                </form>
            </div>
            <div className={"register-option-container"}>
                <div className={"register-option-text"}>Non hai ancora un account?</div>
                <div className={"register-option-button"}>
                    <Link to="/sign-up">
                        <Button buttonStyle="btn--outline--white">
                            <h6>Registrati</h6>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
