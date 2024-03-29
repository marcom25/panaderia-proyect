// IMPORTS DE MODULOS
import logo from "../../../images/logos/titulo-mas-cercano.svg";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { FaShoppingCart } from "react-icons/fa";
import UserOptions from "../UserOptions";


const Navbar = () => {
  const cookies = new Cookies();

  return (
    <nav
      id="start"
      className="bg-pink navbar navbar-expand-md navbar-light d-none d-md-block d-flex navbar-position"
    >
      <div className="container-fluid p-0">
        <div className="login-width text-center font-poppins">
          {cookies.get("username") ? (
            <UserOptions/>
          ) : (
            <Link
              onClick={()=> window.scrollTo(0,100)}
              to="/login"
              className="my-auto btn py-2 px-3 ms-md-3 loginDesing fw-bold"
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
                className="nav-link brown-font font-orange-dark-hover productOptions font-poppins fw-bold"
                aria-current="page"
                onClick={()=> window.scrollTo(0,100)}
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item w-20 my-auto text-center">
              <Link
                className="nav-link brown-font font-orange-dark-hover productOptions font-poppins fw-bold"
                onClick={()=> window.scrollTo(0,100)}
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
                className="nav-link brown-font font-orange-dark-hover productOptions font-poppins fw-bold"
                onClick={()=> window.scrollTo(0,100)}
                to="/nosotros"
              >
                Nosotros
              </Link>
            </li>
            <li className="nav-item my-auto w-20 text-center">
              <a
                className="nav-link brown-font font-orange-dark-hover productOptions font-poppins fw-bold"
                href="#contacto"
              >
                Contactanos
              </a>
            </li>
          </ul>
        </div>
        <Link className="carritoNavbar text-center brown-font px-lg-3 px-xl-4 px-md-3 dropdown cart-icon" to="/cart">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
