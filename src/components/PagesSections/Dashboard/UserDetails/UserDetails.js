import React from 'react';
import imgUser from "../../../../img/user.jpg";
import './UserDetails.css'

const UserDetails = (props) => {
    const {user} = props

    return (
        <>
            <div className={"user-details-container"}>
                <div>Ciao {user}, benvenuto sul tuo profilo!</div>
                <div>Qui puoi visualizzare tutte le tue recensioni e consultare i tuoi dati personali.</div>
                <div className="user-card">
                    <img src={imgUser} className={"user-img"} alt={imgUser}/>
                    <div className={"user-name"}>Nome Cognome</div>
                    <div className={"user-nickname"}>nomeutente</div>
                    <div className={"user-info-row"}>università - corso di laurea</div>
                    <div className={"user-info-row"}>email</div>
                    <div className={"user-info-row"}>data di nascita</div>
                    <div className={"user-info-row"}>iscritto dal gg/mm/aaaa</div>
                </div>
            </div>
        </>
    );
}

export default UserDetails;