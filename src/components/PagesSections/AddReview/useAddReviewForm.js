import { useState } from "react";

function useFormField(key, label, helperText = "", initialValue = null, validate = () => true) {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);

    return {
        key,
        value,
        setValue,
        error,
        setError,
        helperText,
        label,
        validate,
    };
}

const currentDate = () => {
    const now = new Date();
    return (
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("-") +
        " " +
        [now.getHours(), now.getMinutes(), now.getSeconds()].join(":")
    );
};

export default function useAddReviewForm() {
    // todo: questi due potrebbero auto settarsi usando come initial value i valori di argomenti passati all'hook
    const professor_id = useFormField("professor_id", null, null, "");
    const user_id = useFormField("user_id", null, null, "");
    
    const corso_id = useFormField("corso_id", null, "Seleziona un corso", null, (value) => value !== null);
    
    const titolo = useFormField("titolo", "Titolo della recensione", "Il campo non può essere vuoto", "", (value) => value?.length > 0);
    const corpo = useFormField("corpo", "Testo della recensione", "Il campo non può essere vuoto", "", (value) => value?.length > 0);

    const stato = useFormField("stato", "", "", "TO_CHECK");
    const data_creazione = useFormField("data_creazione", "Data recensione", "", currentDate());
    const anno_accademico = useFormField("anno_accademico", "Anno accademico", "Seleziona un anno accademico", "", (value) => value.length > 0);
    const voto = useFormField("voto", "Voto esame", "Inserisci un voto valido", "0", (value) => parseInt(value) > 0 && parseInt(value) <= 30);
    const anonimo = useFormField("anonimo", "Resta anonimo", "", false);

    const chiarezza_spiegazione_prof = useFormField("chiarezza_spiegazione_prof", "Chiarezza spiegazioni", "Imposta un valore", 0, (value) => value > 0);
    const materiale_didattico_prof = useFormField("materiale_didattico_prof", "Materiale didattico", "Imposta un valore", 0, (value) => value > 0);
    const correzione_compiti_prof = useFormField("correzione_compiti_prof", "Correzione compiti", "Imposta un valore", 0, (value) => value > 0);
    const disponibilita_prof = useFormField("disponibilita_prof", "Disponibilità", "Imposta un valore", 0, (value) => value > 0);

    const difficolta_argomenti_corso = useFormField("difficolta_argomenti_corso", "Difficoltà argomenti", "Imposta un valore", 0, (value) => value > 0);
    const difficolta_esame_corso = useFormField("difficolta_esame_corso", "Difficoltà esami", "Imposta un valore", 0, (value) => value > 0);
    const interesse_argomenti_corso = useFormField("interesse_argomenti_corso", "Interesse argomenti", "Imposta un valore", 0, (value) => value > 0);
    const lo_consiglieresti_corso = useFormField("lo_consiglieresti_corso", "Lo consiglieresti", "Imposta un valore", 0, (value) => value > 0);


    const form = {
        corso_id,
        professor_id,
        user_id,
        titolo,
        corpo,
        stato,
        data_creazione,
        anno_accademico,
        voto,
        anonimo,
        chiarezza_spiegazione_prof,
        materiale_didattico_prof,
        correzione_compiti_prof,
        disponibilita_prof,
        difficolta_argomenti_corso,
        difficolta_esame_corso,
        interesse_argomenti_corso,
        lo_consiglieresti_corso,
    };

    const submit = () => {
        let error = false;
        for (const key in form) {
            if (Object.hasOwnProperty.call(form, key)) {
                const element = form[key];
                if (!element.validate(element.value)) {
                    console.log("wrong element with key: ", key, "\nElement is: ", element.value);
                    element.setError(true);
                    error = true;
                }
                else
                    element.setError(false);
            }
        }

        if (!error)
            console.log("submitting ", form);
    };

    return [form, submit];
}

/**
# form hook

```ts
// component.js
const form = useComponentForm();
```

```ts
// useComponentForm.js
const form: IForm;

interface IForm {
    [apiID: string]: {
        key: apiID;
        label: string;
        value: any;
        setValue: React.Dispatch<React.SetStateAction<any>>;
        validate: (any) => boolean;
        error: boolean;
        setError: React.Dispatch<React.SetStateAction<boolean>>;
        type?: FormType;
    };
}

enum FormType {
    TextField,
    Radio,
    Rating,
}
```

handleSubmit dentro hook ed esportato tipo questo

```ts
const submit = () => {
    for (const key in form) {
        if (Object.hasOwnProperty.call(form, key)) {
            const item = form[key];
            if (item.validate(item.value))
                // ...do something
            else
                // ...something else
        }
    }
};
```

se tutti gli elementi vanno bene, chiama l'api endpoint, altrimenti errore?
 */
