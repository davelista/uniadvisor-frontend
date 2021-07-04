import useFormField, { formToSubmittable, isFormValid } from "../../../hooks/useFormField";

export default function useSignUpForm(onSubmit) {
    const name = useFormField("name", "Nome", "Campo non valido", "", (value, form) =>
        form.login_type.value === "Unihub" ? value?.length > 0 : true
    );
    const surname = useFormField("surname", "Cognome", "Campo non valido", "", (value, form) =>
        form.login_type.value === "Unihub" ? value?.length > 0 : true
    );
    const email = useFormField("email", "Email", "Email non valida", "", (value, form) =>
        form.login_type.value === "Unihub" ? value?.length > 0 && value.includes("@") : true
    );
    const login_type = useFormField("", "", "", "Unihub");
    const password = useFormField("password", "Password", "Password troppo corta", "", (value, form) =>
        form.login_type.value === "Unihub" ? value?.length >= 8 : true
    );
    const passwordControl = useFormField("passwordControl", "Conferma password", "La password inserita non corrisponde", "", (value, form) =>
        form.login_type.value === "Unihub" ? value === form.password.value : true
    );
    const university = useFormField("university", "Università", "Seleziona un valore", "", (value) => value.length > 0);
    const external_id = useFormField("external_id");

    const form = { name, surname, email, login_type, password, passwordControl, university, external_id };

    const submit = async (e) => {
        if (e) e.preventDefault();

        const { passwordControl, ...formWithoutPasswordControl } = form;
        if (isFormValid(form)) onSubmit(formToSubmittable(formWithoutPasswordControl));
    };

    return [form, submit];
}
