import React from "react";
import firstImg from "../../../../img/first-about-icon.svg";
import secondImg from "../../../../img/second-about-icon.svg";
import thirdImg from "../../../../img/third-about-icon.svg";

export const aboutItemOne = {
    icon: <img src={firstImg} className={"about-img"} alt={firstImg}/>,
    title: 'Devi scegliere un corso?',
    text: 'Cerca tra i professori e leggi come si sono trovati gli studenti che hanno già frequentato i loro corsi.',
};

export const aboutItemSecond = {
    icon: <img src={secondImg} className={"about-img"} alt={secondImg}/>,
    title: 'Hai concluso un corso?',
    text: 'Aiuta i futuri studenti a scegliere i corsi più adatti a loro raccontando com\'è stata la tua esperienza.',
};

export const aboutItemThird = {
    icon: <img src={thirdImg} className={"about-img"} alt={thirdImg}/>,
    title: 'Curioso su un professore?',
    text: 'Cercalo! Ti bastano pochi click per scoprire tutto di lui, a partire da come espone la materia fino alla valutazione.',
};