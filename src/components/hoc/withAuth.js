import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ProgressCirle from "../progress/ProgressCircle";
import {Button} from "../Buttons/Button";
import {Link} from "react-router-dom";

const withAuth = (
    WrappedComponent,
    UnauthorizedComponent = UnauthorizedComponentDefault,
    LoadingComponent = LoadingComponentDefault
) =>
    function ComponentWithAuth(props) {
        const appData = useContext(AppContext);

        switch (appData.user.auth) {
            case "OK":
                return <WrappedComponent {...props} />;

            case "VALIDATING":
                return <LoadingComponent />;

            default:
                return <UnauthorizedComponent {...props} />;
        }
    };

export default withAuth;

const LoadingComponentDefault = () => {
    return (
        <div style={{ margin: "10rem", display: "flex", justifyContent: "center" }}>
            <ProgressCirle />
        </div>
    );
};

const UnauthorizedComponentDefault = () => {
    return (
        <div style={{ padding: "10rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <div style={{padding: "2rem"}}>Per visualizzare questa pagina bisogna effettuare l'accesso.</div>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-evenly", alignItems: "center"}}>
                <Link to="/login">
                    <Button buttonStyle="btn--outline--white" buttonSize={"btn--small"}>
                        <h6>Login</h6>
                    </Button>
                </Link>
            </div>

        </div>
    );
};
