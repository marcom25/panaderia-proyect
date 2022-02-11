// IMPORTS DE COMPONENTES
import React from 'react';
import Sidebar from "./Sidebar";
import Navbar from './Navbar';
import Card from "./Card";
import ParallaxBg from './ParallaxBg';
import Carousel from './Carousel';
import Footer from './Footer';
import CollageImages from './CollageImages';
// IMPORTS DE CSS
import "../css/Grid.css";
import "../css/Colors.css";
import "../css/Collage.css";
import "../css/Fonts.css";
// IMPORTS DE IMAGENES
import image1 from "../images/bakery/pancakes.jpg";
import image2 from "../images/bakery/donuts2.jpg";
import image3 from "../images/bakery/pie.jpg"
import ImgBlock from './ImgBlock';

const Grid = () => {
    return ( 
        <div className="container-xs" style={{padding: "0"}}>
            <div className='row'>
                <div className='col-12 p-0'>
                    <Navbar />
                    <Sidebar/>
                </div>
            </div>
            <div className='row'>
                <div className='col p-0'>
                    <ParallaxBg/> 
                </div>
                
            </div>
            <div className='row justify-content-sm-center bg-orange-light'>
                <div className='col-sm m-auto'>
                    <Card image={image1} msg="hola"/>
                </div>
                <div className='col-sm p-0'>
                    <Card image={image2} msg="hola" />
                </div>
                <div className='col-sm p-0'>
                    <Card image={image3} msg="hola" />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm p-0 bg-brown'>
                    <Carousel/>
                </div>
            </div>
            <div className='row bg-brown padding-collage'>
                <CollageImages/>
            </div>
            <div className='row'>
                <ImgBlock textAtributes='col-sm p-0 bg-orange-light' imgAtributes='col-sm p-0 bg-orange-light d-flex justify-content-center' />
            </div>
            <div className='row flex-row-reverse'>
                <ImgBlock textAtributes='col-sm p-0 bg-orange-light' imgAtributes='col-sm p-0 bg-orange-light d-flex justify-content-center'/>
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