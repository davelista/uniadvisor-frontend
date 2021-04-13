import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AddReviewForm from "../components/PagesSections/AddReview/AddReviewForm";

export default function AddReview(props) {
    const { user, professorList, isHome } = props;

    const userDetails = user !== null ? <div>USER DETAILS</div> : <div>EFFETTUA IL LOGIN PER ACCEDERE</div>;

    return (
        <>
            <Navbar professorList={professorList} user={user} isHome={isHome} />
            {userDetails}
            <AddReviewForm professorList={professorList} />
        </>
    );
}
