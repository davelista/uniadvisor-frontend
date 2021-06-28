import React from 'react';
import styles from "./UserDashboard.module.css";
import useUserReviews from "../../../hooks/useUserReviews";
import ExpandableParagraph from "../../Text/ExpandableParagraph";
import Rating from "@material-ui/lab/Rating";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {DateRange} from "@material-ui/icons";

const UserReview = (props) => {
    const {user} = props
    const reviews = useUserReviews(user.email, 1);

    return (
        <>
            <div className={styles.reviewsSection}>
                <div className={styles.tabsContainer}>
                    <div className={styles.tabHeading}>Recensioni</div>
                </div>
                {console.log(reviews)}
                {reviews !== null ? reviews.map((review) => (
                    <>
                        <div className={styles.reviewsHeader}>
                            <div className={styles.infoSection}>
                            <h5 className={styles.reviewsInfo}>
                                Nome corso | <span style={{ color: "grey" }}>Professore</span>
                            </h5>
                            <h5 className={styles.reviewsInfo} style={{ color: "grey" }}>A.A. {review.anno_accademico}</h5>
                            </div>
                            <h5 className={styles.reviewState}>{review.stato}</h5>
                        </div>
                    <div className={styles.reviewsContainer}>
                        <div className={styles.reviewsBody}>
                            <h4>
                                {review.titolo} - <span style={{ color: "grey" }}>Pubblicata il {review.data_creazione.slice(0,10)}</span>
                            </h4>

                            <ExpandableParagraph>{review.corpo}</ExpandableParagraph>
                        </div>
                        <div>
                            <h5 style={{
                                marginBottom: "5%",
                                borderBottom: "4px solid #e53a1e"
                            }}
                            >
                                PROFESSORE:
                            </h5>
                            {[
                                { title: "Chiarezza spiegazioni", value: review.chiarezza_spiegazione_prof },
                                { title: "Materiale didattico", value: review.materiale_didattico_prof },
                                { title: "Disponibilità", value: review.disponibilita_prof },
                                { title: "Correzione compiti", value: review.correzione_compiti_prof },
                            ].map((x) => (
                                <div className={styles.reviewEvaluationDetails}>
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
                        <br />
                        <div>
                        <h5
                            style={{
                                marginBottom: "5%",
                                borderBottom: "4px solid #e53a1e"
                            }}
                        >
                            CORSO:
                        </h5>
                        {[
                            { title: "Difficoltà argomenti", value: review.difficolta_argomenti_corso },
                            { title: "Difficoltà esami", value: review.difficolta_esame_corso },
                            { title: "Interesse argomenti", value: review.interesse_argomenti_corso },
                            { title: "Lo consiglieresti", value: review.lo_consiglieresti_corso },
                        ].map((x) => (
                            <div className={styles.reviewEvaluationDetails}>
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
                    </>
                )) : <div>Ci dispiace! :( Non ci sono recensioni</div>}
            </div>


        </>
    );
}

export default UserReview;