import React from 'react';
import ProfessorDetails from "../components/PagesSections/Professor/ProfessorDetails";
import {useParams} from "react-router";
import useProfessor from "../hooks/useProfessor";
import NavSearchBar from "../components/Navbar/NavSearchBar";

function Professor(props) {
    let { endpoint } = useParams();
    let [professor, isLoading] = useProfessor(endpoint);
    const {professorList, onChangeProfessor} = props;

    const getContent = () => {
        if(!isLoading){
            return (
                <React.Fragment>
                    <ProfessorDetails professorList={professorList} onChangeProfessor={onChangeProfessor} professor={professor}/>
                </React.Fragment>
            );
        }
    }

    return (
        <div>
            <NavSearchBar professorList={professorList} onChangeProfessor={onChangeProfessor} professor={professor}/>
            {getContent()}
        </div>
    )

}
export default Professor;