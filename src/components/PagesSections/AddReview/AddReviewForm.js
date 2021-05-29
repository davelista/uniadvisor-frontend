import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import AddReviewFormSection from "./AddReviewFormSection";
import styles from "./AddReview.module.css";
import useAddReviewForm from "./useAddReviewForm";
import { Button } from "../../Buttons/Button";
import FormTextField from "../../Forms/FormTextField";
import FormCheckbox from "../../Forms/FormCheckbox";
import FormRadio from "../../Forms/FormRadio";
import FormRating from "../../Forms/FormRating";

export default function AddReviewForm(props) {
    const { professor } = props;

    const [form, submit] = useAddReviewForm();

    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Crea una recensione</h2>

            <div className={styles.professorBio}>
                <div>
                    {professor.nome} {professor.cognome}
                </div>
                <img className={styles.professorImg} src={"/api/professor_image/" + professor.id} alt="Professor" />
            </div>

            <AddReviewFormSection title="nome del corso">
                <div className={styles.courseSelection}>
                    {professor.corsi.map((course) => (
                        <div className={styles.course} key={course.id}>
                            <FormRadio value={course.id} field={form.corso_id}>
                                <span className={styles.courseName}>{course.name}</span>
                                <span className={styles.courseDetail}>{course.school}</span>
                                <span className={styles.courseDetail}>Università</span>
                            </FormRadio>
                        </div>
                    ))}
                    {form.corso_id.error ? <div className={styles.errorText}>{form.corso_id.helperText}</div> : null}
                </div>
            </AddReviewFormSection>

            <AddReviewFormSection title="recensione">
                <div className={styles.formColumnSection}>
                    <div className={styles.formColumn} style={{ marginRight: "1.5rem" }}>
                        <div className={styles.formField}>
                            <FormTextField field={form.titolo} fullWidth />
                        </div>
                        <div className={styles.formField}>
                            <FormTextField field={form.corpo} fullWidth multiline rows={6} variant="outlined" />
                        </div>
                    </div>

                    <div className={styles.formColumn} style={{ marginLeft: "1.5rem", justifyContent: "flex-end" }}>
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
                                onChange={(_, checked) =>
                                    checked ? form.voto.setValue("30L") : form.voto.setValue((v) => `${parseInt(v)}`)
                                }
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
                <div className={styles.formColumn} style={{ marginRight: "1.5rem" }}>
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

                <div className={styles.formColumn} style={{ marginLeft: "1.5rem" }}>
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
                <Button buttonStyle="btn--outline" onClick={submit}>
                    Invia recensione
                </Button>
            </div>
        </div>
    );
}

const getAcademicYears = (n = 5) => {
    const now = new Date();
    let startingYear = now.getFullYear();
    // if less than october, set academic year as lastYear/currentYear
    if (now.getMonth() + 1 < 10) startingYear -= 1;
    return Array(n)
        .fill(0)
        .map((_, i) => `${startingYear - i}/${startingYear - i + 1}`);
};
