import React from 'react';
import ProfessorDetails from "../components/PagesSections/Professor/ProfessorDetails";
import {Redirect, useParams} from "react-router";
import useProfessor from "../hooks/useProfessor";
import Navbar from "../components/Navbar/Navbar";

function Professor(props) {
    const {professorList, user, isHome} = props;
    let {endpoint} = useParams();
    let [professor, professorImg, isLoading] = useProfessor(endpoint);

    const getContent = () => {
        if(!isLoading){
            if (professor === null){
                return(<Redirect to={"/"} />);
            } else {
                return (
                    <React.Fragment>
                        <ProfessorDetails professorList={professorList} professor={professor} professorImg={professorImg}/>
                    </React.Fragment>
                );
            }

        }
    }

    return (
        <div>
            {/*<NavSearchBar professorList={professorList} user={user}/>*/}
            <Navbar professorList={professorList} user={user} isHome={isHome}/>
            {getContent()}
        </div>
    )

}
export default Professor;