import React, { useContext, useState } from "react";
import FormTextField from "../../../Forms/FormTextField";
import useDeleteForm from "./useDeleteForm";
import styles from "../Settings.module.css";
import { Button } from "../../../Buttons/Button";
import { AppContext } from "../../../../context/AppContext";
import { Redirect } from "react-router";

const Delete = () => {
    const appData = useContext(AppContext);
    const [result, setResult] = useState(null);

    const handleSubmit = async () => {
        const res = await appData.user.deleteUser();
        if (res) setResult("OK");
        else setResult("FAILED");
    };

    const [form, submit] = useDeleteForm(appData.user.data.email, handleSubmit);

    if (result === "OK") return <Redirect to="/" />;

    return (
        <>
            <form className={styles.formContainer} onSubmit={submit}>
                <div className={styles.form}>
                    <div className={styles.formInput}>
                        <FormTextField field={form.email} variant="outlined" type="email" />
                    </div>
                </div>
                <div style={{ maxWidth: "30%" }}>
                    <Button buttonStyle="btn--outline" type="submit">
                        <h6 style={{ color: "white" }}>Elimina account</h6>
                    </Button>
                </div>
                <div>{result === "FAILED" ? "Non è stato possibile eliminare l'account" : null}</div>
            </form>
        </>
    );
};

export default Delete;
