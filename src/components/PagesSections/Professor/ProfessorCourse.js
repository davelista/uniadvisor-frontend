import React from 'react';
import './Professor.css';


function ProfessorCourse(props) {
    const {course} = props


    return (
        <>
            <div className={"course-details"}>
                <div>A.A.: {course.years}</div>
                <div>CFU: {course.cfu}</div>
                <div>{course.schoolYear} Anno</div>
                <div>Lingua: {course.language}</div>
                <div>Semestre: {course.semester}</div>
                <div>Luogo: {course.location}</div>
                <div>SSD: {course.ssd}</div>

            </div>
        </>
    );
}

export default ProfessorCourse;