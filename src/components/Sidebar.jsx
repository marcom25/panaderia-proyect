import React from "react";
import "../css/Sidebar.css";
import "../css/Colors.css";
import { FaStore, FaShoppingCart } from "react-icons/fa";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";
import logo from "../images/titulo-mas-cercano.svg"




const Sidebar = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-pink sticky-top d-lg-none">
        <div class="container-fluid padding-left-menu-button" style={{width: '33%'}}>
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <h2 ><AiOutlineMenu className="brown-font"/></h2>
          </button>
          <div  class="offcanvas offcanvas-start bg-pink" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{width: 'max-content'}}>
            <div class="offcanvas-header">
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
              <ul class="navbar-nav justify-content-end flex-grow-1 brown-font">
                <li class="nav-item bg-brown-hover">
                  <a class="nav-link d-flex align-items-center brown-font font-pink-hover px-3" aria-current="page" href="#"> <AiFillHome style={{fontSize: '1.55rem', paddingRight: '4px'}}/> Inicio</a>
                </li>
                <li class="nav-item bg-brown-hover">
                  <a class="nav-link d-flex align-items-center brown-font font-pink-hover px-3" href="#"><FaStore style={{fontSize: '1.5rem', paddingRight: '5px'}}/> Productos</a>
                </li>
                <li class="nav-item bg-brown-hover">
                  <a class="nav-link d-flex align-items-center brown-font font-pink-hover px-3" href="#"> <IoIosPeople style={{fontSize: '1.6rem', paddingRight: '4px'}}/> Sobre nosotros</a>
                </li>
                <li class="nav-item bg-brown-hover">
                  <a class="nav-link d-flex align-items-center brown-font font-pink-hover px-3" href="#"><SiGooglemessages style={{fontSize: '1.5rem', paddingRight: '5px'}}/> Contactanos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center" style={{width: '33%'}}>
            <img src={logo} alt="logo" className="w-100" />
        </div>
        <div class="d-flex justify-content-end carrito" >
          <h1 ><FaShoppingCart /></h1>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
