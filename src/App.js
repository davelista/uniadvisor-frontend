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
import Dashboard from "./components/PagesSections/Dashboard";


function App() {
    useEffect(() => {
        ReactGA.initialize('UA-185661222-1 ');
        //to report page view
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

    const [name, setName] = useState('');
    /*INSERITO PER MANTENERE LA SESSIONE CHIEDERE MEGLIO A LUIGI ED ALAIN

    useEffect(() => {
        (
            async () => {
                const response = await fetch ('http://localhost:5000/api/user', {
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
                <Route path='/' exact component={() => <Home professorList={professorList} />}/>
                <Route path="/professors/:endpoint" exact component={() => <Professor professorList={professorList} />} />
                <Route path="/login" exact component={() => <Login />} />
                <Route path="/sign-up" exact component={() => <SignUp />} />
                <Route path="/dashboard" exact component={() => <Dashboard />}/>
            </Switch>
        </Router>

);
}

export default App;