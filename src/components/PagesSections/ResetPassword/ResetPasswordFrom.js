import React from "react";
import styles from "./ResetPassword.module.css";
import FormTextField from "../../Forms/FormTextField";
import { Button } from "../../Buttons/Button";
import useResetPasswordForm from "./useResetPasswordForm";
import { useResetPassword } from "../../../hooks/useResetPassword";
import { useLocation, useParams } from "react-router";

function ResetPasswordFrom(props) {
    const { token } = useParams();
    const [request, result] = useResetPassword();
    const [form, submit] = useResetPasswordForm(token, request);

    return (
        <>
            <div className={"element-center"}>
                <div className={"title-red"}>Ripristina la password</div>
            </div>
            <div className={styles.section}>
                <form className={styles.form} noValidate autoComplete="off" onSubmit={submit}>
                    <div className={styles.input}>
                        <FormTextField field={form.new_password} variant="outlined" type="password" />
                    </div>
                    <div className={styles.input}>
                        <FormTextField field={form.repeatPassword} variant="outlined" type="password" />
                    </div>
                    <div className={styles.input}>
                        <Button buttonStyle="btn--outline" type="submit">
                            <h6 style={{ color: "white" }}>Invia</h6>
                        </Button>
                    </div>
                    <div>{result === "OK" ? "Password modificata" : result === "FAILED" ? "Non è stato possibile cambiare la password" : null}</div>
                </form>
            </div>
        </>
    );
}

export default ResetPasswordFrom;
