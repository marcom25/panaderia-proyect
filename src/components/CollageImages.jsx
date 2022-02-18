// IMPORTS DE MODULOS 
import React, { useEffect } from 'react';
import WOW from 'wowjs';
// IMPORTANDO IMAGENES
import bakeryUno from "../images/bakery/bakery.jpg";
import bakeryDos from "../images/bakery/bakery2.jpg";
import brownie from "../images/bakery/brownie.jpg";
import cakeUno from "../images/bakery/cake.jpg";
import cakeDos from "../images/bakery/cake2.jpg";
import cakeTres from "../images/bakery/cake3.jpg";
import cheesecake from "../images/bakery/cheesecake.jpg";
import croissants from "../images/bakery/croissants.jpg";
import macaroons from "../images/bakery/macaroons.jpg";


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