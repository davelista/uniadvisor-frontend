import React from 'react';
import {useParams} from "react-router";
import useProfessor from "../hooks/useProfessor";
import Navbar from "../components/Navbar/Navbar";
import ProfessorDetails from "../components/PagesSections/Professor/ProfessorDetails";

function Professor(props) {
    const {professorsList, user, isHome, isLoadingList} = props;
    let {professorId} = useParams();
    let [professor, professorImg, isLoading] = useProfessor(professorId);

    const getContent = () => {
        if (!isLoading && professor) {
            return (
                <React.Fragment>
                    <ProfessorDetails professorsList={professorsList} professor={professor}
                                      professorImg={professorImg}/>
                </React.Fragment>
            );
        }
    }

    return (
        <div>
            <Navbar professorsList={professorsList} user={user} isHome={isHome} isLoadingList={isLoadingList}/>
            {getContent()}
        </div>
    )

}

export default Professor;