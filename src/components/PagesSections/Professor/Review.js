import React from 'react';
import './Professor.css';


function Review(props) {
    const {review} = props
    return (
        <>
            <div className={"review-container"}>
                <div className={"review-title"}>
                    <div>A.A. {review.year} </div>
                    <div className={"review-evaluation"}>
                        <h3>Valutazione professore:</h3> <br/>
                        {review.metrics.professor.map((x) => {
                            return <p>{x.title} {x.value}</p>
                        })}

                        <h3>Valutazione corso:</h3> <br/>
                        {review.metrics.course.map((x) => {
                            return <p>{x.title} {x.value}</p>
                        })}
                    </div>
                    <div className={"review-body"}>
                        {review.body}
                    </div>
                </div>

            </div>

        </>
    );
}

export default Review;