// IMPORTANDO MODULOS 
import React, { useEffect } from 'react';
import WOW from 'wowjs';
// IMPORTANDO ICONOS
import { SiGmail } from "react-icons/si";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

// IMPORTANDO CSS
import "../css/Colors.css";

// IMPORTANDO IMAGENES
import logo from "../images/logos/titulo-mas-cercano.svg";

const Footer = () => {

    useEffect(() => {
        const wow = new WOW.WOW({});
        wow.init();
    }, []);

    return ( 
        <>
            {/* <!-- Footer --> */}
            <footer class="page-footer font-small blue pt-2 bg-pink brown-font">
                <div class="container-fluid text-center text-md-left">

                    {/* <!-- Grid row --> */}
                    <div class="row mt-5">

                        {/* <!-- Grid column --> */}
                        <div class="col-md-8 m-auto mt-md-0 mt-3">
                            <img src={logo} alt="logo" className="m-auto d-md-none w-75 w-md-50"/>
                                {/* <!-- Content --> */}
                            <hr class="clearfix w-50 m-auto d-md-none mt-5 mb-2"/>
                            <h5 class="text-uppercase mb-4 font-poppins wow fadeIn" data-wow-delay= '1s' data-wow-duration="1s">SUSCRIBITE</h5>
                            <form class="form-inline wow fadeIn d-block" data-wow-delay= '1.1s' data-wow-duration="1s">
                            <input class="form-control form-control-sm mr-3 w-75 m-auto" type="text" placeholder="bakeryshop@gmail.com"
                            aria-label="Search" style={{height: '45px', borderRadius: '8px'}}/>
                            <i class="fas fa-search" aria-hidden="true"></i>
                            <button type="button" class="btn btn-primary text-uppercase rounded-5  mt-3 bg-colorado border-0" style={{height: '55px', borderRadius: '8px'}}>Suscribirme!</button>
                            </form>
                            <br />
                        </div>

                        <hr class="clearfix w-50 m-auto d-md-none mt-2 mb-2"/>



                        {/* <!-- Grid column --> */}
                        <div class="col-md-6 mb-md-0 mb-3">

                            <h5 class="text-uppercase font-poppins">Secciones</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a className="orange-dark-font text-decoration-none font-bitter" href="#!">Inicio</a>
                                </li>
                                <li>
                                    <a className="orange-dark-font text-decoration-none font-bitter" href="#!">Productos</a>
                                </li>
                                <li>
                                    <a className="orange-dark-font text-decoration-none font-bitter" href="#!">Sobre nosotros</a>
                                </li>
                                <li>
                                    <a className="orange-dark-font text-decoration-none font-bitter" href="#!">Contactanos</a>
                                </li>
                            </ul>

                        </div>



                        <hr class="clearfix w-50 m-auto d-md-none mb-2" />
                        {/* <!-- Grid column --> */}
                        <div class="col-md-6 mb-md-0">

                            <h5 class="text-uppercase font-poppins">Locales</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a className="orange-dark-font text-decoration-none font-bitter" href="#!">NVA. CORDOBA</a>
                                </li>
                                <li>
                                    <a className="orange-dark-font text-decoration-none font-bitter" href="#!">VILLA ALLENDE</a>
                                </li>
                                <li>
                                    <a className="orange-dark-font text-decoration-none font-bitter" href="#!">CERRO DE LAS ROSAS</a>
                                </li>
                                <li>
                                    <a className="orange-dark-font text-decoration-none font-bitter" href="#!">GRAL. PAZ</a>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}
                        <hr class="clearfix w-50 m-auto d-md-none mt-3 mb-2" />
                        <div class="col-md-12 m-auto mb-md-0 mb-3"><h5 class="text-uppercase mb-4 mb-md-5 mt-md-5 font-poppins">Contacto</h5>
                            <ul class="list-unstyled d-md-flex justify-content-around">
                                    <div class="col-md-3">
                                        <h4><BsLinkedin/> Linkedin</h4>
                                        <li>
                                            <p><a class="orange-dark-font text-decoration-none font-bitter" href="#!">Marco </a>/<a class="orange-dark-font text-decoration-none" href="#!"> Sebastián</a></p> 
                                        </li>
                                    </div>
                                    <div class="col-md-3">
                                        <h4><BsGithub/> Github</h4>
                                        <li>
                                            <p><a class="orange-dark-font text-decoration-none font-bitter" href="#!">Marco </a>/<a class="orange-dark-font text-decoration-none font-bitter" href="#!"> Sebastián</a></p>
                                        </li>
                                    </div>
                                
                                    <div class="col-md-3">
                                        <h4><SiGmail/> Gmail</h4>
                                        <li>
                                            <p><a class="orange-dark-font text-decoration-none font-bitter" href="#!">Marco </a>/<a class="orange-dark-font text-decoration-none font-bitter" href="#!"> Sebastián</a></p>
                                        </li>
                                    </div>
                                    <div class="col-md-3">
                                        <h4><BsInstagram/> Instagram</h4>
                                        <li>
                                            <p><a class="orange-dark-font text-decoration-none font-bitter" href="#!">Marco </a>/<a class="orange-dark-font text-decoration-none font-bitter" href="#!"> Sebastián</a></p>
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
}
 
export default Footer;