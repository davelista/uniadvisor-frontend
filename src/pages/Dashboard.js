import React from 'react';
import UserDetails from "../components/PagesSections/Dashboard/UserDetails";
import Navbar from "../components/Navbar/Navbar";
import {Redirect} from "react-router";
import {Button} from "../components/Buttons/Button";

const Dashboard = (props) => {

    const {user, professorList, isHome, onChangeAuth} = props;

    let dashboard;

    user !== null ? dashboard=(<UserDetails user={user}/>) : dashboard=(<div> EFFETTUA IL LOGIN PER ACCEDERE </div>)
    /*dashboard=(<Redirect to={'/login'} />) NON va bene perché effettua prima il redirect*/
    return (
        <>
            <Navbar professorList={professorList} user={user} isHome={isHome}/>
            {dashboard}
            <Button onClick={onChangeAuth} />
        </>
    );
}

export default Dashboard;