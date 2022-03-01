// IMPORTS DE MODULOS 
import React, { useEffect } from 'react';
import WOW from 'wowjs';
// IMPORTANDO IMAGENES
import bakeryUno from "../images/bakery/collage1.jpg";
import bakeryDos from "../images/bakery/collage2.jpg";
import brownie from "../images/bakery/collage3.jpg";
import cakeUno from "../images/bakery/collage4.jpg";
import cakeDos from "../images/bakery/collage5.jpg";
import cakeTres from "../images/bakery/collage6.jpg";
import cheesecake from "../images/bakery/collage7.jpg";
import croissants from "../images/bakery/collage8.jpg";
import macaroons from "../images/bakery/collage9.jpg";


const CollageImages = () => {
    useEffect(() => {
        const wow = new WOW.WOW({});
      wow.init();
    }, []);

    return (  
        <>   
            <div className="col-md-4 col-12 p-3 p-md-2 wow fadeIn" data-wow-delay= '1s' data-wow-duration="1s" >
                <img src={brownie} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2 wow fadeIn" data-wow-delay= '1s' data-wow-duration="1s">
                <img src={cakeTres} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2 wow fadeIn" data-wow-delay= '1s' data-wow-duration="1s">
                <img src={macaroons} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2 wow fadeIn" data-wow-delay= '1.1s' data-wow-duration="1s">
                <img src={cakeUno} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2 wow fadeIn" data-wow-delay= '1.1s' data-wow-duration="1s">
                <img src={bakeryUno} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2 wow fadeIn" data-wow-delay= '1.1s' data-wow-duration="1s">
                <img src={croissants} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2 wow fadeIn" data-wow-delay= '1.2s' data-wow-duration="1s">
                <img src={cakeDos} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2 wow fadeIn" data-wow-delay= '1.2s' data-wow-duration="1s">
                <img src={bakeryDos} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2 wow fadeIn" data-wow-delay= '1.2s' data-wow-duration="1s">
                <img src={cheesecake} alt="muffins " className="w-100 h-100"/>
            </div>
        </>

    );
}
 
export default CollageImages;