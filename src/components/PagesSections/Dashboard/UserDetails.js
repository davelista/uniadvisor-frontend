import React from 'react';
import imgUser from "../../../img/user.jpg";
import './UserDetails.css'
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import EmailIcon from "@material-ui/icons/Email";
import {BiCalendar, FaBirthdayCake} from "react-icons/all";

const UserDetails = (props) => {
    const {user} = props;
    const userImg = "Not Found Image";

    let image;
    userImg === "Not Found Image" ? image = (<img src={imgUser} className={"user-img"} alt={imgUser}/>) : image = (<img src={userImg} className={"user-img"} alt={userImg}/>)


    return (
        <>
            <div className={"user-introduction"}>
                <p>Ciao {user}, benvenuto sul tuo profilo</p>
            <p>Qui puoi visualizare tutti i tuoi dati e le tue recensioni</p>
            </div>
            <div className={"user-card"}>
                {image}
                <div className="user-detail">
                    <div className="user-title">
                        {/*{user.name}*/}Nome Cognome
                        {/*{professor.finalEvaluation.filter(x => x.title === "Overall")
                            .map((x) => {
                                return (
                                    <div className={"bubble-rating"}>
                                        <Rating name="half-rating-read"
                                                defaultValue={x.value}
                                                precision={0.5}
                                                readOnly
                                                emptyIcon={<FiberManualRecordOutlinedIcon fontSize="large" style={{fill: "#e53a1e"}}/>}
                                                icon={<FiberManualRecordIcon fontSize="large" style={{fill: "#e53a1e"}}/>}
                                        />
                                    </div>
                                )
                            })}*/}
                    </div>
                    <div className={"user-info-row"}><AccountBalanceIcon fontSize="small" style={{ marginRight: "1%"}}/>università</div>
                    <div className={"user-info-row"}><FaBirthdayCake fontSize="small" style={{marginRight: "1%"}}/><p>data di nascita</p></div>
                    <div className={"user-info-row"}><EmailIcon fontSize="small" style={{marginRight: "1%"}}/><p>email</p></div>
                    <div className={"user-info-row"}><BiCalendar fontSize="small" style={{marginRight: "1%"}}/><p>data di iscrizione</p></div>

                    {/*<div className="professor-university-section">
                        <div className="professor-info">
                            {professor.university.map((x) => {
                                return <div className={"professor-info-row"}><AccountBalanceIcon fontSize="small" style={{fill: "#e53a1e", marginRight: "3%"}}/><h3 style={{color: "#e53a1e"}}>{x.name}</h3></div>
                            })}
                            {professor.university.map((x) => {
                                return <div className={"professor-info-row"}><EmailIcon fontSize="small" style={{marginRight: "3%"}}/><p>{professor.email}</p></div>
                            })}
                            {professor.university.map((x) => {
                                return <div className={"professor-info-row"}><WorkIcon fontSize="small" style={{marginRight: "3%"}}/><p>{x.typeContract}</p> </div>
                            })}
                            {professor.university.map((x) => {
                                return <div className={"professor-info-row"}><BusinessIcon fontSize="small" style={{marginRight: "3%"}}/><p>{x.department}</p> </div>
                            })}
                        </div>
                        <ProfessorEvaluation finalEvaluation={professor.finalEvaluation}/>
                    </div>*/}
                </div>
            </div>
        </>
    );
}

export default UserDetails;