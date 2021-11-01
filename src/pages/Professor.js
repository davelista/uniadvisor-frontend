import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import ProfessorDetails from "../components/PagesSections/Professor/ProfessorDetails";
import { AppContext } from "../context/AppContext";
import ProgressCirle from "../components/progress/ProgressCircle";
import MetaTags from "react-meta-tags";

function Professor() {
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

    console.log(`appData`, appData);

    return (
        <div>
            <Navbar />
            {appData.professor.data !== null ? (
                <MetaTags>
                    <title>Uniadvisor.it - {appData.professor.data.nome} {appData.professor.data.cognome}</title>
                    <meta
                        name="title"
                        content={`${appData.professor.data.nome} ${appData.professor.data.cognome} - ${appData.professor.data.university[0].name}`}
                    />
                    {/* <meta name="description" content="Some description." /> */}
                    <meta
                        property="og:title"
                        content={`${appData.professor.data.nome} ${appData.professor.data.cognome} - ${appData.professor.data.university[0].name}`}
                    />
                </MetaTags>
            ) : null}
            {appData.professor.data !== null ? <ProfessorDetails professor={appData.professor.data} /> : <LoadingComponent />}
        </div>
    );
}

export default Professor;
