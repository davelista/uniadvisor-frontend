import React from 'react'
import './Footer.css'
import {FiMail, RiFacebookFill, RiInstagramLine} from "react-icons/all";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="info-footer">
                    <a href='https://www.iubenda.com/privacy-policy/250198' target="_blank" className={"link-footer"}>
                        Privacy Policy
                    </a>
                    <div className="text-footer">
                        &#169; Copyright uniadvisor.it. <br/> All Rights Reserved.
                    </div>
                </div>

                <div className="socials-footer">
                    <RiInstagramLine class={'social-icon social-icon-bg'}/>
                    <RiFacebookFill class={'social-icon social-icon-bg'}/>
                    <FiMail class={'social-icon-bg social-icon'}/>
                </div>
            </div>
        </>
    )
}

export default Footer;