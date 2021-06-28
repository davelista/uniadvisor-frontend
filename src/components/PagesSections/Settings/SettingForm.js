import React from "react";
import { ChangePswForm, Delete, Modify } from "./index";
import styles from "./Settings.module.css";
import Download from "./Forms/Download";

const SettingForm = (props) => {
    const { selected } = props;
    let form;
    // let txtButton;

    switch (selected) {
        case "Cambio password":
            form = <ChangePswForm />;
            // txtButton = "Invia";
            break;
        /*case "Modifica dati personali":
            form = <Modify />;
            // txtButton = "Invia";
            break;*/
        case "Elimina account":
            form = <Delete />;
            // txtButton = "Elimina";
            break;
        case "Scarica dati":
            form = <Download />;
            // txtButton = "Download";
            break;
        /*case "Contattaci":
            form = <div>Contattaci</div>;
            break;*/
        default:
            return <div />;
    }
    return (
        <>
            <div className={styles.section}>
                <h2 className={styles.title}>{selected}</h2>
                {form}
                {/* <div style={{maxWidth:"30%"}}>
                    <Button buttonStyle="btn--outline" type="submit" >
                        <h6 style={{ color: "white" }}>{txtButton}</h6>
                    </Button>
                </div> */}
            </div>
        </>
    );
};

export default SettingForm;
