import React from "react";
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




const Sidebar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-pink sticky-top d-md-none">
        <div className="container-fluid padding-left-menu-button" style={{width: '33%'}}>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <h2 ><AiOutlineMenu className="brown-font"/></h2>
          </button>
          <div  className="offcanvas offcanvas-start bg-pink" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{width: 'max-content'}}>
            <div className="offcanvas-header">
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body p-0">
              <ul className="navbar-nav h-50 flex-grow-1 brown-font">
                <li className="nav-item bg-brown-hover">
                  <a className="nav-link d-flex align-items-center brown-font font-pink-hover px-3" aria-current="page" href="#"> <AiFillHome style={{fontSize: '1.55rem', paddingRight: '4px'}}/> Inicio</a>
                </li>
                <li > 
                  <a class="nav-link dropdown-toggle d-flex align-items-center brown-font font-pink-hover px-3  nav-item dropdown bg-brown-hover pink-font" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <FaStore style={{fontSize: '1.5rem', paddingRight: '5px'}}/>Productos</a>
                  <ul class="dropdown-menu border-0 rounded-0 bg-pink pink-font font-pink-hover" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a class="dropdown-item bg-brown-hover font-pink-hover ps-4" href="">Tortas</a></li>
                    <li><a class="dropdown-item bg-brown-hover font-pink-hover ps-4" href="">Facturas</a></li>
                    <li><a class="dropdown-item bg-brown-hover font-pink-hover ps-4" href="">Masitas</a></li>
                    <li><a class="dropdown-item bg-brown-hover font-pink-hover ps-4" href="">Chocolates</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item bg-brown-hover font-pink-hover ps-4" href="">Más productos</a></li>
                  </ul>
                </li>
                <li className="nav-item bg-brown-hover">
                  <a className="nav-link d-flex align-items-center brown-font font-pink-hover px-3" href=""> <IoIosPeople style={{fontSize: '1.6rem', paddingRight: '4px'}}/> Sobre nosotros</a>
                </li>
                <li class="nav-item bg-brown-hover">
                  <a class="nav-link d-flex align-items-center brown-font font-pink-hover px-3" href=""><SiGooglemessages style={{fontSize: '1.6rem', paddingRight: '6px'}}/> Contactanos</a>
                </li>
                
              </ul>
              <ul className="navbar-nav h-50 d-flex justify-content-end">
                <li className="nav-item mb-3 text-center">
                  <a className="nav-link px-3 brown-font bg-brown-hover font-pink-hover" href="">Iniciar sesión </a>
                  <a className="nav-link px-3 brown-font bg-brown-hover font-pink-hover" href="">Registrarme</a>
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
