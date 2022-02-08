import React from 'react';
import "../css/Navbar.css";


const Navbar = () => {
    return (  
      <nav className="colores navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block">
          <div className="container-fluid">
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