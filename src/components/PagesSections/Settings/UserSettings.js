import { useState } from "react";
import withAuth from "../../hoc/withAuth";
import CardContainer from "./CardContainer";
import SettingForm from "./SettingForm";

function UserSettings() {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <CardContainer selected={selected} onChangeSelected={setSelected} />
            <SettingForm selected={selected} />
        </>
    );
}

export default withAuth(UserSettings);
