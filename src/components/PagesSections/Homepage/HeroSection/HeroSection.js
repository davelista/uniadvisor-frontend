import React from 'react';
import './HeroSection.css'
import SearchBar from "../../../SearchBar/SearchBar";
import heroImg from "../../../../img/hero-img.png";


const HeroSection = (props) => {
    const {professorList} = props;

    return (
        <>
            <div className={"hero-section"}>
                <div className={"search-section"}>
                    <div className={"title-hero"}>
                        <h2>Scopri com'è <br/> il tuo professore!</h2>
                    </div>
                    <SearchBar professorList={professorList} />
                </div>
                <img src={heroImg} className={'hero-image'} alt={heroImg}/>
            </div>

        </>
    )
}


export default HeroSection;