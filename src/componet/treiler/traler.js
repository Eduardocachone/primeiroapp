import React from "react";
import Video from  '../../assets/video.mp4'
import './traler.css'


function Traler(){
    return(
        <div id="traler">
            <div className="content">
                <video controls className="video">
                    <source src={Video}/>
                    seu navegador não posui suporte para video
                </video>
            </div>
                <div id="sinopse">
                    <p className="descripition">
                    Quatro anos após a destruição da Ilha Nublar, os dinossauros agora vivem e caçam ao lado de humanos em todo o mundo. Esse frágil equilíbrio remodela o futuro e deve determinar de uma vez por todas se os seres humanos continuarão sendo a espécie dominante em um planeta que agora compartilham com as criaturas mais temíveis da história.
                    </p>
                    <button className="button">comprar ingresso</button>
                </div>
        </div>
    );
} 

export default Traler;