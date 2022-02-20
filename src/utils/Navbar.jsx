// IMPORTS DE MODULOS
import React from 'react';
// IMPORTS DE ICONOS
import { FaShoppingCart } from 'react-icons/fa';
// IMPORTS DE CSS
import "../css/Navbar.css";
import "../css/Colors.css";
import "../css/Fonts.css";

// IMPORTS DE IMAGENES
import logo from "../images/logos/titulo-mas-cercano.svg";
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

const Navbar = () => {
    return (  
      <nav className="bg-pink navbar navbar-expand-md navbar-light d-none d-md-block d-flex">
          <div className="container-fluid p-0">
            <div className='login-width text-center'>
              <p 
              type="button" 
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal" 
              className='my-auto btn py-2 px-3 ms-lg-3 loginDesing font-poppins'>Iniciar Sesion</p>
            </div>
            <Modal/>
            <div className="collapse navbar-collapse mecanismomenu" id="navbarNavDropdown">
              <ul className="navbar-nav d-flex justify-content-around m-auto">
                <li className="nav-item w-20 my-auto text-center">
                  <Link className="nav-link brown-font productOptions font-poppins" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item w-20 my-auto text-center">
                  <Link className="nav-link brown-font productOptions font-poppins" to="/productos">Productos</Link>
                </li>
                <li className="nav-item text-center logo-width">
                  <img src={logo} alt="bakeryshop" className='w-100 h-100 m-auto'/>
                </li>
                <li className="nav-item my-auto w-20 text-center">
                  <Link className="nav-link brown-font productOptions font-poppins" to="/nosotros">Nosotros</Link>
                </li>
                <li className="nav-item my-auto w-20 text-center">
                  <Link className="nav-link brown-font productOptions font-poppins" to="/contactanos">Contactanos</Link>
                </li>
              </ul>
            </div>
          <div className='carritoNavbar text-center brown-font ps-lg-4 ps-xl-5'><FaShoppingCart className='font-orange-dark-hover' style={{fontSize: '2rem', cursor:'pointer'}}/></div>
        </div>
      </nav>
    

    );
}
 
export default Navbar;