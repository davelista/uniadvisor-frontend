
import React, {useEffect, useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import professorList from './json/professorsList.json'
import ReactGA from 'react-ga';
//Pages
import Home from './pages/Home.js'
import Professor from "./pages/Professor";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer/Footer";
import {Redirect} from "react-router";
import {ApiLogin} from "./api";
import AddReview from './pages/AddReview';

const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const setCookie = (cname, cvalue, exdays) => {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/* funzione per eliminare cookies
document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
*/

function App() {
    useEffect(() => {
        ReactGA.initialize('UA-185661222-1 ');
        //to report page view
        ReactGA.pageview(window.location.pathname + window.location.search);
        readCookie();
    }, [])

    const [user, setUser] = useState(null);

    // getCookie("session") === "" ? setUser(null) : ApiLogin("davide.lista.polimi@gmail.com", "prova"); /*Api speficia per i cookies*/

    if(user !== null) {
        setCookie("session", user, 7);
        console.log(getCookie("session"));
    }

    const readCookie = () => {
        getCookie("session");
    }

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={() => <Home professorList={professorList} user={user} isHome={true} />}/>
                <Route exact path="/professors/:endpoint" component={() => <Professor professorList={professorList}  user={user} isHome={false}/>} />
                <Route exact path="/dashboard" component={() => <Dashboard professorList={professorList} user={user} isHome={false}/>}/>
                <Route exact path="/add-review" component={() => <AddReview professorList={professorList} user={user} isHome={false}/>}/>
                <Route exact path="/login" component={() => <Login professorList={professorList} onChangeUser={setUser} isHome={false}/>} />
                <Route exact path="/sign-up" component={() => <SignUp professorList={professorList} onChangeUser={setUser} isHome={false}/>} />
                <Route render={() => <Redirect to={{pathname: "/"}} />} />
            </Switch>
            <Footer/>
        </Router>

    );
}

export default App;