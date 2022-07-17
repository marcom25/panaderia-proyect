// IMPORTS DE MODULOS
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import Cookies from "universal-cookie";

// IMPORTANDO ICONOS
import { FaStore, FaShoppingCart } from "react-icons/fa";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";

// IMPORTANDO IMAGENES
import logo from "../images/logos/titulo-mas-cercano.svg";
import { CartState } from "../$-context/Context";

const Sidebar = () => {
  const cookies = new Cookies();

  const {
    state: { cart },
    
  } = CartState();


  useEffect(() => {
    const wow = new WOW.WOW({});
    wow.init();
  }, []);

  return (
    <>
      <nav className="navbar navbar-light bg-pink sticky-top d-md-none">
        <div
          className="container-fluid padding-left-menu-button"
          style={{ width: "33%", overflow: "hidden" }}
        >
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <h2>
              <AiOutlineMenu className="brown-font" />
            </h2>
          </button>
          <div
            className="offcanvas offcanvas-start bg-pink"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ width: "max-content" }}
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body p-0">
              <ul className="navbar-nav h-50 flex-grow-1 brown-fontn">
                <li className="nav-item bg-brown-hover">
                  <Link
                    className="nav-link d-flex align-items-center brown-font font-pink-hover px-3 font-poppins"
                    aria-current="page"
                    to="/"
                  >
                    {" "}
                    <AiFillHome
                      style={{ fontSize: "1.55rem", paddingRight: "4px" }}
                    />{" "}
                    Inicio
                  </Link>
                </li>
                <li className="nav-item bg-brown-hover">
                  <Link
                    className="nav-link d-flex align-items-center brown-font font-pink-hover px-3 font-poppins"
                    aria-current="page"
                    to="/productos"
                  >
                    {" "}
                    <FaStore
                      style={{ fontSize: "1.5rem", paddingRight: "5px" }}
                    />{" "}
                    Productos
                  </Link>
                </li>
                <li className="nav-item bg-brown-hover">
                  <Link
                    className="nav-link d-flex align-items-center brown-font font-pink-hover px-3 font-poppins"
                    to="/nosotros"
                  >
                    {" "}
                    <IoIosPeople
                      style={{ fontSize: "1.6rem", paddingRight: "4px" }}
                    />{" "}
                    Nosotros
                  </Link>
                </li>
                <li className="nav-item bg-brown-hover">
                  <a
                    className="nav-link d-flex align-items-center brown-font font-pink-hover px-3 font-poppins"
                    href="#contacto"
                  >
                    <SiGooglemessages
                      style={{ fontSize: "1.6rem", paddingRight: "6px" }}
                    />{" "}
                    Contactanos
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav h-50 d-flex justify-content-end">
                <li className="nav-item mb-3 text-center">
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
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ width: "33%" }}>
          <img src={logo} alt="logo" className="w-100" />
        </div>
        <div className="d-flex justify-content-end carrito">
          <Link to="/cart" className="brown-font">
            <h1>
              <FaShoppingCart />
              <span className="carrito-badge-sb position-absolute translate-middle badge rounded-pill ">{cart.length}</span>
            </h1>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
