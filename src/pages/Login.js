import React, {useState} from 'react';
import LoginForm from "../components/PagesSections/Login-SignUp/LoginForm";
import {Redirect} from "react-router";
import Navbar from "../components/Navbar/Navbar";

const Login = (props) => {
    const {onChangeUser, professorList, isHome} = props

    const [error, setError] = useState('');

    const login = details => {
        console.log(details);
    }

    /*const Logout = () => {
        console.log("logout");
    }*/

    let userPage;
    error !== false ? userPage = (
        <React.Fragment>
            {/* INIZIO --- DA TOGLIERE NEL MOMENTO IN CUI SI SOSTITUISCE COL POPUP */}
            <Navbar professorList={professorList} user={''} isHome={isHome}/>
            <div className={'element-center'}>
                <div className={"title-red"}>Login</div>
            </div>
            {/* FINE */}
            <LoginForm login={login} onChangeError={setError} onChangeUser={onChangeUser}/>
            {error !== '' ? <div>{error}</div> : null}
        </React.Fragment>
    ) : userPage = <Redirect to={'/dashboard'}/>

    return (
        <>
            {userPage}
        </>
    );
}

export default Login;