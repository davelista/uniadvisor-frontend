import React from 'react';
import UniversitySection from "../components/PagesSections/Homepage/University/UniveristyArea";
import AboutArea from "../components/PagesSections/Homepage/About/AboutArea";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/PagesSections/Homepage/HeroSection/HeroSection";

function Home() {

    return (
        <>
            <div>
                <Navbar isHome />
                <HeroSection />

                <AboutArea/>
                <UniversitySection/>
            </div>

        </>
    );
}

export default Home;