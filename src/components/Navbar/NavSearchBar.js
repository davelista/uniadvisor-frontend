import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from "../../img/logo.svg";
import './Navbar.css'
import '../Buttons/Button.css';
import {Button} from "../Buttons/Button";
import Popup from "../Popup/Popup";
import {ApiMail} from "../../api";
import SearchBar from "../SearchBar/SearchBar";

const NavSearchBar = (props) => {
    const {professorList, onChangeProfessor} = props;
    return (
        <>
            <div className="navbar">
                <Link to='/' className="navbar-title">
                    <img src={logo} className={'logo'} alt={logo}/>
                </Link>
                <SearchBar professorList={professorList} onChangeProfessor={onChangeProfessor} isHome={false}/>
                <Link to='/login' className="navbar-title">
                <div className="menu-content">
                    <Button buttonStyle='btn--outline'><h6 style={{color: "white"}}>Accedi/Registrati</h6></Button>
                </div>
                </Link>
            </div>
        </>
    );

}

export default NavSearchBar;

