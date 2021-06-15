import React, { useContext } from 'react';
import './HeroSection.css'
import SearchBar from "../../../SearchBar/SearchBar";
import heroImg from "../../../../img/hero-img.png";
import { AppContext } from '../../../../context/AppContext';


const HeroSection = () => {
    const appData = useContext(AppContext);

    return (
        <>
            <div className={"hero-section"}>
                <div className={"search-section"}>
                    <div className={"title-hero"}>
                        <h2>Scopri com'è <br/> il tuo professore!</h2>
                    </div>
                    {appData.professorsList !== null ?
                        <SearchBar professorsList={appData.professorsList}/>
                        : <div> </div>
                    }
                    {/*console.log(appData.universitiesList)*/}

                </div>
                <img src={heroImg} className={'hero-image'} alt={heroImg}/>
            </div>

        </>
    )
}


export default HeroSection;