import React from 'react';

import "../css/Fonts.css";

const RegisterForm = () => {
    return ( 
        <>
        <form className='form-floating'>
        <div className="row my-3 d-flex justify-content-center">
            <div className="col-sm-10">
                <input placeholder="Username" type="text" className="form-control" id="inputEmail3"/>
            </div>
        </div>
        <div className="row my-3 d-flex justify-content-center">
            <div className="col-sm-10">
                <input placeholder="Email" type="email" className="form-control" id="inputEmail3"/>
            </div>
        </div>
        <div className="row mb-3 d-flex justify-content-center">
            <div className="col-sm-10">
                <input placeholder='Password' type="password" className="form-control" id="inputPassword3"/>
            </div>
        </div>
        <div className='row'>
            <div className="col d-flex justify-content-end py-3 bg-pink">
                <button type="submit" className="btn loginDesing font-poppins">Registrarme</button>
            </div>   
        </div>
        </form>
      
        </>
    );
}
 
export default RegisterForm;