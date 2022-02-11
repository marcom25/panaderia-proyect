// IMPORTS DE COMPONENTES
import React from 'react';
import Sidebar from "./Sidebar";
import Navbar from './Navbar';
import Card from "./Card";
import ParallaxBg from './ParallaxBg';
import Carousel from './Carousel';
import Footer from './Footer';
import CollageImages from './CollageImages';
import ImgBlock from './ImgBlock';
// IMPORTS DE CSS
import "../css/Grid.css";
import "../css/Colors.css";
import "../css/Collage.css";
import "../css/Fonts.css";
// IMPORTS DE IMAGENES
import image1 from "../images/bakery/pancakes.jpg";
import image2 from "../images/bakery/donuts2.jpg";
import image3 from "../images/bakery/pie.jpg";
import image4 from "../images/bakery/bakery.jpg";
import image5 from "../images/bakery/bakery2.jpg";

const Grid = () => {
    return ( 
        <div className="container-xs" style={{padding: "0"}}>
            <div className='row'>
                <div className='col-12 p-0 bg-pink'>
                    <Navbar />
                    <Sidebar/>
                </div>
            </div>
            <div className='row'>
                <div className='col p-0'>
                    <ParallaxBg/> 
                </div>
                
            </div>
            <div className='row justify-content-sm-center bg-cream py-4'>
            <h2 className="text-uppercase text-center brown-font pt-5">¡Nuevos productos!</h2>
                <div className='col-sm py-4'>
                    <Card image={image1} msg="hola"/>
                </div>
                <div className='col-sm py-4'>
                    <Card image={image2} msg="hola" />
                </div>
                <div className='col-sm py-4'>
                    <Card image={image3} msg="hola" />
                </div>
                <div className='col-sm py-4'>
                    <Card image={image3} msg="hola" />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm p-0 bg-cream'>
                    <Carousel/>
                </div>
            </div>
            <div className='row pt-5 bg-cream border-top border-secondary'>
                <h2 className="text-uppercase text-center brown-font py-5">Nuestras recetas</h2>
                <ImgBlock image={image4} textAtributes='col-sm p-0 bg-cream-dark border-top border-secondary' imgAtributes='col-sm p-0 bg-cream d-flex justify-content-center border-top border-secondary' />
            </div>
            <div className='row flex-row-reverse border-bottom border-secondary'>
                <ImgBlock image={image5} textAtributes='col-sm p-0 bg-cream-dark' imgAtributes='col-sm p-0 bg-cream d-flex justify-content-center'/>
            </div>
            <div className='row padding-collage bg-cream py-5'>
                <h2 className="text-uppercase text-center pt-5 pb-4 brown-font">Nuestras delicias</h2>
                <CollageImages/>
            </div>
            <div className='row'>
                <div className='col-sm p-0'>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
 
export default Grid;