import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import ProfessorDetails from "../components/PagesSections/Professor/ProfessorDetails";
import { AppContext } from "../context/AppContext";
import ProgressCirle from "../components/progress/ProgressCircle";

function Professor( ) {
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
        appData.professor.refresh(professorId);
    }, [professorId, appData.professor.refresh]);

    return (
        <div>
            <Navbar />
            {appData.professor.data !== null ? (
                <ProfessorDetails professor={appData.professor.data} />
            ) : (
                <LoadingComponent />
            )}
        </div>
    );
}

export default Professor;
