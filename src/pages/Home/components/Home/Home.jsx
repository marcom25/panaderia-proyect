// IMPORTS DE MODULOS
import React, { useEffect } from "react";
import WOW from "wowjs";
// IMPORTS DE COMPONENTES

import Card from "../Card/Card.jsx";
import ParallaxBg from "../ParallaxBg/ParallaxBg.jsx";
import CarouselHome from "../Carousel/CarouselHome.jsx";
import CollageImages from "../CollageImages/CollageImages.jsx";
import ImgBlock from "../ImgBlock/ImgBlock.jsx";
import { ContainerHome, TitlesHome } from "./Components.js";

// IMPORTS DE CSS
import "../../../Home/components/Home/css/Grid.css";
import "../../../../css/Colors.css";
import "../../../Home/components/CollageImages/css/Collage.css";
import "../../../../css/Fonts.css";
import "../../../AboutUs/components/AboutUs/css/AboutUs.css";
import "../../../Home/components/Carousel/css/Carousel.css";
import "../../../../components/common/Navbar/css/Navbar.css";
import "../../../Products/components/Products/css/Products.css";
import "../../../Home/components/ImgBlock/css/ImgBlock.css";
import "../../../../pages/Login/components/LoginForm/css/LoginForm.css";
import "../../../Home/components/ParallaxBg/css/ParallaxBg.css";
import "../../../../components/common/Sidebar/css/Sidebar.css";
import "../../../Home/components/Card/css/Card.css";
import "../../../Cart/components/CartPage/css/CartPage.css";
import "../../../../components/common/Footer/components/Footer/css/Footer.css";
import "../../../../components/common/LoaderPage/css/LoaderPage.css";

// IMPORTS DE IMAGENES
import image1 from "../../../../images/bakery/prueba1.jpg";
import image2 from "../../../../images/bakery/prueba2.jpg";
import image3 from "../../../../images/bakery/receta3.jpg";
import image4 from "../../../../images/bakery/receta1.jpg";
import image5 from "../../../../images/bakery/receta3.jpg";
import image6 from "../../../../images/bakery/receta4.jpg";

const Home = () => {
  useEffect(() => {
    const wow = new WOW.WOW({});
    wow.init();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="container-xs bg-cream"
      style={{ padding: "0", overflow: "hidden" }}
    >
      <div className="row">
        <div className="col p-0">
          <ParallaxBg />
        </div>
      </div>
      <ContainerHome className="row">
        <TitlesHome
          className="texto text-uppercase font-weight-1k text-center brown-font font-poppins wow slideInUp"
          data-wow-delay="0.5s"
          data-wow-duration="1s"
        >
          ¡Nuevos productos!
        </TitlesHome>
        <div
          className="cards col-md-6 col-lg-4 py-4 wow fadeIn"
          data-wow-delay="1s"
          data-wow-duration="1s"
        >
          <Card
            image={image1}
            msg="Pancakes"
            imageDataTarget="#flush-collapseOne"
            imageAriaControls="flush-collapseOne"
            bodyClass="card-body p-0 bg-cream card-content accordion-collapse collapse"
            bodyId="flush-collapseOne"
            bodyAriaLabel="flush-headingOne"
            contentClass="card-title text-center accordion-body font-bitter"
          />
        </div>
        <div
          className="col-md-6 col-lg-4 py-4 wow fadeIn"
          data-wow-delay="1s"
          data-wow-duration="1s"
        >
          <Card
            image={image2}
            msg="Donuts"
            imageDataTarget="#flush-collapseTwo"
            imageAriaControls="flush-collapseTwo"
            bodyClass="card-body p-0 bg-cream card-content accordion-collapse collapse"
            bodyId="flush-collapseTwo"
            bodyAriaLabel="flush-headingTwo"
            contentClass="card-title text-center accordion-body font-bitter"
          />
        </div>
        <div
          className="cards col-md-6 col-lg-4 py-4 wow fadeIn"
          data-wow-delay="1s"
          data-wow-duration="1s"
        >
          <Card
            image={image1}
            msg="Pancakes"
            imageDataTarget="#flush-collapseOne"
            imageAriaControls="flush-collapseOne"
            bodyClass="card-body p-0 bg-cream card-content accordion-collapse collapse"
            bodyId="flush-collapseOne"
            bodyAriaLabel="flush-headingOne"
            contentClass="card-title text-center accordion-body font-bitter"
          />
        </div>
        <div
          className="cards col-md-6 col-lg-4 py-4 wow fadeIn"
          data-wow-delay="1s"
          data-wow-duration="1s"
        >
          <Card
            image={image1}
            msg="Pancakes"
            imageDataTarget="#flush-collapseOne"
            imageAriaControls="flush-collapseOne"
            bodyClass="card-body p-0 bg-cream card-content accordion-collapse collapse"
            bodyId="flush-collapseOne"
            bodyAriaLabel="flush-headingOne"
            contentClass="card-title text-center accordion-body font-bitter"
          />
        </div>
        <div
          className="cards col-md-6 col-lg-4 py-4 wow fadeIn"
          data-wow-delay="1s"
          data-wow-duration="1s"
        >
          <Card
            image={image1}
            msg="Pancakes"
            imageDataTarget="#flush-collapseOne"
            imageAriaControls="flush-collapseOne"
            bodyClass="card-body p-0 bg-cream card-content accordion-collapse collapse"
            bodyId="flush-collapseOne"
            bodyAriaLabel="flush-headingOne"
            contentClass="card-title text-center accordion-body font-bitter"
          />
        </div>
        <div
          className="cards col-md-6 col-lg-4 py-4 wow fadeIn"
          data-wow-delay="1s"
          data-wow-duration="1s"
        >
          <Card
            image={image1}
            msg="Pancakes"
            imageDataTarget="#flush-collapseOne"
            imageAriaControls="flush-collapseOne"
            bodyClass="card-body p-0 bg-cream card-content accordion-collapse collapse"
            bodyId="flush-collapseOne"
            bodyAriaLabel="flush-headingOne"
            contentClass="card-title text-center accordion-body font-bitter"
          />
        </div>
      </ContainerHome>
      <div className="row">
        <div className="col-sm p-0 bg-cream w-100" style={{width: '100% !important'}}>
          <CarouselHome style={{width: '100% !important'}} />
        </div>
      </div>
      <ContainerHome className="row">
        <div className="bg-cream pb-4">
          <TitlesHome
            className="texto text-uppercase font-weight-1k text-center brown-font font-poppins wow slideInUp"
            data-wow-delay="0.5s"
            data-wow-duration="1s"
            data-wow-offset="1"
          >
            Nuestras recetas
          </TitlesHome>
        </div>

        <div
          className="row bg-cream border-top border-dark px-lg-5 wow fadeInRight"
          data-wow-delay="1s"
          data-wow-duration="2s"
        >
          <ImgBlock
            h1="Masitas Dulces"
            p1="500gr Harina"
            p2="500ml Leche"
            p3="300gr Manteca"
            p4="2 Huevos"
            image={image4}
            textAtributes="col-sm p-0 bg-brown d-flex justify-content-center align-items-center"
            imgAtributes="col-sm p-0 bg-cream d-flex justify-content-center"
          />
        </div>
        <div
          className="row bg-cream flex-row-reverse border-bottom border-dark px-lg-5 wow fadeInLeft"
          data-wow-delay="1s"
          data-wow-duration="2s"
        >
          <ImgBlock
            h1="Facturas"
            p1="800gr Harina"
            p2="500ml Leche"
            p3="300gr Azucar"
            p4="4 Huevos"
            image={image5}
            textAtributes="col-sm p-0 bg-brown d-flex justify-content-center align-items-center"
            imgAtributes="col-sm p-0 bg-cream pt-5 pt-sm-0 d-flex justify-content-center"
          />
        </div>
      </ContainerHome>
      <ContainerHome pt={0} className="row padding-collage">
        <TitlesHome
          className="texto text-uppercase font-weight-1k text-center brown-font font-poppins wow slideInUp"
          data-wow-delay="0.5s"
          data-wow-duration="1s"
        >
          Nuestras delicias
        </TitlesHome>
        <CollageImages className="zoom" />
      </ContainerHome>
    </div>
  );
};

export default Home;
