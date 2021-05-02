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

function ProfessorDetails(props) {
    const {professor} = props;
    const [courseId, setCouseId] = useState(0);

    // let image;
    // professorImg === "Image Not Found" ? image = (
    //     <img src={professorImg.data} className={"professor-img"} alt={imgUser}/>) : image = (
    //     <img src={professorImg.data} className={"professor-img"} alt={professorImg}/>)

    return (
        <>
            <Link to={"/add-review/professors/" + professor.id}>
                <Button buttonStyle="btn--outline">
                    <h6 style={{ color: "white" }}>Scrivi una recensione</h6>
                </Button>
            </Link>

            <div className={"professor-card"}>
                <img src={"/api/professor_image/" + professor.id} className={"professor-img"} alt={`${professor.nome} ${professor.cognome}`} />
                <div className="professor-detail">
                    <div className="professor-title">
                        <h1>
                            {professor.nome} {professor.cognome}
                        </h1>
                        {console.log(professor.metrics.overall)}
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
                                        <p>{professor.email}</p>
                                    </div>
                                ); /*cambiare professor.email con x.email quando cambieranno json*/
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
                        {console.log(professor.metrics)}
                        <ProfessorEvaluation finalEvaluation={professor.metrics} />
                    </div>
                </div>
            </div>
            <div className={"professor-title-courses"}>
                {professor.corsi.map((x, i) => {
                    return Object.entries(x)
                        .filter(([key, value]) => key === "name")
                        .map(([key, value]) => {
                            return (
                                <>
                                    {courseId === i ? (
                                        <h4
                                            className={"course-title-button"}
                                            onClick={() => {
                                                setCouseId(i);
                                            }}
                                            style={{ color: "#e53a1e" }}
                                        >
                                            {" "}
                                            {value}
                                        </h4>
                                    ) : (
                                        <h4
                                            className={"course-title-button"}
                                            onClick={() => {
                                                setCouseId(i);
                                            }}
                                            style={{ color: "#c9c9c9" }}
                                        >
                                            {" "}
                                            {value}
                                        </h4>
                                    )}{" "}
                                </>
                            );
                        });
                })}
            </div>

            <div className={"professor-courses"}>
                <div className="course-details-section">
                    {professor.corsi.map((x, i) => {
                        return (
                            <div className={"course-info-section"}>
                                {courseId === i ? <ProfessorCourse course={x} /> : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default ProfessorDetails;