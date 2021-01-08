import React from 'react';
import './HeroSection.css'
import SearchBar from "../../../SearchBar/SearchBar";
import heroImg from "../../../../img/hero-img1.svg";


const HeroSection = (props) => {
    const {professorList, onChangeProfessor, isHome} = props;


    return (
        <>
            <div className={"hero-section"}>
                <div className={"search-section"}>
                    <div className={"title-hero"}>
                        <h2>Scopri com'è il tuo professore!</h2>
                    </div>
                    <SearchBar professorList={professorList} isHome={isHome} onChangeProfessor={onChangeProfessor}/>
                </div>
                <img src={heroImg} className={'hero-image'} alt={heroImg}/>
            </div>

        </>
    )
}


export default HeroSection;