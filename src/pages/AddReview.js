import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import AddReviewForm from "../components/PagesSections/AddReview/AddReviewForm";
import { AppContext } from "../context/AppContext";

export default function AddReview() {
    const appData = useContext(AppContext);

    const userDetails = appData.user.data !== null ? <div>USER DETAILS</div> : <div>EFFETTUA IL LOGIN PER ACCEDERE</div>;

    return (
        <>
            <Navbar />
            {userDetails}

            {appData.professor.data !== null && appData.professor.image !== null ? (
                <AddReviewForm professor={appData.professor.data} professorImg={appData.professor.image} />
            ) : (
                <div style={{ margin: "200px", display: "flex", justifyContent: "center" }}>LOADING PROFESSOR</div>
            )}
        </>
    );
}
