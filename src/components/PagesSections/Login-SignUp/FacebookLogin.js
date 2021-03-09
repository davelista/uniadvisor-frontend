import React, {useState} from 'react';
import FacebookLoginBtn from 'react-facebook-login'
import {Redirect} from "react-router";

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

            <React.Fragment>
                {console.log(state.name)}
                <Redirect to={{
                    pathname: '/dashboard',
                    props: { name: 'Piero' }
                }} />
                {console.log(state.name)}
            </React.Fragment>

    ) : facebookData = (
        <React.Fragment>
        <FacebookLoginBtn
            appId="207812577218371"
            autoLoad={true}
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