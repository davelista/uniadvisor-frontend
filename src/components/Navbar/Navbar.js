import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import logo from "../../img/logo.svg";
import './Navbar.css'
import '../Buttons/Button.css';
import {Button} from "../Buttons/Button";
import SearchBar from "../SearchBar/SearchBar";
import useMediaQuery, { Device } from '../../hooks/useMediaQuery';
import SearchIcon from '@material-ui/icons/Search';
import { AppContext } from '../../context/AppContext';

const Navbar = (props) => {

    const { isHome = false} = props;

    const appData = useContext(AppContext);

    const [isOpenLoginForm, setOpenLoginForm] = useState(false);
    const isMobile = useMediaQuery(Device.sm);
    const [mobileSearchHidden, setMobileSearchHidden] = useState(true);

    const handleOpenLoginForm = () => {
        setOpenLoginForm(!isOpenLoginForm);
    }

    let button;
    appData.user.data === null ? button = (
            <Link to='/login' className="navbar-title">
                {/* <Button buttonStyle='btn--outline'><h6 style={{color: "white"}}>Accedi/Registrati</h6></Button> */}
                <Button buttonStyle='btn--outline'><h6 style={{color: "white"}}>{isMobile ? "Accedi" : "Accedi/Registrati"}</h6></Button>
            </Link>
        )
        : button = (<Link to='/dashboard'><div>{appData.user.data}</div></Link>)

    let search;
    isHome === false && appData.professorsList !== null ? search=(<SearchBar professorsList={appData.professorsList} isHome={isHome}/>) : search=(<div></div>)

    return (
        <>
            <div className="navbar">
                <Link to='/' className="navbar-title">
                    <img src={logo} className={'logo'} alt={logo}/>
                </Link>
                {isMobile ? <SearchIcon onClick={() => setMobileSearchHidden(value => !value)} /> : search}
                {/* LOGIN POPUP
                <div className="menu-content">
                    <Button buttonStyle='btn--outline' onClick={handleOpenLoginForm}><h6 style={{color: "white"}}>Accedi/Registrati</h6></Button>
                    {isOpenLoginForm &&
                    <Popup titleText={'Login'} onClose={handleOpenLoginForm}>
                        <Login onChangeUser={onChangeUser}/>
                    </Popup>}
                </div>*/}
                {button}

                {!mobileSearchHidden && isMobile && !isHome ? <div className="navbar-mobile-search">{search}</div> : null}
            </div>
        </>
    );

}

export default Navbar;

