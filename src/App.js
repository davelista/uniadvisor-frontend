import React, {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ReactGA from 'react-ga';
//import professorsList from './json/professorsList.json'
//Pages
import {Dashboard, Home, Login, Professor, SignUp, AddReview} from './pages'
import {Footer} from './components'
import {Redirect} from "react-router";
import { AppContext, useAppContext } from './context/AppContext';

const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
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
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function App() {
    useEffect(() => {
        ReactGA.initialize('UA-185661222-1 ');
        //to report page view
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    const appData = useAppContext();

    return (
        <AppContext.Provider value={appData}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path="/professors/:professorId">
                        <Professor />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/add-review/professors/:professorId">
                        <AddReview />
                    </Route> 
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/sign-up">
                        <SignUp />
                    </Route>
                    <Route render={() => <Redirect to={{pathname: "/"}}/>}/>
                </Switch>
                <Footer/>
            </Router>
        </AppContext.Provider>

    );

    /*
        funzione per eliminare cookies
        document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        getCookie("session") === "" ? setUser(null) : ApiLogin("davide.lista.polimi@gmail.com", "prova"); /*Api speficia per i cookies

        if(user !== null) {
            setCookie("session", user, 7);
            console.log(getCookie("session"));
        }

        const readCookie = () => {
            getCookie("session");
        }
    */
}

export default App;