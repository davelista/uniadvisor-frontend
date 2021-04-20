import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AddReviewForm from "../components/PagesSections/AddReview/AddReviewForm";

export default function AddReview(props) {
    const { user, professorsList, isHome, isLoadingList } = props;

    const userDetails = user !== null ? <div>USER DETAILS</div> : <div>EFFETTUA IL LOGIN PER ACCEDERE</div>;

    return (
        <>
            <Navbar professorsList={professorsList} user={user} isHome={isHome} isLoadingList={isLoadingList} />
            {userDetails}
            <AddReviewForm professorsList={professorsList} />
        </>
    );
}
