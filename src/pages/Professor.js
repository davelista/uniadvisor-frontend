import React, {useState, useEffect} from 'react';
import ProfessorDetails from "../components/PagesSections/Professor/ProfessorDetails";
import {useParams} from "react-router";
import useProfessor from "../hooks/useProfessor";
import Popup from "../components/Popup/Popup";

function Professor(props) {
    let { endpoint } = useParams();
    let [professor, isLoading] = useProfessor(endpoint);
    const {professorList, onChangeProfessor, isHome} = props;

    const getContent = () => {
        if(!isLoading){
            return (
                <React.Fragment>
                    <ProfessorDetails professorList={professorList} onChangeProfessor={onChangeProfessor} isHome={isHome} professor={professor}/>
                </React.Fragment>
            );
        }
    }

    return (
        <div>
            {getContent()}
        </div>
    )

}
export default Professor;