import React from "react";
import Cards from "../../componet/cards/cards";
import Footer from "../../componet/footer/footer";
import Header from "../../componet/header/header";
import Traler from "../../componet/treiler/traler";
import './home.css';


function Home(){

    return(
        <>
            <Header/>
            <div id="Banner"></div>
            <Traler/>    
            <Cards/> 
            <Footer/>     
        </>
    );
}

export default Home;