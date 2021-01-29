import React from 'react';
import './Professor.css';
import imgUser from "../../../img/user.jpg";


function Review(props) {
    const {review, oldReview} = props

    if (!oldReview) {
        return (
            <>
                {review.map((x) => {
                        return (
                            <div className={"reviews-container"}>
                                <img src={imgUser} className={"user-img"} alt={imgUser}/>
                                <div className={"reviews-body"}>
                                    <h4>Titolo</h4>
                                    <h5 style={{color: "grey"}}>A.A. {x.year}</h5>
                                    <div>
                                        {x.body}
                                    </div>
                                </div>
                                <div className={"reviews-evaluation"}>
                                    <h5>Valutazione professore:</h5>
                                    {x.metrics.professor.map((x) => {
                                        return <p>{x.title} {x.value}</p>
                                    })}
                                    <br/>
                                    <h5>Valutazione corso:</h5>
                                    {x.metrics.course.map((y) => {
                                        return <p>{y.title} {y.value}</p>
                                    })}
                                </div>
                            </div>
                        )
                    }
                )}
            </>
        );
    } else {
        return (
            <>
                <div className={"reviews-container"}>
                    <img src={imgUser} className={"user-img"} alt={imgUser}/>
                    <div className={"reviews-body"}>
                        <h4>Titolo</h4>
                        <h5 style={{color: "grey"}}>A.A. {review.year}</h5>
                        <div>
                            {review.body}
                        </div>
                    </div>
                    <div className={"reviews-evaluation"}>
                        <h5>Valutazione professore:</h5>
                        {review.metrics.professor.map((x) => {
                            return <p>{x.title} {x.value}</p>
                        })}
                        <br/>
                        <h5>Valutazione corso:</h5>
                        {review.metrics.course.map((y) => {
                            return <p>{y.title} {y.value}</p>
                        })}
                    </div>
                </div>

            </>
        );
    }

}

export default Review;