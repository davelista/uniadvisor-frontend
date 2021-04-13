import { useState } from "react";

export default function useAddReviewForm() {

    // todo: questi tre potrebbero auto settarsi usando come initial value i valori di argomenti passati all'hook
    const [corso_id, setCorso_id] = useState("")
    const [professor_id, setProfessor_id] = useState("")
    const [user_id, setUser_id] = useState("");

    const [titolo, setTitolo] = useState("");
    const [corpo, setCorpo] = useState("");

    const [stato, setStato] = useState("TO_CHECK")
    const [data_creazione, setData_creazione] = useState(""); // todo : metti data corrente come data(%Y-%m-%d %H:%M:%S)
    const [anno_accademico, setAnno_accademico] = useState("");
    const [voto, setVoto] = useState("");
    const [anonimo, setAnonimo] = useState(true);

    const [chiarezza_spiegazione_prof, setChiarezza_spiegazione_prof] = useState(0);
    const [materiale_didattico_prof, setMateriale_didattico_prof] = useState(0);
    const [correzione_compiti_prof, setCorrezione_compiti_prof] = useState(0);
    const [disponibilita_prof, setDisponibilita_prof] = useState(0);

    const [difficolta_argomenti_corso, setDifficolta_argomenti_corso] = useState(0);
    const [difficolta_esame_corso, setDifficolta_esame_corso] = useState(0);
    const [interesse_argomenti_corso, setInteresse_argomenti_corso] = useState(0);
    const [lo_consiglieresti_corso, setLo_consiglieresti_corso] = useState(0);

    const form = {
        titolo: {
            key: "titolo",
            value: titolo,
            set: setTitolo,
            label: "Titolo della recensione",
            validate: (value) => value.length > 0,
        },
        corpo: {
            key: "corpo",
            value: corpo,
            set: setCorpo,
            label: "Testo della recensione",
            validate: (value) => value.length > 0,
        },
        chiarezza_spiegazione_prof: {
            key: "chiarezza_spiegazione_prof",
            value: chiarezza_spiegazione_prof,
            set: setChiarezza_spiegazione_prof,
            label: "Chiarezza spiegazioni",
            validate: () => true,
        },
        materiale_didattico_prof: {
            key: "materiale_didattico_prof",
            value: materiale_didattico_prof,
            set: setMateriale_didattico_prof,
            label: "Materiale didattico",
            validate: () => true,
        },
        correzione_compiti_prof: {
            key: "correzione_compiti_prof",
            value: correzione_compiti_prof,
            set: setCorrezione_compiti_prof,
            label: "Correzione compiti",
            validate: () => true,
        },
        disponibilita_prof: {
            key: "disponibilita_prof",
            value: disponibilita_prof,
            set: setDisponibilita_prof,
            label: "Disponibilità",
            validate: () => true,
        },
        difficolta_argomenti_corso: {
            key: "difficolta_argomenti_corso",
            value: difficolta_argomenti_corso,
            set: setDifficolta_argomenti_corso,
            label: "Difficoltà argomenti",
            validate: () => true,
        },
        difficolta_esame_corso: {
            key: "difficolta_esame_corso",
            value: difficolta_esame_corso,
            set: setDifficolta_esame_corso,
            label: "Difficoltà esame",
            validate: () => true,
        },
        interesse_argomenti_corso: {
            key: "interesse_argomenti_corso",
            value: interesse_argomenti_corso,
            set: setInteresse_argomenti_corso,
            label: "Interesse argomenti",
            validate: () => true,
        },
        lo_consiglieresti_corso: {
            key: "lo_consiglieresti_corso",
            value: lo_consiglieresti_corso,
            set: setLo_consiglieresti_corso,
            label: "Lo consiglieresti",
            validate: () => true,
        },
    };

    return form;
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
        value: any;
        label: string;
        set: React.Dispatch<React.SetStateAction<any>>;
        validate: (any) => boolwan;
        error?: string;
        type?: FormType;
        apiID?: string;
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