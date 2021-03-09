import React, {useState} from 'react';
import FacebookLoginBtn from 'react-facebook-login'
import {Redirect, Route} from "react-router";
import Dashboard from "../Dashboard/Dashboard";
import {BrowserRouter as Router, Switch} from "react-router-dom";

const FacebookLogin = () => {
    const [state, setState] = useState({auth: false, name: '', email: '', picture: ''});
    const [loading, setLoading] = useState(true);

    const componentClicked = () => {
        console.log('Facebook btn click');
    }

    const responseFacebook = async (response) => {
        console.log(response);
        setLoading(true);
        setState({auth: true, name: response.name, email: response.email, picture: response.picture.data.url});

        setLoading(false);

    }

    let facebookData;
    state.name!=='' ? facebookData = (
        <Router>
            <Switch>
            <Route path='/dashboard' exact component={() => <Dashboard name={"Piero"} />} />
            </Switch>
        </Router>

    ) : facebookData = (
        <React.Fragment>
        <FacebookLoginBtn
            appId="207812577218371"
            autoLoad={false}
            fields="name, email, picture"
            onClick={componentClicked}
            callback={responseFacebook}
        />
        </React.Fragment>
    )

    return (
        <>
            {facebookData}
        </>
    );
}

export default FacebookLogin;