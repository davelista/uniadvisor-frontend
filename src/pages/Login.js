
import React, {useState} from 'react';
import LoginForm from "../components/PagesSections/Login-SignUp/LoginForm";
import {Redirect} from "react-router";
import Navbar from "../components/Navbar/Navbar";

const Login = (props) => {
    const {onChangeUser, professorList, isHome} = props

    const [error, setError] = useState('');

    let userPage;
    error !== false ? userPage = (
        <React.Fragment>
            {/* INIZIO --- DA TOGLIERE NEL MOMENTO IN CUI SI SOSTITUISCE COL POPUP */}
            <Navbar professorList={professorList} user={''} isHome={isHome}/>
            <div className={'element-center'}>
                <div className={"title-red"}>Login</div>
            </div>
            {/* FINE */}
            <LoginForm onChangeError={setError} onChangeUser={onChangeUser}/>

        </React.Fragment>
    ) : userPage = <Redirect to={'/dashboard'}/>

    return (
        <>
            {userPage}
        </>
    );
}

export default Login;