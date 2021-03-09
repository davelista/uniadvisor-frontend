import React, {useEffect, useState} from 'react';
import './Dashboard.css'
import NavSearchBar from "../../Navbar/NavSearchBar";

const Dashboard = (props) => {

    const {name, professorList, onChangeProfessor, professor} = props;

    return (
        <>
            <NavSearchBar professorList={professorList} onChangeProfessor={onChangeProfessor} professor={professor}/>

            {
                console.log(name)}
            {
                name ? 'Hi ' + name : 'Non sei loggato'

            }
        </>
    );
}

export default Dashboard;