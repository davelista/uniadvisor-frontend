import React from 'react';
import SignUpForm from "../components/PagesSections/Login-SignUp/SignUpForm";
import Navbar from "../components/Navbar/Navbar";

const SignUp = (props) => {

    const {onChangeUser, professorList, isHome} = props
    return (
        <>
            <Navbar professorList={professorList} user={''} isHome={isHome}/>
            <SignUpForm onChangeUser={onChangeUser}/>
            </>
    );
}

export default SignUp;