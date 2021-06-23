import React from 'react';
import FormTextField from "../../../Forms/FormTextField";
import useChangePswForm from "./useChangePswForm";
import styles from '../Settings.module.css';
import {Button} from "../../../Buttons/Button";

const ChangePswForm = (props) => {

    let newPassword = "";
    const [form, submit] = useChangePswForm(newPassword);
    return (
        <>

            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={submit}>
                    <div className={styles.formInput}>
                        <FormTextField field={form.oldPassword} variant="outlined" type="password"  />
                    </div>
                    <div className={styles.formInput}>
                        <FormTextField field={form.newPassword} variant="outlined" type="password"  />
                    </div>
                    <div className={styles.formInput}>
                        <FormTextField field={form.repeatPassword} variant="outlined" type="password"  />
                    </div>
                </form>
                <Button buttonStyle="btn--outline" type="submit" >
                    <h6 style={{ color: "white" }}>Invia</h6>
                </Button>
            </div>
        </>
    );
}

export default ChangePswForm;