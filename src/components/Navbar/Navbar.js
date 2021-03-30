import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from "../../img/logo.svg";
import './Navbar.css'
import '../Buttons/Button.css';
import {Button} from "../Buttons/Button";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = (props) => {

    const {professorList, user, isHome} = props;
    const [isOpenLoginForm, setOpenLoginForm] = useState(false);

    const handleOpenLoginForm = () => {
        setOpenLoginForm(!isOpenLoginForm);
    }

    let button;
    user === null ? button = (
            <Link to='/login' className="navbar-title">
                <Button buttonStyle='btn--outline'><h6 style={{color: "white"}}>Accedi/Registrati</h6></Button>
            </Link>
        )
        : button = (<Link to='/dashboard'><div>{user}</div></Link>)

    let search;
    isHome === false ? search=(<SearchBar professorList={professorList} isHome={isHome}/>) : search=(<div></div>)

    return (
        <>
            <div className="navbar">
                <Link to='/' className="navbar-title">
                    <img src={logo} className={'logo'} alt={logo}/>
                </Link>
                {search}
                {/* LOGIN POPUP
                <div className="menu-content">
                    <Button buttonStyle='btn--outline' onClick={handleOpenLoginForm}><h6 style={{color: "white"}}>Accedi/Registrati</h6></Button>
                    {isOpenLoginForm &&
                    <Popup titleText={'Login'} onClose={handleOpenLoginForm}>
                        <Login onChangeUser={onChangeUser}/>
                    </Popup>}
                </div>*/}
                {button}
            </div>
        </>
    );

}

export default Navbar;

