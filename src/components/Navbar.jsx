import React from "react";
import "../Navbar";
import "../Navbar.css";
import Offcanvas from "./Offcanvas";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light sticky-top">
        <div class="container-fluid padding-left-jejox">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Offcanvas/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
