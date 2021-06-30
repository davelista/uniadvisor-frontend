import React from 'react'
import './Footer.css'
import {FiMail, RiFacebookFill, RiInstagramLine} from "react-icons/all";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="info-footer">
                    <a href='https://www.iubenda.com/privacy-policy/250198' target="_blank" className={"link-footer"}>
                        Privacy Policy
                    </a>
                    <div className="text-footer">
                        &#169; Copyright uniadvisor.it. All Rights Reserved.
                    </div>
                </div>

                <div className="socials-footer">
                    <a href="https://www.instagram.com/spotted_polimi/?hl=it" target="_blank">
                        <RiInstagramLine class={'social-icon social-icon-bg'}/>
                    </a>
                    <a href="https://www.facebook.com/PolimiSpotted/" target="_blank">
                        <RiFacebookFill class={'social-icon social-icon-bg'}/>
                    </a>
                    <a href="mailto:info@uniadvisor.it" target="_blank">
                        <FiMail class={'social-icon-bg social-icon'}/>
                    </a>

                </div>
            </div>
        </>
    )
}

export default Footer;