import React, { useContext, useState } from "react";
import LoginForm from "../components/PagesSections/Login-SignUp/LoginForm";
import { Redirect } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { AppContext } from "../context/AppContext";

const Login = () => {
    const appData = useContext(AppContext)

    if (appData.user.auth === "OK") return <Redirect to={"/dashboard"} />

    return (
        <>
            <Navbar />
            <LoginForm />
        </>
    );
};

export default Login;
