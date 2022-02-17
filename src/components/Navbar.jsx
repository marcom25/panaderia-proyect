// IMPORTS DE MODULOS
import React from 'react';
// IMPORTS DE ICONOS
import { FaShoppingCart } from 'react-icons/fa';
// IMPORTS DE CSS
import "../css/Navbar.css";
import "../css/Colors.css";

// IMPORTS DE IMAGENES
import logo from "../images/logos/titulo-mas-cercano.svg";

const Navbar = () => {
    return (  
      <nav className="bg-pink navbar navbar-expand-md navbar-light d-none d-md-block d-flex">
          <div className="container-fluid ">
            <div className='login-width text-center'><a className='loginDesing' href="">Login</a></div>
              <div className="collapse navbar-collapse mecanismomenu" id="navbarNavDropdown">
                <ul className="navbar-nav d-flex justify-content-around m-auto">
                  <li className="nav-item w-20 my-auto text-center">
                    <a className="nav-link brown-font loginOptions" aria-current="page" href="#">Inicio</a>
                  </li>
                  <li className="nav-item w-20 my-auto text-center">
                    <a className="nav-link brown-font loginOptions" href="#">Productos</a>
                  </li>
                  <li className="nav-item text-center logo-width">
                    <img src={logo} alt="bakeryshop" className='w-100 h-100 m-auto'/>
                  </li>
                  <li className="nav-item my-auto w-20 text-center">
                    <a className="nav-link brown-font loginOptions" href="#">Sobre nosotros</a>
                  </li>
                  <li className="nav-item my-auto w-20 text-center">
                    <a className="nav-link brown-font loginOptions" href="#">Contactanos</a>
                  </li>
                </ul>
              </div>
              <div className='carritoNavbar text-center brown-font font-orange-dark-hover'><FaShoppingCart style={{fontSize: '2rem', cursor:'pointer'}}/></div>
          </div>
      </nav>
    

    );
}
 
export default Navbar;