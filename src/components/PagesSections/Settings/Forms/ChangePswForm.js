import React, { useContext, useState } from "react";
import FormTextField from "../../../Forms/FormTextField";
import useChangePswForm from "./useChangePswForm";
import styles from "../Settings.module.css";
import { Button } from "../../../Buttons/Button";
import { AppContext } from "../../../../context/AppContext";

const ChangePswForm = (props) => {
    const appData = useContext(AppContext);
    const [result, setResult] = useState(null);

    const handleSubmit = async (data) => {
        const res = await appData.user.changePassword(data);
        if (res) setResult("OK");
        else setResult("FAILED");
    };

    const [form, submit] = useChangePswForm(appData.user.data.email, handleSubmit);

    return (
        <>
            <form className={styles.formContainer} noValidate autoComplete="off" onSubmit={submit}>
                <div className={styles.form}>
                    <div className={styles.formInput}>
                        <FormTextField field={form.old_password} variant="outlined" type="password" />
                    </div>
                    <div className={styles.formInput}>
                        <FormTextField field={form.new_password} variant="outlined" type="password" />
                    </div>
                    <div className={styles.formInput}>
                        <FormTextField field={form.confirmPassword} variant="outlined" type="password" />
                    </div>
                </div>
                <div style={{ maxWidth: "30%" }}>
                    <Button buttonStyle="btn--outline" type="submit">
                        <h6 style={{ color: "white" }}>Invia</h6>
                    </Button>
                </div>
                <div>
                    {result === "OK"
                        ? "La password è stata cambiata con successo"
                        : result === "FAILED"
                        ? "Errore: non è stato possibile cambiare la password"
                        : null}
                </div>
            </form>
        </>
    );
};

export default ChangePswForm;
