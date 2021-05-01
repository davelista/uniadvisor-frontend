
import React, {useContext, useState} from 'react';
import LoginForm from "../components/PagesSections/Login-SignUp/LoginForm";
import {Redirect} from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { AppContext } from '../context/AppContext';

const Login = () => {
    const appData = useContext(AppContext);

    const [error, setError] = useState('');

    let userPage;
    error !== false ? userPage = (
        <React.Fragment>
            {/* INIZIO --- DA TOGLIERE NEL MOMENTO IN CUI SI SOSTITUISCE COL POPUP */}
            <Navbar />
            <div className={'element-center'}>
                <div className={"title-red"}>Login</div>
            </div>
            {/* FINE */}
            <LoginForm onChangeError={setError} onChangeUser={appData.user.refresh}/>

        </React.Fragment>
    ) : userPage = <Redirect to={'/dashboard'}/>

    return (
        <>
            {userPage}
        </>
    );
}

export default Login;