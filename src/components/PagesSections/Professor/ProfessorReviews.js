import React, {useState} from "react";
import imgUser from "../../../img/user.jpg";

import useProfessorReviews from "../../../hooks/useProfessorReviews";
import ExpandableParagraph from "../../Text/ExpandableParagraph";
import Rating from "@material-ui/lab/Rating";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {BsPencilSquare, FaPencilAlt, IoAddCircle, IoIosArrowBack, IoIosArrowForward} from "react-icons/all";
import {Link} from "react-router-dom";
import {Button} from "../../Buttons/Button";
import useMediaQuery, {Device} from "../../../hooks/useMediaQuery";

export default function ProfessorReviews(props) {
    const { professor, icourse } = props;
    const [num, setNum] = useState(1);
    const isMobile = useMediaQuery(Device.sm);
    const reviews = useProfessorReviews(professor.corsi[icourse].id, professor.id, num);
    const nextPage = useProfessorReviews(professor.corsi[icourse].id, professor.id, num+1);

    let titleSection;
    reviews.length !== 0 ? titleSection = ( <div className={"reviews-section-title"}>
        {!isMobile ? <h4>Recensioni</h4> : <h3>Recensioni</h3>}
            <div style={{maxWidth: "50%"}}>
                <Link to={"/add-review/professors/" + professor.id}>
                        <Button buttonStyle="btn--outline" >
                            <h6 style={{ color: "white" }}>Scrivi una recensione</h6>
                        </Button>
                </Link>
            </div>
        </div>) : titleSection = (<div className={"no-reviews-section"}>
        <div className={"no-reviews-title"}>
            <h5>Il corso {professor.corsi[icourse].name} non ha ancora recensioni.</h5>
            <p>Aiuta gli altri studenti recensendo il corso per primo!</p>
        </div>
        <Link to={"/add-review/professors/" + professor.id}>
            <Button buttonStyle="btn--outline" >
                <h6 style={{ color: "white" }}>Scrivi una recensione</h6>
            </Button>
        </Link>
        </div>)


    return (
        <>

            <div className={"reviews-section"}>
                {titleSection}
            {reviews.map((review) => (
                <div className={"reviews-container"}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src={imgUser} className={"reviews-user-img"} alt={imgUser} style={{marginBottom:"1rem"}}/>
                        {review.anonimo ? <div>Anonimo</div> : <div>{review.user.name} {review.user.surname}</div>}
                    </div>
                    <div className={"reviews-body"}>
                        <h4>{review.titolo}</h4>
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
            <div className={"pages"}>
                {num !== 1 ? <IoIosArrowBack onClick={() => setNum(num-1)}/> : null}
                {reviews.length !== 0 ? num : null}
                {nextPage.length !== 0 ? <IoIosArrowForward onClick={() => setNum(num+1)}/> : null}
            </div>
                {isMobile ? (<center>
                    <Link to={"/add-review/professors/" + professor.id}>
                        <Button buttonStyle="btn--outline">
                            <h6 style={{color: "white"}}>Scrivi una recensione</h6>
                        </Button>
                    </Link>
                </center>) : <div/>}

            </div>
        </>
    );
}
