import React from 'react';
import styles from "./Card.module.css";

const Card = (props) => {

    const {title, text, onChangeSelected} = props;

    return (
        <>
            <div className={styles.card} onClick={() => onChangeSelected(title)}>
                <div  className={styles.title}>
                    {title}
                </div>
                <div className={styles.text}>
                    {text}
                </div>
            </div>
        </>
    );
}

export default Card;