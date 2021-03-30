import React from 'react';
import UserDetails from "../components/PagesSections/Dashboard/UserDetails";
import Navbar from "../components/Navbar/Navbar";
import {Redirect} from "react-router";

const Dashboard = (props) => {

    const {user, professorList, isHome} = props;

    let dashboard;

    user === null ? dashboard=(<Redirect to={'/login'} />) : dashboard=(<UserDetails user={user}/>)

    return (
        <>
            <Navbar professorList={professorList} user={user} isHome={isHome}/>
            {dashboard}
        </>
    );
}

export default Dashboard;