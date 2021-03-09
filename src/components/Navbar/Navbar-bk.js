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
                <div className="menu-content">
                    <Button buttonStyle='btn--outline' onClick={handleOpenLoginForm}><h6 style={{color: "white"}}>Accedi/Registrati</h6></Button>
                    {isOpenLoginForm && <Popup onSubmit={handleSubmit}>
                        <div className={'form-content'}>
                            <TitlePopup titleText={'Siamo spiacenti!'} onClose={handleOpenLoginForm}/>
                            <p>Il sito è in fase di manutenzione e questa funzione non è al momento disponibile.</p>
                            <p>Ti chiediamo di lasciarci la mail in modo da poterti avvisare quando è pronto</p>
                            <input
                                className={"form-input"}
                                placeholder="Mail"
                                onChange={e => setEmail(e.target.value)}
                                required
                                value={email}
                            />
                            <div className={'form-buttons'}>
                                <button className={'send-button'} onClick={handleSubmit}>Invia</button>
                            </div>
                        </div>
                    </Popup>}
                </div>
            </div>
        </>
    );

}

export default Navbar;

