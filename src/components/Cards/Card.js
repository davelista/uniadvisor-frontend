import React, {useState} from 'react';
import styles from "./Card.module.css";

const Card = (props) => {

    const {isSelected, title, text, onChangeSelected} = props;


    let card = (
        <>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </>
    );

    return (
        <>
            {isSelected ?
                <div className={styles.cardActive}>
                    {card}
                </div>

                :

                <div className={styles.card} onClick={() => {
                    onChangeSelected(title)
                }}>
                    {card}
                </div>}

        </>
    );
}

export default Card;