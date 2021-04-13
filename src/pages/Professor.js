import React from 'react';
import {Redirect, useParams} from "react-router";
import useProfessor from "../hooks/useProfessor";
import Navbar from "../components/Navbar/Navbar";

function Professor(props) {
    const {professorsList, user, isHome, isLoadingList} = props;
    let {professorId} = useParams();
    let [professor, isLoading] = useProfessor(professorId);

    const getContent = () => {
        if(!isLoading){
            if (professor === null){
                return(<Redirect to={"/"} />);
            } else {
                return (
                    <React.Fragment>
                        {/*<ProfessorDetails professorsList={professorsList} professor={professor} professorImg={professorImg}/>*/}
                        <div> prova </div>
                    </React.Fragment>
                );
            }

        }
    }

    return (
        <div>
            <Navbar professorsList={professorsList} user={user} isHome={isHome} isLoadingList={isLoadingList}/>
            {console.log(professor)}
            {getContent()}
        </div>
    )

}
export default Professor;