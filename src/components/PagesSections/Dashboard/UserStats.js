import React from "react";
import ProgressBar from "../../progress/ProgressBar";
import styles from "./UserDashboard.module.css";

export default function UserStats() {
    return (
        <div className={styles.statsSection}>
            <div className={styles.tabsContainer}>
                <div className={[styles.tabHeading, styles.selected].join(" ")}>Statistiche</div>
                <div className={styles.tabHeading}>ultimi voti</div>
                <div className={styles.tabHeading}>prossimi esami</div>
            </div>

            <Statistics />
        </div>
    );
}

function Statistics() {
    return (
        <div className={styles.statsBadgesContainer}>
            <div className={styles.statsBadge}>
                <div className={styles.heading}>media attuale</div>
                <div className={styles.content}>27,62</div>
            </div>
            <div className={styles.statsBadge}>
                <div className={styles.heading}>esami sostenuti</div>
                <div className={styles.content}>12</div>
            </div>
            <div className={styles.statsBadge}>
                <div className={styles.heading}>esami mancanti</div>
                <div className={styles.content}>9</div>
            </div>
            <div className={styles.statsBadge}>
                <div className={styles.heading}>crediti acquisiti</div>
                <ProgressBar value={104} max={180} />
            </div>
            <div className={styles.statsBadge} style={{gridColumn: "auto / span 2"}}>
                <div className={styles.heading}>proiezione voto di laurea</div>
                <ProgressBar value={101.26} max={110} showResult decimals={0} />
            </div>
        </div>
    );
}
