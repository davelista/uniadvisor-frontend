import React, { useContext, useEffect, useRef, useState } from "react";
import "./Login.css";
import { Button } from "../../Buttons/Button";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import useLoginForm from "./useLoginForm";
import FormTextField from "../../Forms/FormTextField";
import FormCheckbox from "../../Forms/FormCheckbox";
import useForgotPasswordForm from "./useForgotPasswordForm";
import useForgotPassword from "../../../hooks/useForgotPassword";
import FacebookLogin from "react-facebook-login";
import { FaFacebookF } from "react-icons/all";

const LoginForm = () => {
    const appData = useContext(AppContext);

    const [form, submit] = useLoginForm(appData.user.login);
    const [forgotPsw, setForgotPsw] = useState(false);

    const [requestForgot, resultForgot] = useForgotPassword();
    const [forgotPswForm, forgotPswSubmit] = useForgotPasswordForm(requestForgot);

    const autoSubmitted = useRef(false);
    const [autoSubmit, setAutoSubmit] = useState(false);

    useEffect(() => {
        if (!autoSubmit) return;
        if (autoSubmitted.current) return;
        autoSubmitted.current = true;
        submit();
    }, [submit, autoSubmit]);

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

    const handleOpen = () => {
        setForgotPsw(!forgotPsw);
    };

    let forgotForm = forgotPsw ? (
        <>
            <div className={"form-container"}>
                <form className={"login-form"} noValidate autoComplete="off" onSubmit={forgotPswSubmit}>
                    <div className={"form-input"}>
                        <FormTextField field={forgotPswForm.email} variant="outlined" type="email" />
                    </div>
                    <div className={"form-input"}>
                        <Button buttonStyle="btn--outline" type="submit">
                            <h6 style={{ color: "white" }}>Invia</h6>
                        </Button>
                    </div>
                </form>
                <div className="result-forgot">
                    {resultForgot === "OK"
                        ? "Una mail è stata inviata all'indirizzo specificato"
                        : resultForgot === "MISSING_USER"
                        ? "Account non trovato"
                        : resultForgot === "REQUIRES_CONFIRM"
                        ? "Indirizzo email non ancora verificato. Verifica l'indirizzo email per continuare"
                        : resultForgot === "FAILED"
                        ? "Qualcosa è andato storto :("
                        : null}
                </div>
            </div>
        </>
    ) : null;

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
                    <div className={"forgot-psw"} onClick={handleOpen}>
                        Hai dimenticato la password?
                    </div>
                    <div className={"form-input"}>
                        <Button buttonStyle="btn--outline" type="submit">
                            <h6 style={{ color: "white" }}>Accedi</h6>
                        </Button>
                    </div>
                    <>
                        <div>oppure accedi con</div>
                        <FacebookLogin
                            appId="207812577218371"
                            autoLoad={false}
                            fields="email"
                            // onClick={}
                            callback={async (res) => {
                                form.login_type.setValue("Facebook");
                                form.email.setValue(res.email);
                                form.external_id.setValue(res.id);
                                form.remember_me.setValue(true);
                                setAutoSubmit(true);
                            }}
                            textButton=""
                            icon={<FaFacebookF style={{ fill: "white" }} />}
                            cssClass="facebook-btn"
                        />
                    </>
                </form>
            </div>
            {forgotForm}
            <div className={"register-option-container"}>
                <div className={"register-option-text"}>Non hai ancora un account?</div>
                <div className={"register-option-button"}>
                    <Link to="/sign-up">
                        <Button buttonStyle="btn--outline--white" buttonSize={"btn--small"}>
                            <h6>Registrati</h6>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
