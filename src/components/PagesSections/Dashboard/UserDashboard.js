import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import withAuth from "../../hoc/withAuth";
import UserDetails from "./UserDetails";
import UserStats from "./UserStats";

function UserDashboard() {
    const appData = useContext(AppContext);

    return (
        <>
            <UserDetails user={appData.user.data} />
            <UserStats />
            
        </>
    );
}

// function LoginRequired() {
//     return <div> EFFETTUA IL LOGIN PER ACCEDERE </div>;
// }

// export default withAuth(UserDashboard, LoginRequired);

export default withAuth(UserDashboard);
