import React from "react";
import { Link } from "react-router-dom";

import "../css/LoginForm.css";
import "../css/Colors.css";
import "../css/Fonts.css";
const LoginForm = () => {
  return (
    <>
      <div class="container" style={{ overflow: "hidden"}}>
        <div style={{marginTop: '12vh'}}>
          <div class="row card contenido">
            <div className="col card-body bg-cream caja p-0">
              <h1 className="text-center card-title bg-cream  font-poppins pt-5 titulo ">
                Iniciar Sesion
              </h1>
              <form className="mt-5 bg-cream">
                <div class="question">
                  <input type="text" className="p-2" required />
                  <label className="font-poppins">Usuario o email</label>
                </div>
            
                <div class="question">
                  <input type="password" className="p-2" required />
                  <label className="font-poppins">Contraseña</label>
                </div>
              
                <Link to="/" className="font-poppins text-decoration-none cream-font font-brown-hover"><button className="d-block m-auto mt-4 mb-2" type="submit">Iniciar sesión</button></Link>
                <Link to="/register" className="d-block text-center text-decoration-none brown-font fw-boldefont-poppins text-decoration none brown-font pb-2">Crear una cuenta nueva</Link>
                <Link to="/login" className="d-block text-center text-decoration-none brown-font">¿Olvidó su contraseña?</Link>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
