import { useState } from "react";

export default function useFormField(key, label, helperText = "", initialValue = null, validate = () => true) {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);

    return {
        key,
        value,
        setValue,
        error,
        setError,
        helperText,
        label,
        validate,
    };
}

export function isFormValid(form) {
    let error = false;
    for (const key in form) {
        if (Object.hasOwnProperty.call(form, key)) {
            const element = form[key];
            if (!element.validate(element.value, form)) {
                element.setError(true);
                error = true;
            } else element.setError(false);
        }
    }
    return !error;
}

/**
 * Transform the frontend form object to an understandable one for backend
 * @param {object} form An object containing some fields produced by `useFormField(...)`
 * @returns {object} An object ready to be submitted
 */
export function formToSubmittable(form) {
    const submittable = {};
    for (const key in form) {
        if (Object.hasOwnProperty.call(form, key)) {
            const element = form[key];
            submittable[key] = element.value;
        }
    }
    return submittable;
}
