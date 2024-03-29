// IMPORTS DE MODULOS
import React, { useEffect } from "react";
import WOW from "wowjs";
import { TitleAboutUs, TitleCarousel } from "./Components";
import Carousel from "react-bootstrap/Carousel";

// IMPORTS DE IMAGENES
import aboutUs from "../../../../images/bakery/aboutUs.jpg";
import brownie from "../../../../images/bakery/prueba1.jpg";
import cake from "../../../../images/bakery/prueba2.jpg";
import pie from "../../../../images/bakery/prueba3.jpg";

const AboutUs = () => {
  useEffect(() => {
    const wow = new WOW.WOW({});
    wow.init();

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        className="container-xs bg-cream"
        style={{ padding: "0", overflow: "hidden" }}
      >
        <div className="w-100 bg-cream pt-2 my-5 p-2">
          <TitleAboutUs className="brown-font font-poppins">
            Nosotros
          </TitleAboutUs>
          <hr className="w-50 m-auto" />
          <div className="d-xl-flex w-100 pt-5 mt-5">
            <div
              className="w-100 p-lg-4 wow fadeIn"
              data-wow-delay="1s"
              data-wow-duration="1s"
            >
              <img
                src={aboutUs}
                alt="bakeryshop"
                className="w-100 card border-4"
              />
            </div>
            <div
              className="pt-5 mt-4 pt-xl-0 mt-xl-0 text-start ps-2 p-lg-4 w-100"
              data-wow-delay="1s"
              data-wow-duration="1s"
            >
              <h5 className="text-start brown-font pb-2 font-bitter">
                ¡Nos destacamos por nuestra excelencia!
              </h5>
              <p
                className="parrafos wow fadeIn font-poppins"
                data-wow-delay="1s"
                data-wow-duration="1s"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                perferendis aliquam doloremque earum optio aperiam labore sit?
                Ab nisi at repudiandae saepe nesciunt dolor vitae quis, sed
                distinctio inventore adipisci.
              </p>
              <h5 className="text-start brown-font pt-4 pb-2 font-bitter">
                ¡Nuestro compromiso es brindarte una experiencia única!
              </h5>

              <p
                className="parrafos wow fadeIn font-poppins"
                data-wow-delay="1s"
                data-wow-duration="1s"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                perferendis aliquam doloremque earum optio aperiam labore sit?
                Ab nisi at repudiandae saepe nesciunt dolor vitae quis, sed
                distinctio inventore adipisci Ab nisi at repudiandae saepe
                nesciunt dolor vitae quis, sed distinctio inventore adipisci Ab
                nisi at repudiandae saepe nesciunt dolor vitae quis, sed
                distinctio inventore adipisci..
              </p>
              <h5 className="text-start brown-font pt-4 pb-2 font-bitter">
                ¡Siempre te vamos a brindar nuestro servicio de la mejor manera!
              </h5>
              <p
                className="parrafos wow fadeIn font-poppins"
                data-wow-delay="1s"
                data-wow-duration="1s"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                perferendis aliquam doloremque earum optio aperiam labore sit?
                Ab nisi at repudiandae saepe nesciunt dolor vitae quis, sed
                distinctio inventore adipisci Ab nisi at repudiandae saepe
                nesciunt dolor vitae quis, sed distinctio inventore adipisci.
              </p>
            </div>
          </div>
          <div className="py-5 carousel m-auto">
            <TitleCarousel
              className="brown-font wow fadeIn font-poppins"
              data-wow-delay="1s"
              data-wow-duration="1s"
            >
              ¡Gracias!
            </TitleCarousel>

            <Carousel
              fade={true}
              controls={false}
              indicators={false}
              pause={true}
              className="carousel wow fadeIn"
              data-wow-delay="2s"
              data-wow-duration="1s"
            >
              <Carousel.Item interval={3000}>
                <div className="card">
                  <img
                    className="d-block w-100 blur"
                    src={brownie}
                    alt="brownie"
                    blurRadius={5}
                  />
                </div>
                <Carousel.Caption>
                  <h3 className="fst-italic bg-brown carouselTitle">
                    Bakery Shop
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <div className="card">
                  <img
                    className="d-block w-100 blur"
                    src={pie}
                    alt="pie"
                    blurRadius={5}
                  />
                </div>

                <Carousel.Caption>
                  <h3 className="fst-italic bg-brown carouselTitle">
                    Bakery Shop
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <div className="card">
                  <img
                    className="d-block w-100 blur"
                    src={cake}
                    alt="cake"
                    blurRadius={5}
                  />
                </div>

                <Carousel.Caption>
                  <h3 className="fst-italic bg-brown carouselTitle">
                    Bakery Shop
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            {/* <div>
              <div
                id="carouselExampleCaptions"
                className="carousel slide carousel-fade m-auto wow fadeIn"
                data-bs-ride="carousel"
                data-wow-delay="2s"
                data-wow-duration="1s"
              >
                <div className="carousel-indicators d-none">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner pt-lg-4 pb-lg-5 mb-lg-5">
                  <div className="carousel-item active" data-bs-interval="4000">
                    <img src={brownie} className="d-block w-100 card" alt="..." />
                    <div className="carousel-caption carouselDivsTitle m-auto d-none d-md-block">
                      <h1 className="fst-italic bg-brown carouselTitle">
                        Bakery shop
                      </h1>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="4000">
                    <img src={pie} className="d-block w-100 card" alt="pie" />
                    <div className="carousel-caption carouselDivsTitle m-auto d-none d-md-block">
                      <h1 className="fst-italic bg-brown carouselTitle">
                        Bakery shop
                      </h1>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="4000">
                    <img src={cake} className="d-block w-100 card" alt="cake" />
                    <div className="carousel-caption carouselDivsTitle m-auto d-none d-md-block">
                      <h1 className="fst-italic bg-brown carouselTitle">
                        Bakery shop
                      </h1>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev d-none"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next d-none"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
