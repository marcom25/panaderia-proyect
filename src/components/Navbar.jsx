import React from 'react';
import "../css/Navbar.css";

import "../css/Colors.css";

const Navbar = () => {
    return (  
      <nav className="colores navbar navbar-expand-md navbar-light d-none d-md-block bg-pink">
          <div className="container-fluid ">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse mecanismomenu" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sobre nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contactanos</a>
                  </li>
                </ul>
              </div>
          </div>
      </nav>
    

    );
}
 
export default Navbar;