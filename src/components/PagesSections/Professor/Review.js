import React from 'react';
import './Professor.css';
import imgUser from "../../../img/user.jpg";
import Rating from '@material-ui/lab/Rating';
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";


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
                                    <h5 style={{
                                        marginBottom: "3%", marginLeft: "50%"
                                    }}>Valutazione professore:</h5>
                                    {x.metrics.professor.map((x) => {
                                        return <div className={"review-evaluation-details"}>{x.title}:
                                            <Rating defaultValue={x.value}
                                                    precision={0.5}
                                                    readOnly
                                                    emptyIcon={<FiberManualRecordOutlinedIcon fontSize="medium"
                                                                                              style={{fill: "#e53a1e"}}/>}
                                                    icon={<FiberManualRecordIcon fontSize="medium"
                                                                                 style={{fill: "#e53a1e"}}/>}
                                            />
                                        </div>
                                    })}
                                    <br/>
                                    <h5 style={{
                                        marginBottom: "3%", marginLeft: "50%"
                                    }}>Valutazione corso:</h5>
                                    {x.metrics.course.map((y) => {
                                        return <div className={"review-evaluation-details"}>{y.title}:
                                            <Rating defaultValue={y.value}
                                                    precision={0.5}
                                                    readOnly
                                                    emptyIcon={<FiberManualRecordOutlinedIcon fontSize="medium" style={{fill: "#e53a1e"}}/>}
                                                    icon={<FiberManualRecordIcon fontSize="medium" style={{fill: "#e53a1e"}}/>}
                                            />
                                        </div>
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
                        <h5 style={{
                            marginBottom: "3%", marginLeft: "50%"
                        }}>Valutazione professore:</h5>
                        {review.metrics.professor.map((x) => {
                            return <div className={"review-evaluation-details"}>{x.title}:
                                <Rating defaultValue={x.value}
                                        precision={0.5}
                                        readOnly
                                        emptyIcon={<FiberManualRecordOutlinedIcon fontSize="medium"
                                                                                  style={{fill: "#e53a1e"}}/>}
                                        icon={<FiberManualRecordIcon fontSize="medium"
                                                                     style={{fill: "#e53a1e"}}/>}
                                />
                            </div>
                        })}
                        <br/>
                        <h5 style={{
                            marginBottom: "3%", marginLeft: "50%"
                        }}>Valutazione corso:</h5>
                        {review.metrics.course.map((y) => {
                            return <div className={"review-evaluation-details"}>{y.title}:
                                <Rating defaultValue={y.value}
                                        precision={0.5}
                                        readOnly
                                        emptyIcon={<FiberManualRecordOutlinedIcon fontSize="medium" style={{fill: "#e53a1e"}}/>}
                                        icon={<FiberManualRecordIcon fontSize="medium" style={{fill: "#e53a1e"}}/>}
                                />
                            </div>
                        })}
                    </div>
                </div>
            </>
        );
    }

}

export default Review;