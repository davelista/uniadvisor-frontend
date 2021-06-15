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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {ClickAwayListener, Grow, MenuList, Paper, Popper} from "@material-ui/core";


const Navbar = (props) => {

    const { isHome = false} = props;

    const appData = useContext(AppContext);

    const [isOpenLoginForm, setOpenLoginForm] = useState(false);
    const isMobile = useMediaQuery(Device.sm);
    const [mobileSearchHidden, setMobileSearchHidden] = useState(true);
    const [isOpenDropdown, setOpenDropdown] = React.useState(null);
    const anchorRef = React.useRef(null);

    const handleOpenLoginForm = () => {
        setOpenLoginForm(!isOpenLoginForm);
    }

    const handleClick = (event) => {
        setOpenDropdown(event.currentTarget);
    };

    const handleToggle = () => {
        setOpenDropdown((prevOpen) => !prevOpen);
    };

    const handleClose = () => {
        setOpenDropdown(null);
    };

    const prevOpen = React.useRef(isOpenDropdown);
    React.useEffect(() => {
        if (prevOpen.current === true && isOpenDropdown === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = isOpenDropdown;
    }, [isOpenDropdown]);

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpenDropdown(false);
        }
    }

    let button;
    appData.user.data === null ? button = (
            <Link to='/login' className="navbar-title">
                {/* <Button buttonStyle='btn--outline'><h6 style={{color: "white"}}>Accedi/Registrati</h6></Button> */}
                <Button buttonStyle='btn--outline'><h6 style={{color: "white"}}>{isMobile ? "Accedi" : "Accedi/Registrati"}</h6></Button>
            </Link>
        ) : button = (<>
            <div ref={anchorRef}
                 aria-controls={isOpenDropdown ? 'menu-list-grow' : undefined}
                 aria-haspopup="true"
                 onClick={handleToggle}
            >{appData.user.data.email}</div>
                <Popper open={isOpenDropdown} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={isOpenDropdown} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose}><Link to='/dashboard'>Profile</Link></MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>

            {/* <Menu
                id="simple-menu"
                anchorEl={isOpenDropdown}
                keepMounted
                open={Boolean(isOpenDropdown)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to='/dashboard'>Profile</Link></MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>*/}
            </>
        )

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

