import React, {useState} from 'react';
import './Professor.css';
import imgUser from "../../../img/user.jpg";
/*ICONS*/
/*RATING*/
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import Rating from '@material-ui/lab/Rating';
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import EmailIcon from "@material-ui/icons/Email";
import WorkIcon from "@material-ui/icons/Work";
import BusinessIcon from "@material-ui/icons/Business";
import ProfessorEvaluation from "./ProfessorEvaluation";
import ProfessorCourse from "./ProfessorCourse";
import { Button } from '../../Buttons/Button';
import { Link } from 'react-router-dom';
import ProfessorReviews from "./ProfessorReviews";

function ProfessorDetails(props) {
    const {professor} = props;
    const [courseId, setCouseId] = useState(0);

    return (
        <>
            <div className={"professor-card"}>
                <img
                    src={"/api/professor_image/" + professor.id}
                    className={"professor-img"}
                    alt={`${professor.nome} ${professor.cognome}`}
                />
                <div className="professor-detail">
                    <div className="professor-title">
                        <h1>
                            {professor.nome} {professor.cognome}
                        </h1>
                        <div className={"bubble-rating"}>
                            <Rating
                                name="half-rating-read"
                                defaultValue={professor.metrics.overall}
                                precision={0.5}
                                readOnly
                                emptyIcon={
                                    <FiberManualRecordOutlinedIcon fontSize="large" style={{ fill: "#e53a1e" }} />
                                }
                                icon={<FiberManualRecordIcon fontSize="large" style={{ fill: "#e53a1e" }} />}
                            />
                        </div>
                    </div>
                    <div className="professor-university-section">
                        <div className="professor-info">
                            {professor.university.map((x) => {
                                return (
                                    <div className={"professor-info-row"}>
                                        <AccountBalanceIcon
                                            fontSize="small"
                                            style={{
                                                fill: "#e53a1e",
                                                marginRight: "3%",
                                            }}
                                        />
                                        <h3 style={{ color: "#e53a1e" }}>{x.name}</h3>
                                    </div>
                                );
                            })}
                            {professor.university.map((x) => {
                                return (
                                    <div className={"professor-info-row"}>
                                        <EmailIcon fontSize="small" style={{ marginRight: "3%" }} />
                                        <p>{x.email}</p>
                                    </div>
                                );
                            })}
                            {professor.university.map((x) => {
                                return (
                                    <div className={"professor-info-row"}>
                                        <WorkIcon fontSize="small" style={{ marginRight: "3%" }} />
                                        <p>{x.contratto}</p>
                                    </div>
                                );
                            })}
                            {professor.university.map((x) => {
                                return (
                                    <div className={"professor-info-row"}>
                                        <BusinessIcon fontSize="small" style={{ marginRight: "3%" }} />
                                        <p>{x.dipartimento}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <ProfessorEvaluation finalEvaluation={professor.metrics} />
                    </div>
                </div>
            </div>
            {professor.corsi.length > 0 ?
                <>
                    <div className={"professor-title-courses"}>
                {professor.corsi.map((course, i) => (
                    <h4
                        className={"course-title-button"}
                        onClick={() => {
                            setCouseId(i);
                        }}
                        style={{ color: courseId === i ? "#e53a1e" : "#c9c9c9" }}
                    >
                        {course.name}
                    </h4>
                )) }
            </div>

            <div className={"professor-courses"}>
                <div className="course-details-section">
                    {professor.corsi.map((x, i) => {
                        return (
                            <div >
                                {courseId === i ? <ProfessorCourse course={x} /> : null}

                            </div>
                        );
                    })  }
                </div>
            </div>
                    {professor.privacy ?
                        <div className={"reviews-section"}>
                            <div className={"no-reviews-section"}>
                                <div className={"no-reviews-title"}>
                                    <h5>Il professore ha chiesto (gentilmente) di nascondere le recensioni che lo riguardano.</h5>
                                    <p>Lascia comunque una recensione per aiutare gli altri studenti!</p>
                                </div>
                                <Link to={"/add-review/professors/" + professor.id}>
                                    <Button buttonStyle="btn--outline" >
                                        <h6 style={{ color: "white" }}>Scrivi una recensione</h6>
                                    </Button>
                                </Link>
                            </div>
                        </div>: <ProfessorReviews professor={professor} icourse={courseId} />}

                </>
                : <div className={"no-reviews-section"}>
                <div className={"no-reviews-title"}>
                <h5>Ci risulta che attualmente questo professore non abbia corsi attivi.</h5>
                    <p>Se non è così scrivici una mail a <a style={{color:"#e53a1e"}} href="mailto:supporto@uniadvisor.it">supporto@uniadvisor.it</a>!</p>
                </div>
                </div>
            }
        </>
    );
}

export default ProfessorDetails;