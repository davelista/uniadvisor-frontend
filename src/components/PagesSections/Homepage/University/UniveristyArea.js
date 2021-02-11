import React from 'react'
import './UniversityArea.css'
import imgPolimi from "../../../../img/polimi.jpg";
import imgBocconi from "../../../../img/bocconi.jpg";
import imgCattolica from "../../../../img/cattolica.jpg";
import imgPolito from "../../../../img/polito.jpg";
import imgSapienza from "../../../../img/sapienza.jpg";
import imgStatale from "../../../../img/statale.jpg";
import SearchBar from "../../../SearchBar/SearchBar";


function UniversitySection() {

    return (
        <>
            <div className="uni-container">
                <div className="uni-title">
                    <h1>Le Università</h1>
                    {/*da inserire university searchbar*/}
                </div>

                Verifica che la tua universitá sia tra quelle disponibili.
                <div className="wrap">
                    <div className="item-wrap">
                        <img src={imgPolimi} className={'image'} alt={imgPolimi}/>
                        <div className="middle">
                            <div className="cards-overlay">Politecnico di  <br/> Milano</div>
                        </div>
                    </div>

                    <div className="item-wrap item-muted">
                        <img src={imgBocconi} className={'image'} alt={imgBocconi}/>
                        <div className="middle">
                            <div className="cards-overlay">COMING SOON <hr/> Università Bocconi</div>
                        </div>
                    </div>
                    <div className="item-wrap item-muted">
                        <img src={imgCattolica} className={'image'} alt={imgCattolica}/>
                        <div className="middle">
                            <div className="cards-overlay">COMING SOON <hr/>  Università Cattolica del Sacro Cuore</div>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <div className="item-wrap item-muted">
                        <img src={imgStatale} className={'image'} alt={imgStatale}/>
                        <div className="middle">
                            <div className="cards-overlay">COMING SOON <hr/> Università degli studi di Milano Statale</div>
                        </div>
                    </div>
                    <div className="item-wrap item-muted">
                        <img src={imgPolito} className={'image'} alt={imgPolito}/>
                        <div className="middle">
                            <div className="cards-overlay">COMING SOON <hr/> Politecnico di  <br/>Torino</div>
                        </div>
                    </div>
                    <div className="item-wrap item-muted">
                        <img src={imgSapienza} className={'image'} alt={imgSapienza}/>
                        <div className="middle">
                            <div className="cards-overlay">COMING SOON <hr/> La Sapienza</div>
                        </div>
                    </div>
                </div>


            </div>
        </>
)
}

export default UniversitySection;