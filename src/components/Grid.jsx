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
import image6 from "../images/bakery/brownie.jpg";

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
            <div className='row justify-content-sm-center bg-cream py-4 px-lg-5'>
                <h2 className="text-uppercase text-center brown-font pt-5 font-poppins">¡Nuevos productos!</h2>
                <div className='col-md-6 py-4'>
                    <Card 
                    image={image1} 
                    msg="Pancakes" 
                    // imageClass='card-img-top image accordion-button collapsed'
                    imageDataTarget='#flush-collapseOne'
                    imageAriaControls='flush-collapseOne'
                    bodyClass='card-body p-0 bg-lightblue card-content accordion-collapse collapse'
                    bodyId='flush-collapseOne'
                    bodyAriaLabel='flush-headingOne'
                    contentClass='card-title text-center accordion-body font-bitter'
                    />
                </div>
                <div className='col-md-6 py-4'>
                    <Card 
                    image={image2} 
                    msg="Donuts" 
                    // imageClass='card-img-top image accordion-button collapsed' 
                    imageDataTarget='#flush-collapseTwo'
                    imageAriaControls='flush-collapseTwo'
                    bodyClass='card-body p-0 bg-lightblue card-content accordion-collapse collapse'
                    bodyId='flush-collapseTwo'
                    bodyAriaLabel='flush-headingTwo'
                    contentClass='card-title text-center accordion-body font-bitter'
                    />
                </div>
                <div className='col-md-6 py-4'>
                    <Card 
                    image={image3} 
                    msg="Torta" 
                    // imageClass='card-img-top image accordion-button collapsed'
                    imageDataTarget='#flush-collapseThree'
                    imageAriaControls='flush-collapseThree'
                    bodyClass='card-body p-0 bg-lightblue card-content accordion-collapse collapse'
                    bodyId='flush-collapseThree'
                    bodyAriaLabel='flush-headingThree'
                    contentClass='card-title text-center accordion-body font-bitter'
                    />
                </div>
                <div className='col-md-6 py-4'>
                    <Card 
                    image={image6} 
                    msg="Brownie" 
                    // imageClass='card-img-top image accordion-button collapsed'
                    imageDataTarget='#flush-collapseFour'
                    imageAriaControls='flush-collapseFour'
                    bodyClass='card-body p-0 bg-lightblue card-content accordion-collapse collapse'
                    bodyId='flush-collapseFour'
                    bodyAriaLabel='flush-headingFour'
                    contentClass='card-title text-center accordion-body font-bitter'
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm p-0 bg-cream'>
                    <Carousel/>
                </div>
            </div>
            <div className="bg-cream pt-5 pb-4">
                <h2 className="text-uppercase text-center brown-font pt-5 font-poppins">Nuestras recetas</h2>
            </div>
            <div className='row bg-cream border-top border-dark px-lg-5'>
                <ImgBlock
                h1='Masitas Dulces'
                p1='500gr Harina'
                p2='500ml Leche'
                p3='300gr Manteca'
                p4='2 Huevos'
                image={image4} 
                textAtributes='col-sm p-0 bg-cream-dark' 
                imgAtributes='col-sm p-0 bg-cream d-flex justify-content-center' />
            </div>
            <div className='row bg-cream flex-row-reverse border-bottom border-dark px-lg-5'>
                <ImgBlock 
                h1='Chupame La Pichula'
                p1='1231'
                p2='123131'
                p3=' jdndawd'
                p4='ponele texto mamador de pitos'
                image={image5} 
                textAtributes='col-sm p-0 bg-cream-dark' 
                imgAtributes='col-sm p-0 bg-cream pt-5 pt-sm-0 d-flex justify-content-center'/>
            </div>
            <div className='row padding-collage bg-cream py-5'>
                <h2 className="text-uppercase text-center pt-5 pb-4 brown-font font-poppins">Nuestras delicias</h2>
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