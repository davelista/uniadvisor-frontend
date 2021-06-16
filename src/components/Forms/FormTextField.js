import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CustomTextField = withStyles({
    root: {

        "& label.Mui-focused": {
            color: "#E53A1E",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#E53A1E"
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: "1.5rem",
            width: "100%",
            "&.Mui-focused fieldset": {
                borderColor: "#E53A1E",

            }
        }
    },
})(TextField);

export default function FormTextField({field, ...props}) {
    return (
        <CustomTextField
            label={field.label}
            value={field.value}
            error={field.error}
            helperText={field.error ? field.helperText : null}
            onChange={(e) => field.setValue(e.target.value)}
            {...props}
        />
    );
}
