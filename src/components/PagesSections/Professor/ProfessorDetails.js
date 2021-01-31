import React, {useState} from 'react';
import Navbar from "../../Navbar/Navbar";
import './Professor.css';
import imgUser from "../../../img/user.jpg";
import ProfessorEvaluation from "./ProfessorEvaluation";
import ProfessorCourse from "./ProfessorCourse";
import Review from "./Review";
import {Button} from "../../Buttons/Button";
import Rating from "react-rating";

function ProfessorDetails(props) {
    const {professor} = props;
    const [courseId, setCouseId] = useState(1);

    return (
        <>
            <Navbar/>
            <div className={"professor-card"}>
                <img src={imgUser} className={"professor-img"} alt={imgUser}/>
                <div className="professor-detail">
                    <div className="professor-title">
                        <h1>{professor.name}</h1>
                        {professor.finalEvaluation.filter(x => x.title === "Overall")
                            .map((x) => {
                                return (
                                    <Rating placeholderRating={x.value}
                                                            readonly
                                                            className={"bubble-rating"}/>
                                )
                            })}
                    </div>
                    <div className="professor-university-section">
                        <div className="professor-info">
                            {professor.university.map((x) => {
                                return <h3 style={{color: "#e53a1e"}}>{x.name}</h3>
                            })}
                            <p>{professor.email}</p>
                            {professor.university.map((x) => {
                                return <p>{x.typeContract}</p>
                            })}
                            {professor.university.map((x) => {
                                return <p>{x.department}</p>
                            })}
                        </div>
                        <ProfessorEvaluation finalEvaluation={professor.finalEvaluation}/>
                    </div>
                </div>
            </div>

            <div className={"professor-title-courses"}>
                {professor.university.map((university) => {
                        return university.courses.map((course) => {
                            return (
                                <h4 className={"course-title-button"} onClick={() => {
                                    setCouseId(course.id)
                                }}> {course.name}</h4>
                            )
                        })
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
                <div>
                    {/*qui inserire overall metrics*/}
                </div>
            </div>

            <div className={"reviews-section"}>
                <div className={"reviews-section-title"}>
                    <h2>Leggi le recensioni</h2>
                    <Button buttonStyle='btn--outline'><h6 style={{color: "white"}}>Scrivi una recensione</h6></Button>
                </div>
                <>
                    {professor.university.map((university) => {
                            return university.courses.map((course) => {
                                return (
                                    <>
                                        {courseId === course.id && course.reviews.length !== 0 ?
                                            <Review review={course.reviews}/> : null}
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
                        return <Review review={x} oldReview={true}/>
                    })}
                </>
            </div>
        </>
    );
}

export default ProfessorDetails;