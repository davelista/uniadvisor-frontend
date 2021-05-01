import React, { useContext } from "react";
import UserDetails from "../components/PagesSections/Dashboard/UserDetails";
import Navbar from "../components/Navbar/Navbar";
import { Redirect } from "react-router";
import { Button } from "../components/Buttons/Button";
import { AppContext } from "../context/AppContext";

const Dashboard = (props) => {
    const { onChangeAuth } = props;

    const appData = useContext(AppContext);

    const dashboard =
        appData.user.data !== null ? (
            <UserDetails user={appData.user.data} />
        ) : (
            <div> EFFETTUA IL LOGIN PER ACCEDERE </div>
        );
    /*dashboard=(<Redirect to={'/login'} />) NON va bene perché effettua prima il redirect*/
    return (
        <>
            <Navbar />
            {dashboard}
            <Button onClick={onChangeAuth} />
        </>
    );
};

export default Dashboard;
