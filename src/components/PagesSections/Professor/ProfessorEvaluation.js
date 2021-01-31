import React from 'react';
import './Professor.css';
import Rating from "react-rating";

function ProfessorEvaluation(props) {
    const {finalEvaluation} = props;


    return (
        <>
            <div className={"professor-evaluation-container"}>
                {finalEvaluation.filter(x => x.title !== "Overall")
                    .map((x) => {
                    return (<div className={"professor-evaluation"}>
                        {/*<p>{x.title}: {'\t'&& Math.round(x.value)}</p>*/}
                        <div>{x.title}: <Rating placeholderRating={x.value}
                                                readonly
                                                className={"bubble-rating"}/></div>
                    </div>)
                })}
            </div>
        </>
    );
}

export default ProfessorEvaluation;