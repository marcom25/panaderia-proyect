import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { msToDaysParser } from "../../../../utils/msToDaysParser";
import LoaderPage from "../../../../components/common/LoaderPage/LoaderPage.jsx";
import Cookies from "universal-cookie";
import Spinner from "../../../../components/common/Spinner/Spinner";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const showText = useRef(null);

  const submitHandler = async (e) => {
    setLoading(false);
    e.preventDefault();

    const cookies = new Cookies();

    const showInvalidText = () => {
      showText.current.className = "d-block white-font bg-brown invalid-text";
    };

    try {
      const res = await fetch("https://panaderia-api.herokuapp.com/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
          "Acces-Control-Allow_Origin": "localhost:3000",
        },
        mode: "cors",
      });

      const data = await res.json();

      if (data.isUser === true) {
        cookies.set(
          "username",
          { key: data.user },
          { maxAge: msToDaysParser(5) }
        );
        window.location.assign("/");
        setLoading(true);
      } else {
        setLoading(true);
        showInvalidText();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container" style={{ overflow: "hidden" }}>
        <div style={{ marginTop: "18vh" }}>
          <div className="row card contenido">
            <div
              className="col card-body bg-cream caja p-0"
              style={{ position: "relative" }}
            >
              <h1 className="text-center card-title bg-cream  font-poppins pt-5 titulo ">
                Iniciar Sesion
              </h1>
              <form className="mt-5 bg-cream" onSubmit={submitHandler}>
                <p ref={showText} className="d-none">
                  Email y/o contraseña incorrectos.
                </p>
                <div className="question">
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

                <div className="question">
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
                    className="d-block m-auto mt-4 mb-2 font-poppins text-decoration-none"
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
            <div
              className={
                loading
                  ? "d-none" 
                  : "col card-body bg-cream-products caja p-0 d-flex justify-content-center h-100"
              }
              style={{ position: "absolute", opacity: "0.5" }}
            >
              <div className="row spinner-login justify-content-center align-content-center h-100">
                <Spinner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
