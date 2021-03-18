import React from 'react';
import UserDetails from "../components/PagesSections/Dashboard/UserDetails/UserDetails";
import Navbar from "../components/Navbar/Navbar";

const Dashboard = (props) => {

    const {user, professorList, isHome} = props;

    return (
        <>
            {/*<NavSearchBar professorList={professorList} user={user}/>*/}
            <Navbar professorList={professorList} user={user} isHome={isHome}/>
            <UserDetails user={user}/>
        </>
    );
}

export default Dashboard;