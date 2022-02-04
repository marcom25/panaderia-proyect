import React from 'react';

const Offcanvas = () => {
    return ( 
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Sobre nosotros</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contactanos</a>
                </li>
              </ul>

            </div>
          </div>
    );
}
 
export default Offcanvas;