// IMPORTS DE MODULOS
import { DropdownCart } from "../../../pages/Cart/components/DropdownCart/DropdowCart.jsx";
import logo from "../../../images/logos/titulo-mas-cercano.svg";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

const Navbar = () => {
  const cookies = new Cookies();

  return (
    <nav
      id="start"
      className="bg-pink navbar navbar-expand-md navbar-light d-none d-md-block d-flex navbar-position"
    >
      <div className="container-fluid p-0">
        <div className="login-width text-center">
          {cookies.get("username") ? (
            <>
              
              <div
                className="my-auto px-3 ms-md-3 w-100 font-poppins dropdown user-dropdown d-flex justify-content-center"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {cookies.get("username").key}
              </div>
              <ul
                className="dropdown-menu bg-cream dd-body ms-md-3 text-center "
                aria-labelledby="dropdownMenuButton2"
              >
                <li
                  className="px-3 font-poppins logout"
                  onClick={() => {
                    console.log("hice click");
                    cookies.remove("username", { maxAge: 1 });
                    document.location.reload();
                  }}
                >
                  Cerrar Sesion
                </li>
              </ul>
            </>
          ) : (
            <Link
              to="/login"
              className="my-auto btn py-2 px-3 ms-md-3 loginDesing font-poppins "
            >
              Iniciar Sesion
            </Link>
          )}
        </div>
        <div
          className="collapse navbar-collapse mecanismomenu"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav d-flex justify-content-around m-auto barrita-chota">
            <li className="nav-item w-20 my-auto text-center">
              <Link
                className="nav-link brown-font productOptions font-poppins"
                aria-current="page"
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item w-20 my-auto text-center">
              <Link
                className="nav-link brown-font productOptions font-poppins"
                to="/productos"
              >
                Productos
              </Link>
            </li>
            <li className="nav-item text-center logo-width" id="start">
              <img src={logo} alt="bakeryshop" className="w-100 h-100 m-auto" />
            </li>
            <li className="nav-item my-auto w-20 text-center">
              <Link
                className="nav-link brown-font productOptions font-poppins"
                to="/nosotros"
              >
                Nosotros
              </Link>
            </li>
            <li className="nav-item my-auto w-20 text-center">
              <a
                className="nav-link brown-font productOptions font-poppins"
                href="#contacto"
              >
                Contactanos
              </a>
            </li>
          </ul>
        </div>
        <div className="carritoNavbar text-center brown-font px-lg-3 px-xl-4 px-md-3 dropdown">
          <DropdownCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
