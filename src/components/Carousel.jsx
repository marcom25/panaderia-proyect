import React from 'react';

const Carousel = () => {
    return ( 
        <div id="carouselExampleControls" classNameName="carousel slide mw-100" data-bs-ride="carousel" data-interval="1500" >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" className="d-block mw-100" alt="first"/>
                </div>
                <div className="carousel-item">
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" className="d-block mw-100" alt="second"/>
                </div>
                <div className="carousel-item">
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" className="d-block mw-100" alt="third"/>
                </div>
            </div>
           
        </div>
    );
}
 
export default Carousel;