import React from "react";
import imgUser from "../../../img/user.jpg";

import useProfessorReviews from "../../../hooks/useProfessorReviews";
import ExpandableParagraph from "../../Text/ExpandableParagraph";
import Rating from "@material-ui/lab/Rating";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export default function ProfessorReviews(props) {
    const { professor, icourse } = props;

    const reviews = useProfessorReviews(professor.corsi[icourse].id, professor.id, 1);

    return (
        <>
            {reviews.map((review) => (
                <div className={"reviews-container"}>
                    <img src={imgUser} className={"reviews-user-img"} alt={imgUser} />
                    <div className={"reviews-body"}>
                        <h4>Titolo</h4>
                        <h5 style={{ color: "grey" }}>A.A. {review.anno_accademico}</h5>
                        <ExpandableParagraph>{review.corpo}</ExpandableParagraph>
                    </div>
                    <div className={"reviews-evaluation"}>
                        <h5
                            style={{
                                marginBottom: "3%",
                            }}
                        >
                            Valutazione professore:
                        </h5>
                        {[
                            { title: "Chiarezza spiegazioni", value: review.chiarezza_spiegazione_prof },
                            { title: "Materiale didattico", value: review.materiale_didattico_prof },
                            { title: "Disponibilità", value: review.disponibilita_prof },
                            { title: "Correzione compiti", value: review.correzione_compiti_prof },
                        ].map((x) => (
                            <div className={"review-evaluation-details"}>
                                {x.title}:
                                <Rating
                                    defaultValue={x.value}
                                    precision={0.5}
                                    readOnly
                                    emptyIcon={
                                        <FiberManualRecordOutlinedIcon fontSize="medium" style={{ fill: "#e53a1e" }} />
                                    }
                                    icon={<FiberManualRecordIcon fontSize="medium" style={{ fill: "#e53a1e" }} />}
                                />
                            </div>
                        ))}
                        <br />
                        <h5
                            style={{
                                marginBottom: "3%",
                            }}
                        >
                            Valutazione corso:
                        </h5>
                        {[
                            { title: "Difficoltà argomenti", value: review.difficolta_argomenti_corso },
                            { title: "Difficoltà esami", value: review.difficolta_esame_corso },
                            { title: "Interesse argomenti", value: review.interesse_argomenti_corso },
                            { title: "Lo consiglieresti", value: review.lo_consiglieresti_corso },
                        ].map((x) => (
                            <div className={"review-evaluation-details"}>
                                {x.title}:
                                <Rating
                                    defaultValue={x.value}
                                    precision={0.5}
                                    readOnly
                                    emptyIcon={
                                        <FiberManualRecordOutlinedIcon fontSize="medium" style={{ fill: "#e53a1e" }} />
                                    }
                                    icon={<FiberManualRecordIcon fontSize="medium" style={{ fill: "#e53a1e" }} />}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
