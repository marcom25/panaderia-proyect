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
                <div className='col-sm py-4'>
                    <Card 
                    image={image1} 
                    msg="hola" 
                    // imageClass='card-img-top image accordion-button collapsed'
                    imageDataTarget='#flush-collapseOne'
                    imageAriaControls='flush-collapseOne'
                    bodyClass='card-body bg-lightblue card-content accordion-collapse collapse'
                    bodyId='flush-collapseOne'
                    bodyAriaLabel='flush-headingOne'
                    contentClass='card-title text-center accordion-body'
                    />
                </div>
                <div className='col-sm py-4'>
                    <Card 
                    image={image2} 
                    msg="hola" 
                    // imageClass='card-img-top image accordion-button collapsed' 
                    imageDataTarget='#flush-collapseTwo'
                    imageAriaControls='flush-collapseTwo'
                    bodyClass='card-body bg-lightblue card-content accordion-collapse collapse'
                    bodyId='flush-collapseTwo'
                    bodyAriaLabel='flush-headingTwo'
                    contentClass='card-title text-center accordion-body'
                    />
                </div>
                <div className='col-sm py-4'>
                    <Card 
                    image={image3} 
                    msg="hola" 
                    // imageClass='card-img-top image accordion-button collapsed'
                    imageDataTarget='#flush-collapseThree'
                    imageAriaControls='flush-collapseThree'
                    bodyClass='card-body bg-lightblue card-content accordion-collapse collapse'
                    bodyId='flush-collapseThree'
                    bodyAriaLabel='flush-headingThree'
                    contentClass='card-title text-center accordion-body'
                    />
                </div>
                <div className='col-sm py-4'>
                    <Card 
                    image={image3} 
                    msg="hola" 
                    // imageClass='card-img-top image accordion-button collapsed'
                    imageDataTarget='#flush-collapseFour'
                    imageAriaControls='flush-collapseFour'
                    bodyClass='card-body bg-lightblue card-content accordion-collapse collapse'
                    bodyId='flush-collapseFour'
                    bodyAriaLabel='flush-headingFour'
                    contentClass='card-title text-center accordion-body'
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm p-0 bg-cream'>
                    <Carousel/>
                </div>
            </div>
            <div className='row'>
                <ImgBlock image={image4} textAtributes='col-sm p-0 bg-cream-dark' imgAtributes='col-sm p-0 bg-cream d-flex justify-content-center' />
            </div>
            <div className='row flex-row-reverse'>
                <ImgBlock image={image5} textAtributes='col-sm p-0 bg-cream-dark' imgAtributes='col-sm p-0 bg-cream d-flex justify-content-center'/>
            </div>
            <div className='row padding-collage bg-cream'>
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