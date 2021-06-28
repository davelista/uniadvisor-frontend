import React from 'react';
import './Professor.css';
import ExpandableParagraph from "../../Text/ExpandableParagraph";


function ProfessorCourse(props) {
    const {course} = props


    return (
        <>
            <div className={"course-info-title"}>
                {/* eslint-disable-next-line no-sequences */}
                <h3 style={{borderRight: "1px solid grey", paddingRight: "5%"}}>{course.name}</h3><div style={{marginLeft: "5%"}}>{course.school}</div>
            </div>
            <div className={"course-info"}>
                <h4>CFU: <span className={"subtitle-red"}>{course.cfu}</span></h4>
                <h4>Anno: <span className={"subtitle-red"}>{course.school_year}</span></h4>
                <h4>Lingua: <span className={"subtitle-red"}>{course.language}</span></h4>
                <h4>SSD: <span className={"subtitle-red"}>{course.ssd}</span></h4>
            </div>
                <ExpandableParagraph>{course.description}</ExpandableParagraph>
        </>
    );
}

export default ProfessorCourse;