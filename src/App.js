import React, {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import professorList from './json/professorsList.json'
import ReactGA from 'react-ga';
//Pages
import Home from './pages/Home.js'
import Professor from "./pages/Professor";


function App() {
    useEffect(() => {
        ReactGA.initialize('UA-185661222-1 ');
        //to report page view
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={() => <Home professorList={professorList} />}/>
                <Route path="/professors/:endpoint" exact component={() => <Professor professorList={professorList} />} />
            </Switch>
        </Router>

);
}

export default App;