import useFormField, { formToSubmittable, isFormValid } from "../../../hooks/useFormField";

export default function useChangePswForm(onSubmit) {
    const email = useFormField("email", "Email", "Email non valida", "", (value) => value.length > 0 && value.includes("@"));

    const form = { email };

    const submit = async (e) => {
        if (e) e.preventDefault();

        if (isFormValid(form)) onSubmit(formToSubmittable(form));
    };

    return [form, submit];
}
