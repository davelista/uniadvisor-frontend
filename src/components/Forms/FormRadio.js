import React from 'react'
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";

const CustomRadio = withStyles({
    root: {
        color: "#E53A1E",
        "&$checked": {
            color: "#E53A1E",
        },
    },
    checked: {},
})(Radio);

export default function FormRadio({value, field, children, ...props}) {
    return (
        <>
            <CustomRadio checked={value === field.value} onChange={() => field.setValue(value)} />
            {children}
        </>
    )
}
