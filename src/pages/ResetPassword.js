import React from 'react';
import UniversitySection from "../components/PagesSections/Homepage/University/UniveristyArea";
import AboutArea from "../components/PagesSections/Homepage/About/AboutArea";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/PagesSections/Homepage/HeroSection/HeroSection";
import FormTextField from "../components/Forms/FormTextField";
import {Button} from "../components/Buttons/Button";
import useLoginForm from "../components/PagesSections/Login-SignUp/useLoginForm";
import ResetPasswordFrom from "../components/PagesSections/ResetPassword/ResetPasswordFrom";

function ResetPassword() {

    return (
        <>
            <Navbar />
            <ResetPasswordFrom/>
        </>
    );
}

export default ResetPassword;