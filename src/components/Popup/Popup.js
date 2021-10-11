import React from 'react';
import './Popup.module.css'
import {GrClose} from "react-icons/all";
import styles from "./Popup.module.css";

const Popup = (props) => {

    const {titleText, onClose} = props;

    const {children} = props;
    return (
    <div className={styles.overlay}>
        <div className={styles.container}>
            <div className={styles.closeSection}>
                <span onClick={onClose}><GrClose size={20}/></span>
            </div>
            <div className={styles.titleContainer}>
                <div className={styles.title}>{titleText}</div>
            </div>
            <div className={styles.divider}/>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    </div>
    );
};

export default Popup;