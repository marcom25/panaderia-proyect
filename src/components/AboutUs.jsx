import React from 'react';
import Navbar from '../utils/Navbar';
import Sidebar from '../utils/Sidebar';
import Footer from '../utils/Footer';
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
const AboutUs = () => {
    return ( 
        <>
            <div className="container-xs bg-cream" style={{padding: "0", overflow: 'hidden'}}>
            <div className='row'>
                <div className='col-12 p-0 bg-pink' style={{overflow: 'hidden'}}>
                    <Navbar />
                    <Sidebar/>
                </div>
            </div>
            
            <div className='row'>
                <div className='col-sm p-0 '>
                    <Footer/>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default AboutUs;