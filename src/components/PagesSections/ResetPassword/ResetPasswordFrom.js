import React from 'react';
import styles from "./ResetPassword.module.css"
import FormTextField from "../../Forms/FormTextField";
import {Button} from "../../Buttons/Button";
import useChangePswForm from "../Settings/Forms/useChangePswForm";

function ResetPasswordFrom(props) {

    const [form, submit] = useChangePswForm();
    return (
        <>
            <div className={"element-center"}>
                <div className={"title-red"}>Ripristina la password</div>
            </div>
            <div className={styles.section}>
            <form className={styles.form} noValidate autoComplete="off" onSubmit={submit}>
                <div className={styles.input}>
                    <FormTextField field={form.newPassword} variant="outlined" type="password" />
                </div>
                <div className={styles.input}>
                    <FormTextField field={form.repeatPassword} variant="outlined" type="password" />
                </div>
                <div className={styles.input}>
                <Button buttonStyle="btn--outline" type="submit">
                    <h6 style={{ color: "white" }}>Invia</h6>
                </Button>
                </div>
            </form>
            </div>
        </>
    );
}

export default ResetPasswordFrom;