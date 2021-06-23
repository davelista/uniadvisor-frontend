import useFormField, { formToSubmittable, isFormValid } from "../../../../hooks/useFormField";

/**
 *
 * @param {{(form: object)=>void}} onSubmit Receives `form` object as arg
 */
export default function useDeleteForm(onSubmit) {
    const email = useFormField("email", "Email", "Email non valida", "", (value) => value?.length > 0);

    const form = { email };

    const submit = async (e) => {
        if (e) e.preventDefault();
        if (isFormValid(form)) onSubmit(formToSubmittable(form));

    };

    return [form, submit];
}
