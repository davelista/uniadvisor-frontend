import useFormField, { formToSubmittable, isFormValid } from "../../../hooks/useFormField";

/**
 *
 * @param {{(form: object)=>void}} onSubmit Receives `form` object as arg
 */
export default function useLoginForm(onSubmit) {
    const email = useFormField("email", "Email", "Email non valida", "", (value) => value?.length > 0);
    const password = useFormField("password", "Password", "Password non valida", "", (value) => value?.length > 0);
    const remember_me = useFormField("remember_me", "Ricorda l'accesso", "", false);

    const form = { email, password, remember_me };

    const submit = async (e) => {
        if (e) e.preventDefault();

        if (isFormValid(form)) onSubmit(formToSubmittable(form));
    };

    return [form, submit];
}
