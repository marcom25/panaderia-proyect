import React from "react";
import "../Navbar.css";
import "../Navbar";

const Navbar = () => {
  return (
    <>
      <div className="d-flex">
        <div className="navbar navbar-dark bg-dark menu-icon" >
          <span className="navbar-toggler-icon" id= "icono-menu"></span>
        </div>
        <div className="bg-dark" style={{textAlign: 'center', width: '100%', color: 'white'}}>
          Acá deberia ir la imagen jejox
        </div>
        <div className="bg-dark" style={{color: 'white'}}>Changuito</div>
      </div>
        <div className="cont-menu " id="menu">
          <ul>
            <li>Inicio</li>
            <li>Tienda</li>
            <li>Contacto</li>
            <li>About us</li>
            <li>Te estamos buscando</li>
            <li>Ya no se me ocurre nada</li>
          </ul>
      </div>
    </>
  );
};

export default Navbar;
