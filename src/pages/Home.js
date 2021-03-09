import React from 'react';
import UniversitySection from "../components/PagesSections/Homepage/University/UniveristyArea";
import AboutArea from "../components/PagesSections/Homepage/About/AboutArea";
import Navbar from "../components/Navbar/Navbar";
import Navbar2 from "../components/Navbar/Navbar-bk";
import Footer from "../components/PagesSections/Homepage/Footer";
import HeroSection from "../components/PagesSections/Homepage/HeroSection/HeroSection";

function Home(props) {

    const {professorList, onChangeProfessor, professor} = props;
    return (
        <>
            <div>
                <Navbar/>
                <HeroSection professorList={professorList} onChangeProfessor={onChangeProfessor} professor={professor}/>
                <AboutArea/>
                <UniversitySection/>
                <Footer/>
            </div>

        </>
    );
}

export default Home;