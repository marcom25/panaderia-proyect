// IMPORTS DE MODULOS
import React, { useEffect } from "react";
import WOW from "wowjs";

// IMPORTS DE IMAGENES
import aboutUs from "../images/bakery/aboutUs.jpg";
import brownie from "../images/bakery/prueba1.jpg";
import cake from "../images/bakery/prueba2.jpg";
import pie from "../images/bakery/prueba3.jpg";

const AboutUs = () => {
  useEffect(() => {
    const wow = new WOW.WOW({});
    wow.init();
  }, []);

  return (
    <>
      <section
        className="container-xs bg-cream"
        style={{ padding: "0", overflow: "hidden" }}
      >
        <div className="w-100 bg-cream pt-2 my-5 p-2">
          <h1 className="text-center brown-font font-poppins">Nosotros</h1>
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
            <h2
              className="text-center brown-font pt-3 wow fadeIn font-poppins"
              data-wow-delay="1s"
              data-wow-duration="1s"
            >
              ¡Gracias!
            </h2>
            <div>
              <div
                id="carouselExampleCaptions"
                class="carousel slide carousel-fade m-auto wow fadeIn"
                data-bs-ride="carousel"
                data-wow-delay="2s"
                data-wow-duration="1s"
              >
                <div class="carousel-indicators d-none">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
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
                <div class="carousel-inner pt-lg-4 pb-lg-5 mb-lg-5">
                  <div class="carousel-item active" data-bs-interval="4000">
                    <img src={brownie} class="d-block w-100 card" alt="..." />
                    <div class="carousel-caption carouselDivsTitle m-auto d-none d-md-block">
                      <h1 className="fst-italic bg-brown carouselTitle">
                        Bakery shop
                      </h1>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="4000">
                    <img src={pie} class="d-block w-100 card" alt="pie" />
                    <div class="carousel-caption carouselDivsTitle m-auto d-none d-md-block">
                      <h1 className="fst-italic bg-brown carouselTitle">
                        Bakery shop
                      </h1>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="4000">
                    <img src={cake} class="d-block w-100 card" alt="cake" />
                    <div class="carousel-caption carouselDivsTitle m-auto d-none d-md-block">
                      <h1 className="fst-italic bg-brown carouselTitle">
                        Bakery shop
                      </h1>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev d-none"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next d-none"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
