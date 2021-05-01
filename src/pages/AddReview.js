import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import AddReviewForm from "../components/PagesSections/AddReview/AddReviewForm";
import { AppContext } from "../context/AppContext";

export default function AddReview() {
    const appData = useContext(AppContext);
    const { professorId } = useParams();

    useEffect(() => {
        if (appData.professor.data?.id == professorId) return;
        appData.professor.refresh(professorId);
    }, [professorId])

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
