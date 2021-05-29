import React from "react";
import Rating from "@material-ui/lab/Rating";
import styles from "./Forms.module.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";

export default function FormRating({ field, fullWidth = false, noUnderline = false, ...props }) {
    return (
        <div
            className={[
                styles.container,
                fullWidth ? styles.fullwidth : null,
                noUnderline ? null : styles.underlined,
            ].join(" ")}
        >
            <span className={styles.label}>{field.label}</span>
            <Rating
                name={field.key}
                value={field.value}
                onChange={(_, value) => field.setValue(value)}
                emptyIcon={<FiberManualRecordOutlinedIcon style={{ fill: "#e53a1e" }} />}
                icon={<FiberManualRecordIcon style={{ fill: "#e53a1e" }} />}
                {...props}
            />
        </div>
    );
}
