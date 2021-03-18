import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login'
import {Redirect, Route} from "react-router";
import {Icon} from "@material-ui/core";
import {FaFacebookF} from "react-icons/all";

const LoginFacebook = (props) => {
    const {onChangeUser} = props;
    const [state, setState] = useState({auth: false, name: '', email: '', picture: ''});
    const [loading, setLoading] = useState(true);

    const componentClicked = () => {
        console.log('Facebook btn click');
    }

    const responseFacebook = async (response) => {
        console.log(response);
        setLoading(true);
        setState({auth: true, name: response.name, email: response.email, picture: response.picture.data.url});
        onChangeUser(response.name);
        setLoading(false);

    }

    let facebookData;
    state.name!=='' ? facebookData = (
        <Redirect to={'/dashboard'} />

    ) : facebookData = (
        <React.Fragment>
        <FacebookLogin
            appId="207812577218371"
            autoLoad={false}
            fields="name, email, picture"
            onClick={componentClicked}
            callback={responseFacebook}
            textButton = ""
            // icon=
             icon={<FaFacebookF style={{fill:"white"}}/>}
            cssClass="facebook-btn"
        />
        </React.Fragment>
    )

    return (
        <>
            {facebookData}
        </>
    );
}

export default LoginFacebook;