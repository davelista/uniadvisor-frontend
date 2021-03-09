import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import SignUpForm from "../components/PagesSections/Login-SignUp/SignUpForm";
import FacebookLogin from "../components/PagesSections/Login-SignUp/FacebookLogin";

const SignUp = () => {

    return (
        <>
            <Navbar/>
            <SignUpForm/>
            <FacebookLogin/>
        </>
    );
}

export default SignUp;