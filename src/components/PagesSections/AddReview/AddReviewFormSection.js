import React from "react";
import styles from "./AddReview.module.css";

export default function AddReviewFormSection(props) {
    const { title, children } = props;

    return (
        <div className={styles["form-section"]}>
            <div className={styles["form-section-title"]}>{title}</div>
            <div className={styles["form-section-body"]}>{children}</div>
        </div>
    );
}
