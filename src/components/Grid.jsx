import React from 'react';
import Sidebar from "./Sidebar";
import Navbar from './Navbar';
import Card from "./Card";
import ParallaxBg from './ParallaxBg';
// CSS 
import "../css/Grid.css"
import "../css/Colors.css"
// IMPORTS DE IMAGENES
import image1 from "../images/donuts.jpg";
import image2 from "../images/brownie.jpg";
import image3 from "../images/medialunas.jpg"

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
                    <Card image={image1} counter="1"/>
                </div>
                <div className='col-sm p-0'>
                    <Card image={image2} counter="2"/>
                </div>
                <div className='col-sm p-0'>
                    <Card image={image3} counter="3"/>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm p-0'>
                    <div className=''>
                        <p>
                            TEXTO O IMAGENES
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Grid;