import useFormField, { formToSubmittable, isFormValid } from "../../../hooks/useFormField";

export default function useResetPasswordForm(tokenParam, onSubmit) {
    const token = useFormField("token", null, null, tokenParam);
    const new_password = useFormField("new_password", "Nuova password", "Password troppo corta", "", (value) => value?.length >= 8);
    const repeatPassword = useFormField(
        "repeat",
        "Conferma password",
        "La password non corrisponde",
        "",
        (value, form) => form.new_password.value === value
    );

    const form = { token, new_password, repeatPassword };

    const submit = async (e) => {
        if (e) e.preventDefault();

        const { repeatPassword, ...formWithoutControl } = form;
        if (isFormValid(form)) onSubmit(formToSubmittable(formWithoutControl));
    };

    return [form, submit];
}
