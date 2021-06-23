import React from 'react';
import FormTextField from "../../../Forms/FormTextField";
import useModifyForm from "./useModifyForm";
import styles from '../Settings.module.css';
import {Button} from "../../../Buttons/Button";

const Modify = (props) => {

    let name = "";
    const [form, submit] = useModifyForm(name);
    return (
        <>

            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={submit}>
                    <div className={styles.formInput}>
                        <FormTextField field={form.name} variant="outlined" />
                    </div>
                    <div className={styles.formInput}>
                        <FormTextField field={form.lastName} variant="outlined" />
                    </div>
                    <div className={styles.formInput}>
                        <FormTextField field={form.email} variant="outlined" type="email"  />
                    </div>
                </form>
                <Button buttonStyle="btn--outline" buttonSize={"btn--small"} type="submit" >
                    <h6 style={{ color: "white" }}>Invia</h6>
                </Button>
            </div>
        </>
    );
}

export default Modify;