import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import AddReviewForm from "../components/PagesSections/AddReview/AddReviewForm";
import { AppContext } from "../context/AppContext";
import ProgressCirle from "../components/progress/ProgressCircle";

export default function AddReview() {
    const appData = useContext(AppContext);
    const { professorId } = useParams();
    const LoadingComponent = () => {
        return (
            <div style={{ margin: "10rem", display: "flex", justifyContent: "center" }}>
                <ProgressCirle />
            </div>
        );
    };

    useEffect(() => {
        if (appData.professor.data?.id == professorId) return; // non mettere "===" (id: number, professorId: string)
        appData.professor.refresh(professorId);
    }, [professorId]);

    return (
        <>
            <Navbar />

            {appData.professor.data !== null ? (
                <AddReviewForm />
            ) : (
                <LoadingComponent />
            )}
        </>
    );
}
