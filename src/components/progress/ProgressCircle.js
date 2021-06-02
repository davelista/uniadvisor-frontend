import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const CustomCircularProgress = withStyles({
    colorPrimary: {
        color: "var(--secondary-color)",
    },
})(CircularProgress);

export default function ProgressCirle({ ...props }) {
    return <CustomCircularProgress />;
}
