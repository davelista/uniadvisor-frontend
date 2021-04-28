import React from "react";
import styles from "./AddReview.module.css";

export default function AddReviewFormSection(props) {
    const { title, children } = props;

    return (
        <div className={styles.formSection}>
            <div className={styles.formSectionTitle}>{title}</div>
            <div>{children}</div>
        </div>
    );
}
