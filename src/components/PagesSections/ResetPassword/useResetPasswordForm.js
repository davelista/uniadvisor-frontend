import useFormField, { formToSubmittable, isFormValid } from "../../../hooks/useFormField";

/**
 *
 * @param {{(form: object)=>void}} onSubmit Receives `form` object as arg
 */
export default function useChangePswForm(onSubmit) {
    const newPassword = useFormField("new", "Nuova password", "Password non valida", "", (value) => value?.length > 0);
    const repeatPassword = useFormField("repeat", "Ripeti la password", "Password non valida", "", (value) => value?.length > 0);

    const form = { newPassword, repeatPassword };

    const submit = async (e) => {
        if (e) e.preventDefault();
        if(newPassword.value === repeatPassword.value){
            if (isFormValid(form)) onSubmit(formToSubmittable(form));
        }
    };

    return [form, submit];
}
