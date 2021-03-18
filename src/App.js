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


function App() {
    useEffect(() => {
        ReactGA.initialize('UA-185661222-1 ');
        //to report page view
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

    const [user, setUser] = useState('');
    /*INSERITO PER MANTENERE LA SESSIONE CHIEDERE MEGLIO A LUIGI ED ALAIN

    useEffect(() => {
        (
            async () => {
                const response = await fetch ('http://localhost:5000/api/user_login', {
                    headers: {'Content-Type': 'application/json'},
                    credentials: "include",
                });

                const content = await response.json();

                setName(content.name);
        }
        )();
    });*/
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={() => <Home professorList={professorList} user={user} isHome={true} />}/>
                <Route exact path="/professors/:endpoint" component={() => <Professor professorList={professorList}  user={user} isHome={false}/>} />
                <Route exact path="/dashboard" component={() => <Dashboard professorList={professorList} user={user} isHome={false}/>}/>
                <Route exact path="/login" component={() => <Login professorList={professorList} onChangeUser={setUser} isHome={false}/>} />
                <Route exact path="/sign-up" component={() => <SignUp professorList={professorList} onChangeUser={setUser} isHome={false}/>} />
                <Route render={() => <Redirect to={{pathname: "/"}} />} />
            </Switch>
            <Footer/>
        </Router>

);
}

export default App;