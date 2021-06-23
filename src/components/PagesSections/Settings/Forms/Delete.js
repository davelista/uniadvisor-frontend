import React from 'react';
import FormTextField from "../../../Forms/FormTextField";
import useDeleteForm from "./useDeleteForm";
import styles from '../Settings.module.css';
import {Button} from "../../../Buttons/Button";

const Delete = (props) => {

    let name = "";
    const [form, submit] = useDeleteForm(name);
    return (
        <>

            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={submit}>

                    <div className={styles.formInput}>
                        <FormTextField field={form.email} variant="outlined" type="email"  />
                    </div>
                </form>

            </div>
        </>
    );
}

export default Delete;