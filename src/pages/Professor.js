import React, {useState, useEffect} from 'react';
import ProfessorDetails from "../components/PagesSections/Professor/ProfessorDetails";
import {useParams} from "react-router";
import useProfessor from "../hooks/useProfessor";
import Popup from "../components/Popup/Popup";

function Professor(props) {
    let { endpoint } = useParams();
    console.log("questo è l'end point: ", endpoint);
    let [professor, isLoading] = useProfessor(endpoint);
    const [showPopup, setShowPopup] = useState(false)
    const [isFirst, setIsFirst] = useState(true);
    const {professorList, onChangeProfessor, isHome} = props;

    const showPopupFunction = () => {
        setShowPopup(!showPopup);
        setIsFirst(false);
    };

    const TitlePopup = (props) => {
        const {titleText, onClose} = props;
        return (
            <div className={'title-popup'}>
                <div className={'title-text'}>{titleText}</div>
                <div className={'close-button'} onClick={onClose}>X</div>
            </div>
        )
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isFirst) {
                setShowPopup(true);
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [showPopup]);

    const getContent = () => {
        if(!isLoading){
            return (
                <React.Fragment>
                    {showPopup && <Popup>
                        <div className={'form-content'}>
                            <TitlePopup titleText={'Siamo spiacenti!'} onClose={showPopupFunction}/>
                            <p>Potreste riscontrare errori nella visualizzazione della pagina a causa della manutenzione del server.</p>
                            <p>Ci scusiamo per il disagio.</p>
                        </div>
                    </Popup>}
                    <ProfessorDetails professorList={professorList} onChangeProfessor={onChangeProfessor} isHome={isHome} professor={professor}/>
                </React.Fragment>
            );
        }
    }

    return (
        <div>
            {getContent()}
        </div>
    )

}
export default Professor;