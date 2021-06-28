import React, { useEffect, useRef } from "react";
import "./App.css";
import "./globals.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
//Pages
import { Dashboard, Home, Login, Professor, SignUp, AddReview, Settings, ResetPassword } from "./pages";
import { Footer } from "./components";
import { Redirect } from "react-router";
import { AppContext, useAppContext } from "./context/AppContext";

function App() {
    const sessionValidationRequired = useRef(true);

    useEffect(() => {
        ReactGA.initialize("UA-185661222-1 ");
        //to report page view
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const appData = useAppContext();

    useEffect(() => {
        if (sessionValidationRequired.current === false) return;
        appData.user.validateSession();
        sessionValidationRequired.current = false;
    }, [appData.user]);

    return (
        <AppContext.Provider value={appData}>
            <Router>
                <Switch>
                    <Route exact path="/">
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
                    <Route exact path="/settings">
                        <Settings />
                    </Route>
                    <Route exact path="/reset_password/:token">
                        <ResetPassword />
                    </Route>
                    <Route render={() => <Redirect to={{ pathname: "/" }} />} />
                </Switch>
                <Footer />
            </Router>
        </AppContext.Provider>
    );
}

export default App;
