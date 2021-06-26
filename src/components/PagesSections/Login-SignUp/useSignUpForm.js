import useFormField, { formToSubmittable, isFormValid } from "../../../hooks/useFormField";

export default function useSignUpForm(onSubmit) {
    const name = useFormField("name", "Nome", "Campo non valido", "", (value) => value?.length > 0);
    const surname = useFormField("surname", "Cognome", "Campo non valido", "", (value) => value?.length > 0);
    const email = useFormField("email", "Email", "Email non valida", "", (value) => value?.length > 0 && value.includes("@"));
    const password = useFormField("password", "Password", "Password troppo corta", "", (value) => value?.length >= 8);
    const passwordControl = useFormField(
        "passwordControl",
        "Conferma password",
        "La password inserita non corrisponde",
        "",
        (value, form) => value === form.password.value
    );
    const university = useFormField("university", "Università", "Seleziona un valore", "", (value) => value.length > 0);

    const form = { name, surname, email, password, passwordControl, university };

    const submit = async (e) => {
        if (e) e.preventDefault();

        const { passwordControl, ...formWithoutPasswordControl } = form;
        if (isFormValid(form)) onSubmit(formToSubmittable(formWithoutPasswordControl));
    };

    return [form, submit];
}
