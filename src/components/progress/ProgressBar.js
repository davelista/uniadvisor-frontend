import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import styles from "./ProgressBar.module.css"

const CUstomLinearProgress = withStyles({
    root: {
        height: "8px",
      },
      colorPrimary: {
        backgroundColor: "#888",
      },
      bar: {
        backgroundColor: "var(--secondary-color)",
      },
})(LinearProgress);


export default function ProgressBar({value, max, showResult = false, decimals = 1, ...props}) {
    return (
        <div className={styles.container}>
            <div className={styles.valuesContainer}>
                <div className={styles.ratio}>{value}/{max}</div>
                <div className={styles.result}>{showResult ? value.toFixed(decimals) : (value / max * 100).toFixed(decimals) + "%"}</div>
            </div>
            <CUstomLinearProgress variant="determinate" value={value / max * 100} {...props} />
        </div>
    )
}
