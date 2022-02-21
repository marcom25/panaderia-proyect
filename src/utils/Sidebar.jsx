// IMPORTS DE MODULOS
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';
// IMPORTANDO ICONOS
import { FaStore, FaShoppingCart } from "react-icons/fa";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";

// IMPORTANDO IMAGENES
import logo from "../images/logos/titulo-mas-cercano.svg";

// IMPORTANDO CSS
import "../css/Sidebar.css";
import "../css/Colors.css";
import "../css/Fonts.css";




const Sidebar = () => {
    useEffect(() => {
      const wow = new WOW.WOW({});
      wow.init();
    }, []);

  return (
    <>
      <nav className="navbar navbar-light bg-pink sticky-top d-md-none">
        <div className="container-fluid padding-left-menu-button" style={{width: '33%', overflow: 'hidden'}}>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <h2 ><AiOutlineMenu className="brown-font"/></h2>
          </button>
          <div  className="offcanvas offcanvas-start bg-pink" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{width: 'max-content'}}>
            <div className="offcanvas-header">
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body p-0">
              <ul className="navbar-nav h-50 flex-grow-1 brown-fontn">
                <li className="nav-item bg-brown-hover">
                  <Link className="nav-link d-flex align-items-center brown-font font-pink-hover px-3 font-poppins" aria-current="page" to="/"> <AiFillHome style={{fontSize: '1.55rem', paddingRight: '4px'}}/> Inicio</Link>
                </li>
                <li className="nav-item bg-brown-hover">
                  <Link className="nav-link d-flex align-items-center brown-font font-pink-hover px-3 font-poppins" aria-current="page" to="/productos"> <FaStore style={{fontSize: '1.5rem', paddingRight: '5px'}}/> Productos</Link>
                </li>
                <li className="nav-item bg-brown-hover">
                  <Link className="nav-link d-flex align-items-center brown-font font-pink-hover px-3 font-poppins" to="/nosotros"> <IoIosPeople style={{fontSize: '1.6rem', paddingRight: '4px'}}/> Nosotros</Link>
                </li>
                <li class="nav-item bg-brown-hover">
                  <Link class="nav-link d-flex align-items-center brown-font font-pink-hover px-3 font-poppins" to="/contactanos"><SiGooglemessages style={{fontSize: '1.6rem', paddingRight: '6px'}}/> Contactanos</Link>
                </li>
                
              </ul>
              <ul className="navbar-nav h-50 d-flex justify-content-end">
                <li className="nav-item mb-3 text-center">
                  <Link  className="nav-link px-3 brown-font bg-brown-hover font-pink-hover font-poppins" to="/login">Iniciar sesión </Link>
                  <Link className="nav-link px-3 brown-font bg-brown-hover font-pink-hover font-poppins" to="/signup">Registrarme</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center" style={{width: '33%'}}>
            <img src={logo} alt="logo" className="w-100" />
        </div>
        <div className="d-flex justify-content-end carrito" >
          <h1 ><FaShoppingCart /></h1>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
