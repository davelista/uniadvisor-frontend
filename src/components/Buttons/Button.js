import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--outline--white"];

const SIZES = ["btn--small", "btn--medium", "btn--large", "btn--mobile", "btn--wide"];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor, ...props }) => {
    //Se è stato definito uno stile del bottone inserisci lo stile altrimenti consideri il primo nell'array (btn primary)
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonColor = STYLES.includes(buttonColor) ? buttonColor : null;

    //Creo un botton con le proprietà di stile, la proprietà di onClick e type. Children è il testo del bottone
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type} {...props}>
            {children}
        </button>
    );
};
