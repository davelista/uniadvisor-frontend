import MenuItem from "@material-ui/core/MenuItem";
import React, { useContext } from "react";
import AddReviewFormSection from "./AddReviewFormSection";
import styles from "./AddReview.module.css";
import useAddReviewForm from "./useAddReviewForm";
import { Button } from "../../Buttons/Button";
import FormTextField from "../../Forms/FormTextField";
import FormCheckbox from "../../Forms/FormCheckbox";
import FormRadio from "../../Forms/FormRadio";
import FormRating from "../../Forms/FormRating";
import { AppContext } from "../../../context/AppContext";
import withAuth from "../../hoc/withAuth";
import useAddProfessorReview from "../../../hooks/useAddProfessorReview";
import useMediaQuery, { Device } from "../../../hooks/useMediaQuery";

function AddReviewForm() {
    const appData = useContext(AppContext);
    const professor = appData.professor.data;

    const [send, sending, sent, error] = useAddProfessorReview();
    const [form, submit] = useAddReviewForm(professor.id, appData.user.data.email, send);

    const isMobile = useMediaQuery(Device.sm);

    if (sent) return <FormSent />;
    if (error) return <FormError />;

    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Crea una recensione</h2>

            <div className={styles.professorBio}>
                <div>
                    {professor.nome} {professor.cognome}
                </div>
                <img className={styles.professorImg} src={"/api/professor_image/" + professor.id} alt="Professor" />
            </div>

            <form className={styles.form} noValidate autoComplete="off" onSubmit={submit}>
                <AddReviewFormSection title="nome del corso">
                    <div className={styles.courseSelection}>
                        {professor.corsi.map((course) => (
                            <div className={styles.course} key={course.id}>
                                <FormRadio value={course.id} field={form.corso_id}>
                                    <div className={styles.courseContainer}>
                                        <span className={styles.courseName}>{course.name}</span>
                                        <span className={styles.courseDetail}>{course.school}</span>
                                    </div>
                                    {/*<span className={styles.courseDetail}>{professor.university.name}</span>*/}
                                </FormRadio>
                            </div>
                        ))}
                        {form.corso_id.error ? <div className={styles.errorText}>{form.corso_id.helperText}</div> : null}
                    </div>
                </AddReviewFormSection>

                <AddReviewFormSection title="recensione">
                    <div className={styles.formColumnSection}>
                        <div className={styles.formColumn} style={{ marginRight: isMobile ? 0 : "1.5rem" }}>
                            <div className={styles.formField}>
                                <FormTextField field={form.titolo} fullWidth />
                            </div>
                            <div className={styles.formField}>
                                <FormTextField field={form.corpo} fullWidth multiline rows={6} variant="outlined" />
                            </div>
                        </div>

                        <div className={styles.formColumn} style={{ marginLeft: isMobile ? 0 : "1.5rem", justifyContent: "flex-end" }}>
                            <div className={styles.formField}>
                                <FormTextField field={form.anno_accademico} select fullWidth>
                                    {getAcademicYears().map((ay) => (
                                        <MenuItem value={ay} key={ay}>
                                            {ay}
                                        </MenuItem>
                                    ))}
                                </FormTextField>
                            </div>
                            <div className={styles.formField}>
                                <FormTextField field={form.voto} value={parseInt(form.voto.value)} type="number" />
                                <FormCheckbox
                                    field={{ label: "Lode" }}
                                    checked={form.voto.value.endsWith("L")}
                                    onChange={(_, checked) => (checked ? form.voto.setValue("30L") : form.voto.setValue((v) => `${parseInt(v)}`))}
                                    noUnderline
                                />
                            </div>
                            <div className={styles.formField}>
                                <FormCheckbox field={form.anonimo} fullWidth />
                            </div>
                        </div>
                    </div>
                </AddReviewFormSection>

                <div className={styles.formColumnSection}>
                    <div className={styles.formColumn} style={{ marginRight: isMobile ? 0 : "1.5rem" }}>
                        <AddReviewFormSection title="docente">
                            {[
                                form.chiarezza_spiegazione_prof,
                                form.materiale_didattico_prof,
                                form.disponibilita_prof,
                                form.correzione_compiti_prof,
                            ].map((field) => (
                                <div className={styles.formField} key={field.key}>
                                    <FormRating field={field} fullWidth precision={0.5} />
                                </div>
                            ))}
                        </AddReviewFormSection>
                    </div>

                    <div className={styles.formColumn} style={{ marginLeft: isMobile ? 0 : "1.5rem" }}>
                        <AddReviewFormSection title="corso">
                            {[
                                form.difficolta_argomenti_corso,
                                form.difficolta_esame_corso,
                                form.interesse_argomenti_corso,
                                form.lo_consiglieresti_corso,
                            ].map((field) => (
                                <div className={styles.formField} key={field.key}>
                                    <FormRating field={field} fullWidth precision={0.5} />
                                </div>
                            ))}
                        </AddReviewFormSection>
                    </div>
                </div>

                <div className={styles.submitButton}>
                    {/* <Button buttonStyle="btn--outline" onClick={submit}> */}
                    <Button buttonStyle="btn--outline" type="submit" disabled={sending || sent || error}>
                        Invia recensione
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default withAuth(AddReviewForm);

const getAcademicYears = (n = 5) => {
    const now = new Date();
    let startingYear = now.getFullYear();
    // if less than october, set academic year as lastYear/currentYear
    if (now.getMonth() + 1 < 10) startingYear -= 1;
    return Array(n)
        .fill(0)
        .map((_, i) => `${startingYear - i}/${startingYear - i + 1}`);
};

function FormSent() {
    return (
        <div className={styles.doneSection}>
            <h2 className={styles.doneTitle}>Grazie!</h2>
            <div className={styles.doneBody}>La recensione è stata ricevuta con successo</div>
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
