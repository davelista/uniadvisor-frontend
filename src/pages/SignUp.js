import React, {useState} from 'react';
import SignUpForm from "../components/PagesSections/Login-SignUp/SignUpForm";
import Navbar from "../components/Navbar/Navbar";
import SignUpFb from "../components/PagesSections/Login-SignUp/SignUpFb";

const SignUp = (props) => {

    const {professorsList, onChangeUser, isHome} = props
    const [fbRegister, setFacebookRegister] = useState(false);
    const [userFb, setUserFb] = useState();

    let signUp;
    !fbRegister ? signUp = (<SignUpForm onChangeUserFb={setUserFb} onChangeFb={setFacebookRegister}/>) :
        signUp = <SignUpFb userFb={userFb} onChangeUser={onChangeUser}/>

    return (
        <>
            <Navbar professorsList={professorsList} user={''} isHome={isHome}/>
            {signUp}
            </>
    );
}

export default SignUp;