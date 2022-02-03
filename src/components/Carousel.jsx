import React from 'react';

const Carousel = () => {
    return ( 
        <div id="carouselExampleControls" class="carousel slide mw-100 h-100" data-bs-ride="carousel" data-interval="1500" >
            <div class="carousel-inner w-100 h-75 min-vw-100 vw-100">
                <div class="carousel-item active w-100 ">
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" class="d-block w-100" alt="first"/>
                </div>
                <div class="carousel-item">
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" class="d-block w-100" alt="second"/>
                </div>
                <div class="carousel-item">
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" class="d-block w-100" alt="third"/>
                </div>
            </div>
            {/* Dps decidir si queremos los botones o no */}
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}
        </div>
    );
}
 
export default Carousel;