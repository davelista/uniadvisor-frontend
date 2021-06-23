import React, {useState} from 'react';
import Navbar from "../../Navbar/Navbar";
import './Professor.css';
import imgUser from "../../../img/user.jpg";
import ProfessorEvaluation from "./ProfessorEvaluation";
import ProfessorCourse from "./ProfessorCourse";
import ProfessorReview from "./ProfessorReview";
import {Button} from "../../Buttons/Button";
/*ICONS*/
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BusinessIcon from '@material-ui/icons/Business';
/*RATING*/
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import Rating from '@material-ui/lab/Rating';

function ProfessorDetails(props) {
    const {professor, professorImg} = props;
    const [courseId, setCouseId] = useState(1);

    let image;
    professorImg === "Image Not Found" ? image = (<img src={professorImg} className={"professor-img"} alt={imgUser}/>) : image = (<img src={professorImg} className={"professor-img"} alt={professorImg}/>)

    return (
        <>
            <div className={"professor-card"}>
    {/*            {image}*/}
                <div className="professor-detail">
                    <div className="professor-title">
                        <h1>{professor.nome} {professor.cognome}</h1>

                                    <div className={"bubble-rating"}>
                                        <Rating name="half-rating-read"
                                                defaultValue={professor.metrics.overall.value}
                                                precision={0.5}
                                                readOnly
                                                emptyIcon={<FiberManualRecordOutlinedIcon fontSize="large" style={{fill: "#e53a1e"}}/>}
                                                icon={<FiberManualRecordIcon fontSize="large" style={{fill: "#e53a1e"}}/>}
                                        />
                                    </div>
                    </div>
                    <div className="professor-university-section">
                        <div className="professor-info">
                            {professor.university.map((x) => {
                                return <div className={"professor-info-row"}><AccountBalanceIcon fontSize="small" style={{fill: "#e53a1e", marginRight: "3%"}}/><h3 style={{color: "#e53a1e"}}>{x.name}</h3></div>
                            })}
                            {professor.university.map((x) => {
                                return <div className={"professor-info-row"}><EmailIcon fontSize="small" style={{marginRight: "3%"}}/><p>{professor.email}</p></div> /*cambiare professor.email con x.email quando cambieranno json*/
                            })}
                            {professor.university.map((x) => {
                                return <div className={"professor-info-row"}><WorkIcon fontSize="small" style={{marginRight: "3%"}}/><p>{x.contratto}</p> </div>
                            })}
                            {professor.university.map((x) => {
                                return <div className={"professor-info-row"}><BusinessIcon fontSize="small" style={{marginRight: "3%"}}/><p>{x.dipartimento}</p> </div>
                            })}
                        </div>
                        <ProfessorEvaluation finalEvaluation={professor.metrics}/>
                    </div>
                </div>
            </div>

            <div className={"professor-title-courses"}>
                {professor.university.map((university) => {
                        return university.corsi.map((course) => {
                            return ( <>
                                {courseId === course.id ?
                                <h4 className={"course-title-button"} onClick={() => {
                                    setCouseId(course.id)
                                }} style={{color: "#e53a1e"}}> {course.name}</h4> : <h4 className={"course-title-button"} onClick={() => {
                                        setCouseId(course.id)
                                    }} style={{color: "#c9c9c9"}}> {course.name}</h4>} </>
                            )

                        } )
                    }
                )}
            </div>
            <div className={"professor-courses"}>
                <div className="course-details-section">
                    {professor.university.map((university) => {
                            return university.courses.map((course) => {
                                return (
                                    <div className={"course-info-section"}>
                                        {courseId === course.id ? <ProfessorCourse course={course}/> : null}
                                    </div>
                                )
                            })
                        }
                    )}
                </div>
            </div>

            <div className={"reviews-section"}>
                <div className={"reviews-section-title"}>
                    <h2>Leggi le recensioni</h2>
                    <Button buttonStyle='btn--outline' buttonSize={"btn--small"}><h6 style={{color: "white"}}>Scrivi una recensione</h6></Button>
                </div>
                <>
                    {professor.university.map((university) => {
                            return university.courses.map((course) => {
                                return (
                                    <>
                                        {courseId === course.id && course.reviews.length !== 0 ?
                                            <ProfessorReview review={course.reviews}/> : null}
                                    </>
                                )
                            })
                        }
                    )}
                </>
                <div className={"reviews-section-title"}>
                    <h3>Vecchie recensioni</h3>
                </div>
                <>
                    {professor.oldReview.map((x) => {
                        return <ProfessorReview review={x} oldReview={true}/>
                    })}
                </>
            </div>
        </>
    );
}

export default ProfessorDetails;