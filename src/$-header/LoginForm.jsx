import { useRef, useEffect, useState } from "react";
import { CartState } from "../$-context/Context";
import { Link } from "react-router-dom";

const LoginForm = () => {

  const {
    userDispatch,
  } = CartState();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { 
          "Content-Type": "application/json",
          "Acces-Control-Allow_Origin": "localhost:3000"
        },
        mode: 'cors',
      });

      const data = await res.json();
      console.log(data);
      if (data.isUser === true) {
        console.log("true");
        userDispatch({
          type: "UPDATE_USER",
          payload: data.user
        })
       
      } else {
        console.log("false");
        // window.location.assign("/login");
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="container" style={{ overflow: "hidden" }}>
        <div style={{ marginTop: "12vh" }}>
          <div class="row card contenido">
            <div className="col card-body bg-cream caja p-0">
              <h1 className="text-center card-title bg-cream  font-poppins pt-5 titulo ">
                Iniciar Sesion
              </h1>
              <form className="mt-5 bg-cream" onSubmit={submitHandler}>
                <div class="question">
                  <input
                    type="text"
                    className="p-2"
                    name="userInfo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Email</label>
                </div>

                <div class="question">
                  <input
                    type="password"
                    className="p-2"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Contraseña</label>
                </div>

                <div className="m-auto" style={{ width: "max-content" }}> 
                   <button
                    className="d-block m-auto mt-4 mb-2 font-poppins text-decoration-none "
                    type="submit"
                  >
                    Iniciar sesión
                  </button>
                </div>

                <Link
                  to="/register"
                  className="d-block text-center text-decoration-none brown-font fw-boldefont-poppins text-decoration none brown-font pb-2 m-auto"
                  style={{ width: "max-content" }}
                >
                  Crear una cuenta nueva
                </Link>
                <Link
                  to="/changePassword"
                  className="d-block text-center text-decoration-none brown-font m-auto"
                  style={{ width: "max-content" }}
                >
                  ¿Olvidó su contraseña?
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
