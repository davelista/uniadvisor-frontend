import TextField from "@material-ui/core/TextField";
import { Radio } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import React, { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import AddReviewFormSection from "./AddReviewFormSection";
import styles from "./AddReview.module.css";
import useAddReviewForm from "./useAddReviewForm";

export default function AddReviewForm(props) {
    const { professorsList } = props;

    const [course, setCourse] = useState("");

    const form = useAddReviewForm();

    return (
        <div className={styles["section"]}>
            <h2 className={styles["section-title"]}>Crea una recensione</h2>

            <div className={styles["search-section"]}>
                <SearchBar professorsList={professorsList} />
                <img className={styles["professor-img"]} alt="" />
            </div>

            <AddReviewFormSection title="nome del corso">
                <div className={styles["form-item"]}>
                    {[
                        { id: "Nome del corso a", department: "Dipartimento", university: "Nome università" },
                        { id: "Nome del corso b", department: "Dipartimento", university: "Nome università" },
                        { id: "Nome del corso c", department: "Dipartimento", university: "Nome università" },
                    ].map((c) => (
                        <div className={styles["course"]} key={c.id}>
                            <Radio checked={course === c.id} onChange={(e) => setCourse(e.target.value)} value={c.id} />
                            <span className={styles["course-name"]}>{c.id}</span>
                            <span className={styles["course-detail"]}>{c.department}</span>
                            <span className={styles["course-detail"]}>{c.university}</span>
                        </div>
                    ))}
                </div>
            </AddReviewFormSection>

            <AddReviewFormSection title="recensione">
                <div className={styles["form-cols"]}>
                    <div className={styles["form-cols-item"]} style={{ marginRight: "1.5rem" }}>
                        <div className={styles["form-item"]}>
                            <TextField
                                label={form.titolo.label}
                                value={form.titolo.value}
                                onChange={(e) => form.titolo.set(e.target.value)}
                                fullWidth
                            />
                        </div>
                        <div className={styles["form-item"]}>
                            <TextField
                                label={form.corpo.label}
                                value={form.corpo.value}
                                onChange={(e) => form.corpo.set(e.target.value)}
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div
                        className={styles["form-cols-item"]}
                        style={{ marginLeft: "1.5rem", justifyContent: "flex-end" }}
                    >
                        <div className={styles["form-item"]}>
                            <div className={styles["form-label"]}>Valutazione complessiva</div>
                            <Rating
                                precision={0.5}
                                emptyIcon={<FiberManualRecordOutlinedIcon style={{ fill: "#e53a1e" }} />}
                                icon={<FiberManualRecordIcon style={{ fill: "#e53a1e" }} />}
                            />
                        </div>
                        <div className={styles["form-item"]}>
                            <TextField label="Anno accademico" fullWidth />
                        </div>
                    </div>
                </div>
            </AddReviewFormSection>

            <div className={styles["form-cols"]}>
                <div className={styles["form-cols-item"]} style={{ marginRight: "1.5rem" }}>
                    <AddReviewFormSection title="docente">
                        {[
                            form.chiarezza_spiegazione_prof,
                            form.materiale_didattico_prof,
                            form.disponibilita_prof,
                            form.correzione_compiti_prof,
                        ].map((formItem) => (
                            <RankingNode item={formItem} key={formItem.key} />
                        ))}
                    </AddReviewFormSection>
                </div>

                <div className={styles["form-cols-item"]} style={{ marginLeft: "1.5rem" }}>
                    <AddReviewFormSection title="corso">
                        {[
                            form.difficolta_argomenti_corso,
                            form.difficolta_esame_corso,
                            form.interesse_argomenti_corso,
                            form.lo_consiglieresti_corso,
                        ].map((formItem) => (
                            <RankingNode item={formItem} key={formItem.key} />
                        ))}
                    </AddReviewFormSection>
                </div>
            </div>
        </div>
    );
}

function RankingNode(props) {
    const { item } = props;

    return (
        <div className={styles["ranking-node"]}>
            <span className={styles["ranking-label"]}>{item.label}</span>
            <Rating
                value={item.value}
                onChange={(_, value) => item.set(value)}
                precision={0.5}
                emptyIcon={<FiberManualRecordOutlinedIcon style={{ fill: "#e53a1e" }} />}
                icon={<FiberManualRecordIcon style={{ fill: "#e53a1e" }} />}
            />
        </div>
    );
}
