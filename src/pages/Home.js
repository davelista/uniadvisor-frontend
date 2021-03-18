import React from 'react';
import UniversitySection from "../components/PagesSections/Homepage/University/UniveristyArea";
import AboutArea from "../components/PagesSections/Homepage/About/AboutArea";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/PagesSections/Homepage/HeroSection/HeroSection";

function Home(props) {

    const {professorList, professor, user, isHome} = props;
    return (
        <>
            <div>
                <Navbar user={user} isHome={isHome}/>
                <HeroSection professorList={professorList} professor={professor} isHome={isHome}/>
                <AboutArea/>
                <UniversitySection/>
            </div>

        </>
    );
}

export default Home;