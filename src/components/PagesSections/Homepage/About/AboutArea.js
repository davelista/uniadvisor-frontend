import React from 'react'
import './AboutArea.css'
import AboutItems from "./AboutItems";
import {aboutItemOne, aboutItemSecond, aboutItemThird} from "./AboutData";

function AboutArea() {
    return (
        <>
            <div className={'about-section'}>
                <div className={'about-container'}>
                    <h1>
                        Cos'è <span className={"title-red"}>UNI.</span>advisor?
                    </h1 >

                    <div className={"sub-title-about"}>
                        UniAdvisor è una piattaforma indipendente per la <br/> valutazione di corsi e docenti universitari.
                    </div>


                </div>
                <div className={'about-items-container'}>

                    <AboutItems {...aboutItemOne}/>
                    <AboutItems {...aboutItemSecond}/>
                    <AboutItems {...aboutItemThird}/>
                </div>

            </div>

        </>
    )
}

export default AboutArea;