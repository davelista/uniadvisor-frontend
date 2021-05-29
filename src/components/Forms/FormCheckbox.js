import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Forms.module.css";

const CustomCheckbox = withStyles({
    root: {
        color: "#E53A1E",
        "&$checked": {
            color: "#E53A1E",
        },
    },
    checked: {},
})(Checkbox);

export default function FormCheckbox({ field, fullWidth = false, noUnderline = false, ...props }) {
    return (
        <div
            className={[
                styles.container,
                fullWidth ? styles.fullwidth : null,
                noUnderline ? null : styles.underlined,
            ].join(" ")}
        >
            <span className={styles.label}>{field.label}</span>
            <CustomCheckbox checked={field.value} onChange={(_, checked) => field.setValue(checked)} {...props} />
        </div>
    );
}
