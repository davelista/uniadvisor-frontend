import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const withAuth = (WrappedComponent, DefaultComponent) =>
    function ComponentWithAuth(props) {
        const appData = useContext(AppContext);

        const isAuthenticated = appData.user.data !== null;

        return isAuthenticated ? <WrappedComponent {...props} /> : <DefaultComponent {...props} />;
    };

export default withAuth;