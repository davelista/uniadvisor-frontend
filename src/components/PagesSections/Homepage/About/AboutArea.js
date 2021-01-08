import React from 'react'
import './AboutArea.css'
import AboutItems from "./AboutItems";
import {aboutItemOne, aboutItemSecond, aboutItemThird} from "./AboutData";

function AboutArea() {
    return (
        <>
            <div className={'about-section'}>
                <div className={'about-container'}>
                    <h1 className={"white"} >
                        Cos'è UniAdvisor?
                    </h1 >

                    <h4 className={"white"}>
                        UniAdvisor è una piattaforma indipendente per la <br/> valutazione di corsi e docenti universitari.
                    </h4>


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