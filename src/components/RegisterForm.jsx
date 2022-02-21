import React from "react";
import { Link } from "react-router-dom";

import "../css/Fonts.css";

const RegisterForm = () => {
  return (
    <>
      <div class="container">
        <div style={{marginTop: '12vh', paddingBottom: '12vh'}}>
          <div class="row card contenido">
            <div className="col card-body bg-cream caja p-0">
              <h1 className="text-center card-title bg-cream  font-poppins pt-5 titulo ">Registrarme</h1>
              <form className="mt-4 bg-cream">
                <div class="question">
                  <input type="text" className="p-2" required />
                  <label className="font-poppins">Usuario</label>
                </div>
                <div class="question">
                  <input type="email" className="p-2" required />
                  <label className="font-poppins">Correo electronico</label>
                </div>
                <div class="question">
                  <input type="password" className="p-2" required />
                  <label className="font-poppins">Contraseña</label>
                </div>
                <div class="question">
                  <input type="password" className="p-2" required />
                  <label className="font-poppins">Repetir contraseña</label>
                </div>
              
                <button className="d-block m-auto mt-4 mb-2" type="submit"><Link to="/" className="font-poppins text-decoration-none white-font font-pink-hover">Registrarme</Link></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
