import React from 'react';
import {ChangePswForm, Modify} from "./Forms";
import styles from './Settings.module.css'

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
            form = (<div>elimina</div>);
            break;
        case "Scarica dati":
            form =  (<div>Scarica</div>);
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
                <h2>{selected}</h2>
                {form}
            </div>
        </>
    );
}

export default SettingForm;