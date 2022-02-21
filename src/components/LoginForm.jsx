import React from "react";
import { Link } from "react-router-dom";

import "../css/LoginForm.css";
import "../css/Colors.css";
import "../css/Fonts.css";
const LoginForm = () => {
  return (
    <>
      <div class="container m-auto" style={{ overflow: "hidden" }}>
        <div class="row card contenido">
          <div className="col card-body bg-cream caja p-0">
            <h1 className="text-center card-title bg-cream  font-poppins py-3 titulo ">
              Iniciar Sesion
            </h1>
            <form className="mt-5 bg-cream">
              <div class="question">
                <input type="text" required />
                <label className="font-poppins">Usuario o Email</label>
              </div>
          
              <div class="question">
                <input type="text" required />
                <label className="font-poppins">Contraseña</label>
              </div>
             
              <button className="font-poppins" type="submit">
                Submit
              </button>
              <Link to="/register" >Si no tienes cuenta puedes registrarte</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
