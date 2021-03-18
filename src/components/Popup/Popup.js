import React from 'react';
import './Popup.css'
import {GrClose} from "react-icons/all";

const Popup = (props) => {

    const {titleText, onClose} = props;

    const {children} = props;
    return (
        <div className='popup-overlay'>
            <div className='popup'>
                <div className={'title-popup'}>
                    <div> </div>
                    <div className={"title-red"}>{titleText}</div>
                    <div className={'close-button'} onClick={onClose}><GrClose size={30}/></div>
                </div>
                <div className={'popup-container'}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Popup;