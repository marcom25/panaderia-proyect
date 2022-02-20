import React from 'react';

import "../css/Modal.css";
import "../css/Colors.css";
import LoginForm from './LoginForm';
const Modal = () => {
    return ( 
        <>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header text-center bg-pink">
                <h5 className="modal-title " id="exampleModalLabel">Iniciar Sesion</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body p-0 bg-cream">
                <LoginForm/>
              </div>
              {/* <div className="modal-footer bg-pink">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div> */}
            </div>
          </div>
        </div>
        </>
    );
}
 
export default Modal;