import React, {useState} from 'react';
import Navbar from "../components/Navbar/Navbar";
import LoginForm from "../components/PagesSections/Login-SignUp/LoginForm";


const Login = () => {
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const login = details => {
        console.log(details);
    }

    const Logout = () => {
        console.log("logout");
    }

    return (
        <>
            <Navbar/>
            {user.email !== "" ? (
                <>
                <div>Welcome</div>
                <button>LOGOUT</button>
                </>
            ) : (<LoginForm login={login} error={error}/>)}
        </>
    );
}

export default Login;