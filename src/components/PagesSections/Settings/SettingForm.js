import React from 'react';
import {ChangePswForm, Delete, Modify} from "./index";
import styles from './Settings.module.css'
import {Button} from "../../Buttons/Button";

const SettingForm = (props) => {
    const {selected} = props;
    let form;

    switch (selected) {
        case "Cambio password":
            form = (<ChangePswForm/>);
            break;
        case "Modifica dati personali":
            form = (<Modify/>);
            break;
        case "Elimina account":
            form = (<Delete/>);
            break;
        case "Scarica dati":
            form =  (<div><Button buttonStyle="btn--outline" type="submit" >
                <h6 style={{ color: "white" }}>Dowload</h6>
            </Button></div>);
            break;
        case "Contattaci":
            form = (<div>Contattaci</div>);
            break;
        default:
            return (<div/>);

    }
    return (
        <>
            <div className={styles.section}>
                <h2 className={styles.title}>{selected}</h2>

                {form}
            </div>
        </>
    );
}

export default SettingForm;