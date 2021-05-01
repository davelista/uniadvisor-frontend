import React, {useContext, useState} from 'react';
import SignUpForm from "../components/PagesSections/Login-SignUp/SignUpForm";
import Navbar from "../components/Navbar/Navbar";
import SignUpFb from "../components/PagesSections/Login-SignUp/SignUpFb";
import { AppContext } from '../context/AppContext';

const SignUp = () => {
    const appData = useContext(AppContext);

    const [fbRegister, setFacebookRegister] = useState(false);
    const [userFb, setUserFb] = useState();

    let signUp;
    !fbRegister ? signUp = (<SignUpForm onChangeUserFb={setUserFb} onChangeFb={setFacebookRegister}/>) :
        signUp = <SignUpFb userFb={userFb} onChangeUser={appData.user.refresh}/>

    return (
        <>
            <Navbar user={''} />
            {signUp}
            </>
    );
}

export default SignUp;