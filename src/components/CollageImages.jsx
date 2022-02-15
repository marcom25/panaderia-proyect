// IMPORTS DE MODULOS 
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
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
        Aos.init({duration: 4000});
    }, []);

    return (  
        <>
               
            <div className="col-md-4 col-12 p-3 p-md-2" data-aos="zoom-in">
                <img src={brownie} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2" data-aos="zoom-in">
                <img src={cakeTres} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2" data-aos="zoom-in">
                <img src={macaroons} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2" data-aos="zoom-in">
                <img src={cakeUno} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2" data-aos="zoom-in">
                <img src={bakeryUno} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2" data-aos="zoom-in">
                <img src={croissants} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2" data-aos="zoom-in">
                <img src={cakeDos} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2" data-aos="zoom-in">
                <img src={bakeryDos} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2" data-aos="zoom-in">
                <img src={cheesecake} alt="muffins" className="w-100 h-100"/>
            </div>
        
        </>

    );
}
 
export default CollageImages;