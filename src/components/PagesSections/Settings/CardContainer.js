import React, {useState} from 'react';
import Card from "../../Cards/Card";
import styles from './CardsContainer.module.css'

const CardContainer = (props) => {
    const {selected, onChangeSelected} = props;
    //const titles = ["Cambio password", "Modifica dati personali", "Elimina account", "Scarica dati", "Contattaci"];
    const titles = ["Cambio password", "Elimina account", "Scarica dati"];
    /*const texts = ["Clicca qui per cambiare la tua password.", "Clicca qui per modificare i tuoi dati.",
        "Clicca qui per eliminare il tuo account. Attenzione, l'azione non è reversibile.", "Clicca qui per poter scaricare tutti i dati salvati sul sito.",
        "Hai delle segnalazioni da fare? Clicca qui per contattarci."]
     */
    const texts = ["Clicca qui per cambiare la tua password.",
        "Clicca qui per eliminare il tuo account. Attenzione, l'azione non è reversibile.", "Clicca qui per poter scaricare tutti i dati salvati sul sito."]


    return (
        <>
            <div className={styles.container}>
                {titles.map((title, i) =>
                    selected === title ? <Card title={title} text={texts[i]} isSelected={true} onChangeSelected={onChangeSelected}/>
                        : <Card title={title} text={texts[i]} isSelected={false} onChangeSelected={onChangeSelected}/> )}
            </div>
        </>
    );
}

export default CardContainer;