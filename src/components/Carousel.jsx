import React from 'react';

import "../css/Colors.css";
import "../css/Fonts.css";
import "../css/Carousel.css";

import image1 from "../images/bakery/pie.jpg";
import image2 from "../images/bakery/muffin.jpg";
import image3 from "../images/bakery/lemonpie.jpg";




const Carousel = () => {

    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner mt-5 mb-5 ">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100 imagen" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="title font-yellowtail" >First slide label</h1>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100 imagen" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1  className="title font-yellowtail" >Second slide label</h1>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={image3} className="d-block w-100 imagen" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1  className="title font-yellowtail" >Third slide label</h1>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
    
}
 
export default Carousel;