import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from "../../img/logo.svg";
import './Navbar.css'
import '../Buttons/Button.css';
import {Button} from "../Buttons/Button";
import Popup from "../Popup/Popup";
import {ApiMail} from "../../api";

const Navbar = () => {

    const [email, setEmail] = useState();
    const [loading, setLoading] = useState (false); //loading è fondamentale per l'invio delle informazioni dal popup

    const TitlePopup = (props) => {
        const {titleText, onClose} = props;
        return (
            <div className={'title-popup'}>
                <div className={'title-text'}>{titleText}</div>
                <div className={'close-button'} onClick={onClose}>X</div>
            </div>
        )
    }

    const [isOpenLoginForm, setOpenLoginForm] = React.useState(false);

    const handleOpenLoginForm = () => {
        setOpenLoginForm(!isOpenLoginForm);
    }
    const sendMail = async (email) => {
        setLoading(true);
        try {
            await ApiMail(email);
        } catch (e) {
            throw e;
        }
        setLoading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("la userMail è" + email);
        sendMail(email);
    }

    return (
        <>
            <div className="navbar">
                <Link to='/' className="navbar-title">
                    <img src={logo} className={'logo'} alt={logo}/>
                </Link>
                <Link to='/login' className="navbar-title">
                <div className="menu-content">
                    <Button buttonStyle='btn--outline' onClick={handleOpenLoginForm}><h6 style={{color: "white"}}>Accedi/Registrati</h6></Button>
                </div>
                </Link>
            </div>
        </>
    );

}

export default Navbar;

