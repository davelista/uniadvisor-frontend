import useFormField, { formToSubmittable, isFormValid } from "../../../../hooks/useFormField";

/**
 *
 * @param {{(form: object)=>void}} onSubmit Receives `form` object as arg
 */
export default function useChangePswForm(userEmail, onSubmit) {
    const email = useFormField("email", null, null, userEmail);

    const old_password = useFormField("old_password", "Vecchia password", "Password non valida", "", (value) => value?.length > 0);
    const new_password = useFormField("new_password", "Nuova password", "Password non valida", "", (value) => value?.length >= 8);
    const confirmPassword = useFormField(
        "repeat",
        "Conferma password",
        "La password non corrisponde",
        "",
        (value, form) => value === form.new_password.value
    );

    const form = { email, old_password, new_password, confirmPassword };

    const submit = async (e) => {
        if (e) e.preventDefault();

        const { confirmPassword, ...formWithoutConfirmPassword } = form;
        if (isFormValid(form)) onSubmit(formToSubmittable(formWithoutConfirmPassword));
    };

    return [form, submit];
}
