import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import RatingBase from "@material-ui/lab/Rating";
import MenuItem from "@material-ui/core/MenuItem";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import React from "react";
import AddReviewFormSection from "./AddReviewFormSection";
import styles from "./AddReview.module.css";
import useAddReviewForm from "./useAddReviewForm";
import { Button } from "../../Buttons/Button";

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
                            <Radio
                                checked={course.id === form.corso_id.value}
                                onChange={() => form.corso_id.setValue(course.id)}
                            />
                            <span className={styles.courseName}>{course.name}</span>
                            <span className={styles.courseDetail}>{course.school}</span>
                            <span className={styles.courseDetail}>Università</span>
                        </div>
                    ))}
                    {form.corso_id.error ? <div className={styles.errorText}>{form.corso_id.helperText}</div> : null}
                </div>
            </AddReviewFormSection>

            <AddReviewFormSection title="recensione">
                <div className={styles.formColumnSection}>
                    <div className={styles.formColumn} style={{ marginRight: "1.5rem" }}>
                        <div className={styles.formField}>
                            <TextField
                                label={form.titolo.label}
                                value={form.titolo.value}
                                error={form.titolo.error}
                                helperText={form.titolo.error ? form.titolo.helperText : null}
                                onChange={(e) => form.titolo.setValue(e.target.value)}
                                fullWidth
                            />
                        </div>
                        <div className={styles.formField}>
                            <TextField
                                label={form.corpo.label}
                                value={form.corpo.value}
                                error={form.corpo.error}
                                helperText={form.corpo.error ? form.corpo.helperText : null}
                                onChange={(e) => form.corpo.setValue(e.target.value)}
                                fullWidth
                                multiline
                                rows={6}
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className={styles.formColumn} style={{ marginLeft: "1.5rem", justifyContent: "flex-end" }}>
                        <div className={styles.formField}>
                            <TextField
                                select
                                label="Anno accademico"
                                value={form.anno_accademico.value}
                                error={form.anno_accademico.error}
                                helperText={form.anno_accademico.error ? form.anno_accademico.helperText : null}
                                onChange={(e) => form.anno_accademico.setValue(e.target.value)}
                                fullWidth
                            >
                                {getAcademicYears().map((ayear) => (
                                    <MenuItem value={ayear} key={ayear}>
                                        {ayear}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className={styles.formField}>
                            <TextField
                                type="number"
                                label={form.voto.label}
                                value={parseInt(form.voto.value)}
                                error={form.voto.error}
                                helperText={form.voto.error ? form.voto.helperText : null}
                                onChange={(e) => form.voto.setValue(e.target.value)}
                            />
                            <div style={{ marginTop: "auto" }}>
                                <span className={styles.formLabel} style={{ paddingRight: "1rem" }}>
                                    Lode
                                </span>
                                <Checkbox
                                    checked={form.voto.value.endsWith("L")}
                                    onChange={(_, checked) =>
                                        checked
                                            ? form.voto.setValue("30L")
                                            : form.voto.setValue((v) => `${parseInt(v)}`)
                                    }
                                />
                            </div>
                        </div>
                        <div className={`${styles.formField} ${styles.underlined}`}>
                            <span className={styles.formLabel}>{form.anonimo.label}</span>
                            <Checkbox
                                checked={form.anonimo.value}
                                onChange={(_, checked) => form.anonimo.setValue(checked)}
                            />
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
                        ].map((formItem) => (
                            <Rating item={formItem} key={formItem.key} />
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
                        ].map((formItem) => (
                            <Rating item={formItem} key={formItem.key} />
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

function Rating(props) {
    const { item } = props;

    return (
        <div className={`${styles.formField} ${styles.underlined}`}>
            <span className={styles.formLabel}>{item.label}</span>
            <RatingBase
                name={item.label}
                value={item.value}
                onChange={(_, value) => item.setValue(value)}
                precision={0.5}
                emptyIcon={<FiberManualRecordOutlinedIcon style={{ fill: "#e53a1e" }} />}
                icon={<FiberManualRecordIcon style={{ fill: "#e53a1e" }} />}
            />
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
