import React from 'react';
import './Professor.css';


function Review(props) {
    const {evaluation} = props

    return (
            <div className={"reviews-evaluation"}>
                <h5>Valutazione professore:</h5>
                {evaluation.metrics.professor.map((x) => {
                    return <p>{x.title} {x.value}</p>
                })}
                <br/>
                <h5>Valutazione corso:</h5>
                {evaluation.oldMetrics.course.map((y) => {
                    return <p>{y.title} {y.value}</p>
                })}
            </div>
    );
}

export default Review;