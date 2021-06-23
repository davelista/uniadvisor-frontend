import React, {useState} from 'react';
import Card from "../../Cards/Card";
import styles from './CardsContainer.module.css'

const CardContainer = (props) => {
    const {onChangeSelected} = props;
    const titles = ["Cambio password", "Modifica dati personali", "Elimina account", "Scarica dati", "Contattaci"];

    const textPsw = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
        "incididunt ut labore et dolore magna aliqua.";


    return (
        <>
            <div className={styles.container}>
                {titles.map((title) => <Card title={title} text={textPsw} onChangeSelected={onChangeSelected}/>)}
            </div>
        </>
    );
}

export default CardContainer;