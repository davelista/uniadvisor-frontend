import React from "react";
import imgUser from "../../../img/user.jpg";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import EmailIcon from "@material-ui/icons/Email";
import { BiCalendar, FaBirthdayCake } from "react-icons/all";
import styles from "./UserDashboard.module.css";

const UserDetails = (props) => {
    const { user } = props;
    const userImg = "Not Found Image";

    let image;
    userImg === "Not Found Image"
        ? (image = <img src={imgUser} className={"user-img"} alt={imgUser} />)
        : (image = <img src={userImg} className={"user-img"} alt={userImg} />);

    return (
        <>
            <div className={styles.welcomeSection}>
                <p className={styles.welcomeHeading}>Ciao {user.name}, benvenuto sul tuo profilo</p>
                <p className={styles.welcomeSubheading}>
                    Qui puoi visualizare tutte le tue recensioni e consultare i tuoi dati personali.
                </p>

                <div className={styles.welcomeDetailsSection}>
                    {image}
                    <div className={styles.userDetailsSection}>
                        <p className={styles.userName}>
                            {user.name} {user.surname}
                        </p>
                        <div className={styles.userDetail}>
                            <AccountBalanceIcon fontSize="small" style={{ marginRight: "1%" }} />
                            {user.university}
                        </div>
                        <div className={styles.userDetail}>
                            <FaBirthdayCake fontSize="small" style={{ marginRight: "1%" }} />
                            <p>Data di nascita</p>
                        </div>
                        <div className={styles.userDetail}>
                            <EmailIcon fontSize="small" style={{ marginRight: "1%" }} />
                            <p>{user.email}</p>
                        </div>
                        <div className={styles.userDetail}>
                            <BiCalendar fontSize="small" style={{ marginRight: "1%" }} />
                            <p>{user.uniadvisor}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;
