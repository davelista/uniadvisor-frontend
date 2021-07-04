import React, { useContext } from "react";
import { Button } from "../../Buttons/Button";
import FormTextField from "../../Forms/FormTextField";
import MenuItem from "@material-ui/core/MenuItem";
import { AppContext } from "../../../context/AppContext";
import useSignUpForm from "./useSignUpForm";
import useSignUp from "../../../hooks/useSignUp";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { FaFacebookF } from "react-icons/all";

const SignUpForm = () => {
    const appData = useContext(AppContext);

    const [signup, sending, result] = useSignUp();
    const [form, submit] = useSignUpForm(signup);

    if (result === "OK" && form.login_type.value === "Unihub") return <RequiresConfirm />;
    if (result === "OK" && form.login_type.value === "Facebook") return <Registered isnew />;
    if (result === "ALREADY_REGISTERED") return <Registered />;
    if (result === "FAILED") return <FormError />;

    return (
        <>
            <div className={"login-title-container"}>
                <div className={"title-red"}>Registrati</div>
            </div>
            <div className={"form-container"}>
                <form className={"login-form"} noValidate autoComplete="off" onSubmit={submit}>
                    {form.login_type.value === "Unihub" ? (
                        <>
                            <div className={"form-row"}>
                                <div className={"form-input"}>
                                    <FormTextField field={form.name} variant="outlined" fullWidth />
                                </div>
                                <div className={"form-input"}>
                                    <FormTextField field={form.surname} variant="outlined" fullWidth />
                                </div>
                            </div>
                            <div className={"form-input"}>
                                <FormTextField field={form.email} type="email" variant="outlined" fullWidth />
                            </div>
                        </>
                    ) : null}
                    <div className={"form-input"}>
                        <FormTextField field={form.university} select fullWidth>
                            {appData.universitiesList?.universities?.map((university) => (
                                <MenuItem value={university} key={university}>
                                    {university}
                                </MenuItem>
                            ))}
                        </FormTextField>
                    </div>
                    {form.login_type.value === "Unihub" ? (
                        <div className={"form-row"}>
                            <div className={"form-input"}>
                                <FormTextField field={form.password} type="password" variant="outlined" fullWidth />
                            </div>
                            <div className={"form-input"}>
                                <FormTextField field={form.passwordControl} type="password" variant="outlined" fullWidth />
                            </div>
                        </div>
                    ) : null}
                    <div className={"form-input"}>
                        <Button buttonStyle="btn--outline" buttonSize={"btn--small"} type="submit" disabled={sending}>
                            <h6 style={{ color: "white" }}>Registrati</h6>
                        </Button>
                    </div>
                </form>

                {form.login_type.value === "Unihub" ? (
                    <>
                        <div>oppure registrati con</div>
                        <FacebookLogin
                            appId="207812577218371"
                            autoLoad={false}
                            fields="last_name, name, email, picture"
                            // onClick={}
                            callback={async (res) => {
                                form.login_type.setValue("Facebook");
                                form.surname.setValue(res.last_name);
                                form.name.setValue(
                                    res.name
                                        .split(" ")
                                        .filter((v) => v !== res.last_name)
                                        .join(" ")
                                );
                                form.email.setValue(res.email);
                                form.external_id.setValue(res.id);
                            }}
                            textButton=""
                            icon={<FaFacebookF style={{ fill: "white" }} />}
                            cssClass="facebook-btn"
                        />
                    </>
                ) : null}
            </div>
        </>
    );
};

export default SignUpForm;

function Registered({ isnew = false }) {
    return (
        <div className={styles.doneSection}>
            <h2 className={styles.doneTitle}>Utente{isnew ? null : " già"} registrato</h2>
            <div className={styles.doneBody}>Clicca il bottone sottostante per effettuare il login</div>
            <Link to="/login">
                <Button buttonStyle={"btn--outline"}>Login</Button>
            </Link>
        </div>
    );
}
function RequiresConfirm() {
    return (
        <div className={styles.doneSection}>
            <h2 className={styles.doneTitle}>Utente registrato</h2>
            <div className={styles.doneBody}>
                Una mail di conferma è stata inviata all'indirizzo specificato. <br />
                Una volta confermata la registrazione, clicca il bottone sottostante per effettuare il login
            </div>
            <Link to="/login">
                <Button buttonStyle={"btn--outline"}>Login</Button>
            </Link>
        </div>
    );
}
function FormError() {
    return (
        <div className={styles.doneSection}>
            <h2 className={styles.doneTitle}>Oops!</h2>
            <div className={styles.doneBody}>{"Qualcosa è andato storto :("}</div>
        </div>
    );
}
