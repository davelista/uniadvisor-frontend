import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ReviewsControl from "../components/PagesSections/Admin/ReviewsControl";

const Admin = (props) => {

    return (
        <>
            <Navbar/>
            <ReviewsControl/>
        </>
    );
}

export default Admin;