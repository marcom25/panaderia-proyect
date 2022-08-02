// IMPORTANDO MODULOS
import React, { useEffect } from "react";
import WOW from "wowjs";
import { Link } from "react-router-dom";
// IMPORTANDO ICONOS
import { SiGmail } from "react-icons/si";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

// IMPORTANDO IMAGENES
import logo from "../../../../../images/logos/titulo-mas-cercano.svg";

import "./css/Footer.css";

const Footer = () => {
  useEffect(() => {
    const wow = new WOW.WOW({});
    wow.init();
  }, []);

  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="page-footer font-small blue pt-2 bg-pink brown-font">
        <div className="container-fluid text-center text-md-left">
          {/* <!-- Grid row --> */}
          <div className="row mt-5">
            {/* <!-- Grid column --> */}
            <div className="col-md-8 m-auto mt-md-0 mt-3">
              <img
                src={logo}
                alt="logo"
                className="m-auto d-md-none w-75 w-md-50"
              />
              {/* <!-- Content --> */}
              <hr className="clearfix w-50 m-auto d-md-none mt-5 mb-2" />
              <h5
                className="text-uppercase mb-4 font-poppins wow fadeIn"
                data-wow-delay="1s"
                data-wow-duration="1s"
              >
                SUSCRIBITE
              </h5>
              <form
                className="form-inline wow fadeIn d-block"
                data-wow-delay="1.1s"
                data-wow-duration="1s"
              >
                <input
                  className="form-control form-control-sm mr-3 w-75 m-auto"
                  type="text"
                  placeholder="bakeryshop@gmail.com"
                  aria-label="Search"
                  style={{ height: "45px", borderRadius: "8px" }}
                />
                <i className="fas fa-search" aria-hidden="true"></i>
                <button
                  type="button"
                  className="btn text-uppercase bg-brown white-font font-brown-hover mt-3 buttonFooter font-bitter"
                >
                  {" "}
                  <div className="font-bitter">Suscribirme!</div>
                </button>
              </form>
              <br />
            </div>

            <hr className="clearfix w-50 m-auto d-md-none mt-2 mb-2" />

            {/* <!-- Grid column --> */}
            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-poppins">Secciones</h5>

              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/"
                    className="orange-dark-font font-brown-hover text-decoration-none font-bitter options-hover"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    className="orange-dark-font font-brown-hover text-decoration-none font-bitter options-hover"
                    href="#start"
                    to="/productos"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    className="orange-dark-font font-brown-hover text-decoration-none font-bitter options-hover"
                    href="#start"
                    to="/nosotros"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <a
                    className="orange-dark-font font-brown-hover text-decoration-none font-bitter options-hover"
                    href="#contacto"
                  >
                    Contactanos
                  </a>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-50 m-auto d-md-none mb-2" />
            {/* <!-- Grid column --> */}
            <div className="col-md-6 mb-md-0">
              <h5 className="text-uppercase font-poppins">Locales</h5>

              <ul className="list-unstyled">
                <li>
                  <span
                    className="orange-dark-font text-decoration-none font-bitter"
                    href="#!"
                  >
                    NVA. CORDOBA
                  </span>
                </li>
                <li>
                  <span
                    className="orange-dark-font text-decoration-none font-bitter"
                    href="#!"
                  >
                    VILLA ALLENDE
                  </span>
                </li>
                <li>
                  <span
                    className="orange-dark-font text-decoration-none font-bitter"
                    href="#!"
                  >
                    CERRO DE LAS ROSAS
                  </span>
                </li>
                <li>
                  <span
                    className="orange-dark-font text-decoration-none font-bitter"
                    href="#!"
                  >
                    GRAL. PAZ
                  </span>
                </li>
              </ul>
            </div>
            {/* <!-- Grid column --> */}
            <hr className="clearfix w-50 m-auto d-md-none mt-3 mb-2" />
            <div className="col-md-12 m-auto mb-md-0 mb-3">
              <h5
                className="text-uppercase mb-4 mb-md-5 mt-md-5 font-poppins"
                id="contacto"
              >
                Contacto
              </h5>
              <ul className="list-unstyled d-md-flex justify-content-around">
                <div className="col-md-3">
                  <h4>
                    <BsLinkedin /> Linkedin
                  </h4>
                  <li>
                    <p>
                      <a
                        className="orange-dark-font font-brown-hover text-decoration-none font-bitter"
                        href="https://www.linkedin.com/in/marco-mignacco-001547234/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Marco{" "}
                      </a>
                      /
                      <a
                        className="orange-dark-font font-brown-hover text-decoration-none options-hover"
                        href="https://www.linkedin.com/in/sebastian-ponce2/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Sebastián
                      </a>
                    </p>
                  </li>
                </div>
                <div className="col-md-3">
                  <h4>
                    <BsGithub /> Github
                  </h4>
                  <li>
                    <p>
                      <a
                        className="orange-dark-font font-brown-hover text-decoration-none font-bitter options-hover"
                        href="https://github.com/marcom25"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Marco{" "}
                      </a>
                      /
                      <a
                        className="orange-dark-font font-brown-hover text-decoration-none font-bitter options-hover"
                        href="https://github.com/sebaponce2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Sebastián
                      </a>
                    </p>
                  </li>
                </div>

                <div className="col-md-3">
                  <h4>
                    <SiGmail /> Gmail
                  </h4>
                  <li>
                    <p>
                      <a
                        className="orange-dark-font font-brown-hover text-decoration-none font-bitter options-hover"
                        href="mailto:marcomignacco03@gmail.com?"
                        target="_blank"
                      >
                        Marco{" "}
                      </a>
                      /
                      <a
                        className="orange-dark-font font-brown-hover text-decoration-none font-bitter options-hover"
                        href="mailto:sebaottok@gmail.com?"
                        target="_blank"
                      >
                        {" "}
                        Sebastián
                      </a>
                    </p>
                  </li>
                </div>
                <div className="col-md-3">
                  <h4>
                    <BsInstagram /> Instagram
                  </h4>
                  <li>
                    <p>
                      <a
                        className="orange-dark-font font-brown-hover text-decoration-none font-bitter options-hover"
                        href="https://www.instagram.com/marco__m25/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Marco{" "}
                      </a>
                      /
                      <a
                        className="orange-dark-font font-brown-hover text-decoration-none font-bitter options-hover"
                        href="https://www.instagram.com/sebaponce__/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Sebastián
                      </a>
                    </p>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          {/* <!-- Grid row --> */}
        </div>
        {/* <!-- Footer Links --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
};

export default Footer;
