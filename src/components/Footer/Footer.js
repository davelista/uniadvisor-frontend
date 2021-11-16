import React from 'react'
import styles from './Footer.module.css'
import {
    FaFacebook,
    FaFacebookF,
    FaInstagram,
    FiMail,
    GrFacebookOption, GrInstagram,
    RiFacebookFill,
    RiInstagramLine
} from "react-icons/all";

function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.info}>
                    <a href='https://www.iubenda.com/privacy-policy/250198' target="_blank">
                        Privacy Policy
                    </a>
                    <p>
                        &#169; Copyright uniadvisor.it. <br/> All Rights Reserved.
                    </p>
                </div>

                <div className={styles.socials}>
                    <div className={styles.iconContainer}>
                        <a href="https://www.instagram.com/spotted_polimi/?hl=it" target="_blank">
                            <FaInstagram className={styles.icon}/>
                        </a>
                    </div>
                    <div className={styles.iconContainer}>
                        <a href="https://www.facebook.com/PolimiSpotted/" target="_blank">
                            <GrFacebookOption className={styles.icon}/>
                        </a>
                    </div>
                    <div className={styles.iconContainer}>
                    <a href="mailto:info@uniadvisor.it" target="_blank">
                        <FiMail className={styles.icon}/>
                    </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;