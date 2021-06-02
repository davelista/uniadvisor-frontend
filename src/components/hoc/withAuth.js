import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ProgressCirle from "../progress/ProgressCircle";

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
        <div style={{ margin: "10rem", display: "flex", justifyContent: "center" }}>
            Questo contenuto richiede l'accesso
        </div>
    );
};
