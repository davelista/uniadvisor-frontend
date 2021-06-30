import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login'
import {FaFacebookF} from "react-icons/all";

const LoginFacebook = (props) => {
    const [onChangeUserFb, setOnChangeUserFb] = useState(null);
    const [onChangeFb, setonChangeFb] = useState(null);
    const [loading, setLoading] = useState(true);

    const componentClicked = () => {
        setLoading(true);
    }

    const responseFacebook = async (response) => {
        setOnChangeUserFb(response);
        setonChangeFb(true);
        setLoading(false)
        console.log(response)
    }


    let facebookData;
    !loading ? facebookData = (
        // <Redirect to={'/dashboard'} />
        <div> </div>
    ) : facebookData = (
        <React.Fragment>
            <FacebookLogin
                appId="207812577218371"
                autoLoad={false}
                fields="name, email, picture"
                onClick={componentClicked}
                callback={responseFacebook}
                textButton=""
                icon={<FaFacebookF style={{fill: "white"}}/>}
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