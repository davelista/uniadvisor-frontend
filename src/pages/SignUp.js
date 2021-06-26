import React, { useContext } from "react";
import { Redirect } from "react-router";
import SignUpForm from "../components/PagesSections/Login-SignUp/SignUpForm";
import Navbar from "../components/Navbar/Navbar";
// import SignUpFb from "../components/PagesSections/Login-SignUp/SignUpFb";
import { AppContext } from "../context/AppContext";

const SignUp = () => {
    const appData = useContext(AppContext);

    if (appData.user.auth === "OK") return <Redirect to={"/dashboard"} />;

    return (
        <>
            <Navbar />
            <SignUpForm />
        </>
    );
};

export default SignUp;

// const SignUp = () => {
//     const appData = useContext(AppContext);

//     const [fbRegister, setFacebookRegister] = useState(false);
//     const [userFb, setUserFb] = useState();

//     let signUp;
//     !fbRegister ? signUp = (<SignUpForm onChangeUserFb={setUserFb} onChangeFb={setFacebookRegister}/>) :
//         signUp = <SignUpFb userFb={userFb} />

//     return (
//         <>
//             <Navbar user={''} />
//             {signUp}
//             </>
//     );
// }
