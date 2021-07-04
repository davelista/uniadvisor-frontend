import useFormField, { formToSubmittable, isFormValid } from "../../../hooks/useFormField";

/**
 *
 * @param {{(form: object)=>void}} onSubmit Receives `form` object as arg
 */
export default function useLoginForm(onSubmit) {
    const email = useFormField("email", "Email", "Email non valida", "", (value) => value?.length > 0);
    const password = useFormField("password", "Password", "Password non valida", "", (value, form) =>
        form.login_type.value === "Unihub" ? value?.length > 0 : true
    );
    const login_type = useFormField("login_type", "", "", "Unihub");
    const remember_me = useFormField("remember_me", "Ricorda l'accesso", "", false);
    const external_id = useFormField("external_id");

    const form = { email, password, login_type, remember_me, external_id };

    const submit = async (e) => {
        if (e) e.preventDefault();

        if (isFormValid(form)) onSubmit(formToSubmittable(form));
    };

    return [form, submit];
}
