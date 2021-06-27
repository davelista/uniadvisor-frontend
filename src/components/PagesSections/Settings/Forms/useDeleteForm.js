import useFormField, { isFormValid } from "../../../../hooks/useFormField";

/**
 *
 * @param {{(form: object)=>void}} onSubmit Receives `form` object as arg
 */
export default function useDeleteForm(userEmail, onSubmit) {
    const email = useFormField("email", "Email", "Email non valida", "", (value) => value === userEmail);

    const form = { email };

    const submit = async (e) => {
        if (e) e.preventDefault();

        if (isFormValid(form)) onSubmit();
    };

    return [form, submit];
}
