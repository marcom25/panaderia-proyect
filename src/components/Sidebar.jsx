import React from "react";
import "../css/Sidebar.css";
import { FaStore, FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";




const Sidebar = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light sticky-top d-lg-none">
        <div class="container-fluid padding-left-jejox" style={{width: '33%'}}>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div  class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{width: 'max-content'}}>
            <div class="offcanvas-header">
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link d-flex align-items-center" aria-current="page" href="#"> <AiFillHome style={{fontSize: '1.55rem', paddingRight: '4px'}}/> Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-flex align-items-center" href="#"><FaStore style={{fontSize: '1.5rem', paddingRight: '5px'}}/> Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-flex align-items-center" href="#"> <IoIosPeople style={{fontSize: '1.6rem', paddingRight: '4px'}}/> Sobre nosotros</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-flex align-items-center" href="#"><SiGooglemessages style={{fontSize: '1.5rem', paddingRight: '5px'}}/> Contactanos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center" style={{width: '33%'}}>
            Aca va la foto
        </div>
        <div class="d-flex justify-content-end carrito" >
          <h1><FaShoppingCart /></h1>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
