import React from 'react';
import './Popup.css'

const Popup = (props) => {
    const {children} = props;
    return (
        <div className='popup-overlay'>
            <div className='popup'>
                {children}
            </div>
        </div>
    );
};

export default Popup;