import React, {useEffect, useState} from 'react';
import {Button} from "../Buttons/Button";

const Dashboard = (props) => {

    let {name} = props;

    return (
        <>

            {
                console.log(name)}
            {
                name ? 'Hi ' + name : 'Non sei loggato'

            }
        </>
    );
}

export default Dashboard;