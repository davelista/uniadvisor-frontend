import React, {useState} from 'react';
import Navbar from "../components/Navbar/Navbar";
import ChangePswForm from "../components/PagesSections/Settings/ChangePswForm";

const Settings = () => {
    const [showChangePsw, setShowChangePsw] = useState(false);
    
    const handleOpen = () => {
        setShowChangePsw(!showChangePsw);
    }

    let changePswForm = (showChangePsw === true ? <ChangePswForm/> : <div></div>);

    return (
        <>
            <Navbar/>
            <div>
                Download dati
            </div>
            <div>
                Elimina account
            </div>
            <div onClick={handleOpen}>
                Cambia password

            </div>
            {changePswForm}
        </>
    );
}

export default Settings;