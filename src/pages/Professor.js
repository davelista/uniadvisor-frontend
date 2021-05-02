import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import ProfessorDetails from "../components/PagesSections/Professor/ProfessorDetails";
import { AppContext } from "../context/AppContext";

function Professor() {
    const appData = useContext(AppContext);
    const { professorId } = useParams();

    useEffect(() => {
        appData.professor.refresh(professorId);
    }, [professorId, appData.professor.refresh]);

    return (
        <div>
            <Navbar />
            {appData.professor.data !== null ? (
                <ProfessorDetails professor={appData.professor.data} />
            ) : (
                <div style={{ margin: "200px", display: "flex", justifyContent: "center" }}>LOADING PROFESSOR</div>
            )}
        </div>
    );
}

export default Professor;
