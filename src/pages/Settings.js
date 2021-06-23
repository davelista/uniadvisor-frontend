import React, {useState} from 'react';
import Navbar from "../components/Navbar/Navbar";
import CardContainer from "../components/PagesSections/Settings/CardContainer";
import SettingForm from "../components/PagesSections/Settings/SettingForm";

const Settings = () => {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <Navbar/>
            <CardContainer selected={selected} onChangeSelected={setSelected}/>
            <SettingForm selected={selected}/>
        </>
    );
}

export default Settings;