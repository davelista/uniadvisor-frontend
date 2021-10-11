import React, {useContext, useState} from 'react';
import withAuth from "../../hoc/withAuth";
import styles from "./Admin.module.css";
import cat from '../../../img/gatto.gif'
import ExpandableParagraph from "../../Text/ExpandableParagraph";
import Rating from "@material-ui/lab/Rating";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/all";
import useAdminReviews from "../../../hooks/useAdminReviews";
import {AppContext} from "../../../context/AppContext";
import {Button} from "../../Buttons/Button";
import Popup from "../../Popup/Popup";
import {ApiChangeStatus} from "../../../api";

function ReviewsControl(props) {
    const appData = useContext(AppContext);
    const [num, setNum] = useState(1);
    const [status, setStatus] = useState(null);
    const [popup, setPopup] = useState(false);
    const [reviewsId, setReviewsId] = useState(null);
    const reviews = useAdminReviews(appData.user.data.email, num);
    const nextPage = useAdminReviews(appData.user.data.email, num+1);

    const handleOpenPopup = () => {
        setPopup(!popup);
    };

    const handleClick = (status) => {
        let res = ApiChangeStatus(appData.user.data.email, reviewsId, status);
        if (res != null) {
            window.location.reload();
        }
    };

    let children = (
        <div>Stai per cambiare lo stato della seguente recensione in {status}
            <br/> Sei sicuro? <br/>
            <div style={{marginBottom: "1rem"}}/>
            <div className={styles.popupButtons}>
                <Button buttonStyle='btn--outline'
                        onClick={() => {
                    handleClick(status);
                    handleOpenPopup()
                }}>Sì</Button>
                <div style={{marginBottom: "1rem"}}/>
                <Button buttonStyle='btn--outline' onClick={handleOpenPopup}>No</Button>
                </div>
            </div>);

    return (
        <>
            {reviews === "NO-ADMIN" ?
                <div style={{textAlign: "center", padding: "20%"}}>Mi dispiace, non puoi accere a questa pagina</div> :
                <div className={styles.reviewsSection}>
                    <div className={styles.tabsContainer}>
                        <div className={styles.tabHeading}>Recensioni da approvare</div>
                    </div>
                    {reviews.length !== 0 ? reviews.map((review) => (
                        <>
                            <div className={styles.reviewsHeader}>
                                <div className={styles.infoSection}>
                                    <h5 className={styles.reviewsInfo}>
                                        {review.corso_name} | <span style={{ color: "grey" }}>{review.professor_name} {review.professor_surname}</span>
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
                            <Button buttonStyle='btn--outline' onClick={() => {
                                setStatus("APPROVED");
                                setPopup(true);
                                setReviewsId(review.id)
                            }}>Approva</Button>
                            <div style={{marginBottom: "1rem"}}/>
                            <Button buttonStyle='btn--outline' onClick={() => {
                                setStatus("REJECTED");
                                setPopup(true);
                                setReviewsId(review.id)}}>Rifiuta</Button>
                            {popup ? <Popup titleText={"Conferma"} onClose={handleOpenPopup} children={children}/> : null}
                            <hr style={{marginTop: "1rem"}}/>
                        </>
                    )) : <div className={styles.noReviewsSection}>
                        <div className={styles.noReviewsTitle}>
                            <h5>Al momento non ci sono recensioni da controllare</h5>
                            <p>Goditi un po' di riposo</p>
                            <img src={cat} alt="Riposati..." />
                        </div>
                    </div>}
                    <div className={styles.pages}>
                        {num !== 1 ? <IoIosArrowBack onClick={() => setNum(num-1)}/> : null}
                        {reviews.length !== 0 ? num : null}
                        {nextPage.length !== 0 ? <IoIosArrowForward onClick={() => setNum(num+1)}/> : null}
                    </div>
                </div>}

        </>
    );
}

export default withAuth(ReviewsControl);