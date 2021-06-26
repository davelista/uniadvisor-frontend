import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "../../Buttons/Button";
import { ApiRegister } from "../../../api";
import { Redirect } from "react-router";
import LoginFacebook from "./LoginFacebook";
import FormTextField from "../../Forms/FormTextField";
import MenuItem from "@material-ui/core/MenuItem";
import SearchBar from "../../SearchBar/SearchBar";
import { AppContext } from "../../../context/AppContext";
import { FormControl, InputLabel, NativeSelect, Select } from "@material-ui/core";
import useSignUpForm from "./useSignUpForm";
import useSignUp from "../../../hooks/useSignUp";
import styles from "./Signup.module.css";

const SignUpForm = () => {
    const appData = useContext(AppContext);

    const [signup, sending, requiresConfirm, registered, error] = useSignUp();
    const [form, submit] = useSignUpForm(signup);

    if (registered) return <Redirect to="/login" />;
    if (requiresConfirm) return <RequiresConfirm />;
    if (error) return <FormError />;

    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [email, setEmail] = useState("");
    // const [university, setUniversity] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordControl, setPasswordControl] = useState("");

    // const [error, setError] = useState(true);
    // const [msgError, setMsgError] = useState("");
    // const [typeError, setTypeError] = useState("");
    // const [done, setDone] = useState(false);

    // const handleChange = (event) => {
    //     setUniversity(event.target.value);
    // };

    // const displayError = () => {
    //     switch (typeError) {
    //         case "Empty":
    //             setMsgError("ATTENZIONE, compilare tutti i campi");
    //             break;
    //         case "Different passwords":
    //             setMsgError("ATTENZIONE, le password non coincidono");
    //             break;
    //         case "Invalid email":
    //             setMsgError("ATTENZIONE, la mail non è valida");
    //             break;
    //         case "Short Password":
    //             setMsgError("ATTENZIONE, la password è troppo corta");
    //             break;
    //         case "Already registered":
    //             setMsgError("ATTENZIONE, utente già registrato");
    //             break;
    //         default:
    //             setMsgError("");
    //             break;
    //     }
    // };

    // const validation = () => {
    //     if (
    //         firstname.length < 1 ||
    //         lastname.length < 1 ||
    //         email.length < 1 ||
    //         university.length < 1 ||
    //         password.length < 1 ||
    //         passwordControl.length < 1
    //     ) {
    //         setTypeError("Empty");
    //         setError(true);
    //     } else if (!email.includes("@")) {
    //         setTypeError("Invalid email");
    //         setError(true);
    //     } else if (password.length < 8) {
    //         setTypeError("Short Password");
    //         setError(true);
    //     } else if (password !== passwordControl) {
    //         setTypeError("Different passwords");
    //         setError(true);
    //     } else {
    //         setTypeError("No Error");
    //         setError(false);
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     if (e) e.preventDefault();
    //     if (!error) {
    //         try {
    //             let res = await ApiRegister(firstname, lastname, email, password, university, "Unihub", null);

    //             switch (res.data) {
    //                 case "OK":
    //                     setDone(true);
    //                     break;
    //                 case "Already registered":
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         } catch (e) {
    //             throw e;
    //         }
    //     }
    //     displayError();
    // };

    return (
        <>
            <div className={"login-title-container"}>
                <div className={"title-red"}>Registrati</div>
            </div>
            <div className={"form-container"}>
                <form className={"login-form"} noValidate autoComplete="off" onSubmit={submit}>
                    <div className={"form-row"}>
                        <div className={"form-input"}>
                            <FormTextField field={form.name} variant="outlined" fullWidth />
                            {/* <TextField
                                className={"TextField"}
                                InputProps={{
                                    className: "TextField",
                                }}
                                name="firstname"
                                id="outlined-textarea"
                                label="Nome"
                                placeholder="Inserisci il tuo nome"
                                variant="outlined"
                                aria-required="true"
                                onChange={e => setFirstname(e.target.value)}
                            /> */}
                        </div>
                        <div className={"form-input"}>
                            <FormTextField field={form.surname} variant="outlined" fullWidth />
                            {/* <TextField
                                className={"TextField"}
                                InputProps={{
                                    className: "TextField",
                                }}
                                name="lastname"
                                id="outlined-textarea"
                                label="Cognome"
                                placeholder="Inserisci il tuo cognome"
                                variant="outlined"
                                aria-required="true"
                                onChange={(e) => setLastname(e.target.value)}
                            /> */}
                        </div>
                    </div>
                    <div className={"form-input"}>
                        <FormTextField field={form.email} type="email" variant="outlined" fullWidth />
                        {/* <TextField
                            className={"TextField"}
                            InputProps={{
                                className: "TextField",
                            }}
                            name="email"
                            id="outlined-textarea"
                            label="Email"
                            placeholder="Inserisci la tua email"
                            variant="outlined"
                            aria-required="true"
                            onChange={(e) => setEmail(e.target.value)}
                        /> */}
                    </div>
                    <div className={"form-input"}>
                        <FormTextField field={form.university} select fullWidth>
                            {appData.universitiesList?.universities?.map((university) => (
                                <MenuItem value={university} key={university}>
                                    {university}
                                </MenuItem>
                            ))}
                        </FormTextField>
                    </div>
                    {/* <div className={"form-input"}>
                        {appData.universitiesList !== null ? (
                            <FormControl>
                                <InputLabel id="demo-simple-select-helper-label">Univeristà</InputLabel>

                                <NativeSelect
                                    value={university}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: "universities",
                                        id: "age-native-helper",
                                    }}
                                >
                                    {appData.universitiesList.universities.map((university) => (
                                        <option value={university} key={university}>
                                            {university}
                                        </option>
                                    ))}
                                </NativeSelect>
                            </FormControl>
                        ) : (
                            <div> </div>
                        )}
                    </div> */}
                    <div className={"form-row"}>
                        <div className={"form-input"}>
                            <FormTextField field={form.password} type="password" variant="outlined" fullWidth />

                            {/* <TextField
                                className={"TextField"}
                                InputProps={{
                                    className: "TextField",
                                }}
                                name="password"
                                id="outlined-textarea"
                                label="Password"
                                placeholder="Inserisci la tua password"
                                variant="outlined"
                                aria-required="true"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            /> */}
                        </div>
                        <div className={"form-input"}>
                            <FormTextField field={form.passwordControl} type="password" variant="outlined" fullWidth />

                            {/* <TextField
                                className={"TextField"}
                                InputProps={{
                                    className: "TextField",
                                }}
                                name="passwordControl"
                                id="outlined-textarea"
                                label="Conferma Password"
                                placeholder="Inserisci di nuovo la tua password"
                                variant="outlined"
                                aria-required="true"
                                type="password"
                                onChange={(e) => setPasswordControl(e.target.value)}
                            /> */}
                        </div>
                    </div>
                    <div className={"form-input"}>
                        <Button buttonStyle="btn--outline" buttonSize={"btn--small"} type="submit" disabled={sending}>
                            <h6 style={{ color: "white" }}>Registrati</h6>
                        </Button>
                    </div>
                    {/* {done ? <Redirect to="/login" /> : <div>{msgError}</div>} Una volta che ha mandato i dati, viene reindirizzato a login */}
                    {/*<div>
                        oppure registrati con
                    </div>
                    <LoginFacebook onChangeUserFb={onChangeUserFb} onChangeFb={onChangeFb}/>*/}
                </form>
            </div>
        </>
    );
};

export default SignUpForm;

function RequiresConfirm() {
    return (
        <div className={styles.doneSection}>
            <h2 className={styles.doneTitle}>Utente registrato</h2>
            <div className={styles.doneBody}>Una mail di conferma è stata inviata all'indirizzo specificato</div>
        </div>
    );
}
function FormError() {
    return (
        <div className={styles.doneSection}>
            <h2 className={styles.doneTitle}>Oops!</h2>
            <div className={styles.doneBody}>{"Qualcosa è andato storto :("}</div>
        </div>
    );
}
