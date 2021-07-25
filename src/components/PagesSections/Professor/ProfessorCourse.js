import React from 'react';
import './Professor.css';
import ExpandableParagraph from "../../Text/ExpandableParagraph";
import Rating from "@material-ui/lab/Rating";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";


function ProfessorCourse(props) {
    const {course} = props


    return (
        <>
            <div className={"course-info-container"}>

                <div className={"course-info-section"}>
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
                </div>
                <div className={"reviews-evaluation"}>
                    <h4
                        style={{
                            marginBottom: "3%",
                        }}
                    >
                        Valutazione corso:
                    </h4>
                    {[
                        { title: "Difficoltà argomenti", value: course.metrics.difficolta_argomenti },
                        { title: "Difficoltà esami", value: course.metrics.difficolta_esame },
                        { title: "Interesse argomenti", value: course.metrics.interesse_argomenti },
                        { title: "Lo consiglieresti", value: course.metrics.lo_consiglieresti },
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
        </>
    );
}

export default ProfessorCourse;