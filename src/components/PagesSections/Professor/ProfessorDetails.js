import React, {useState} from 'react';
import Navbar from "../../Navbar/Navbar";
import './Professor.css';
import imgUser from "../../../img/user.jpg";
import ProfessorEvaluation from "./ProfessorEvaluation";
import Review from "./Review";
import ProfessorCourse from "./ProfessorCourse";

function ProfessorDetails(props) {
    const {professor} = props;
    const [courseId, setCouseId] = useState(1);

    return (
        <>
            <Navbar />
            <div className="professor-section">
                {/*informazioni del professore - nome, email, università, contratto, dipartimento, valutazioni*/}
                <div className={"professor-first-content"}>
                    <div className={"professor-card"}>
                        <img src={imgUser} className={'image-user'} alt={imgUser}/>
                        <div className={"professor-detail"}>
                            <h2>{professor.name}</h2>
                            <p>{professor.email}</p>
                            {professor.university.map((x) => {
                                return <p>{x.name}</p>
                            })}
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

                <div className="professor-second-content">
                    {professor.university.map((university) => {
                            return university.courses.map((course) => {
                                return (<div className={"course-container"}>
                                        <h3  className={"course-title"} onClick={() => setCouseId(course.id)}>{course.name}</h3>
                                    {courseId===course.id ? <ProfessorCourse course={course}/> : null }
                                </div>)
                            })
                        }
                    )}
                </div>

                <div className={"professor-third-content"}>
                    {professor.oldReview.map((x) => {
                        return <Review review={x}/>
                    })}
                </div>
            </div>

        </>
    );
}

export default ProfessorDetails;