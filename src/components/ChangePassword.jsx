// IMPORTS DE COMPONENTES
import React from 'react';
import { Link } from 'react-router-dom';

// IMPORTS DE CSS
import "../css/Fonts.css";

const ChangePassword = () => {
    return ( 
        <>
            <div class="container">
                <div style={{marginTop: '12vh', paddingBottom: '12vh'}}>
                    <div class="row card contenido">
                        <div className="col card-body bg-cream caja p-0">
                            <h1 className="text-center card-title bg-cream  font-poppins pt-5 titulo ">Cambiar contraseña</h1>
                            <form className="mt-4 bg-cream">
                                <div class="question">
                                    <input type="text" className="p-2" required />
                                    <label className="font-poppins">Usuario o email</label>
                                </div>
                                <div class="question">
                                    <input type="password" className="p-2" required />
                                    <label className="font-poppins">Contraseña nueva</label>
                                </div>
                                <div class="question">
                                    <input type="password" className="p-2" required />
                                    <label className="font-poppins">Repetir contraseña</label>
                                </div>
                                <div className="m-auto mt-4 mb-2" style={{width: 'max-content'}}>
                                    <Link to="/login" className="font-poppins text-decoration-none white-font font-pink-hover"><button className="d-block m-auto" type="submit">Cambiar contraseña</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ChangePassword;