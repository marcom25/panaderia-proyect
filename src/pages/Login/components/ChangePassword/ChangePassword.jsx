import { useState, useRef } from "react";
import Spinner from "../../../../components/common/Spinner/Spinner";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const emailText = useRef(null);
  const passwordText = useRef(null);
  const successText = useRef(null);

  const incorrectEmail = () => {
    emailText.current.className = "d-block white-font bg-brown invalid-text";
  };

  const showDifferentPasswords = () => {
    passwordText.current.className = "d-block white-font bg-brown invalid-text";
  };

  const showSuccessfulRegister = () => {
    successText.current.className = "d-block success-text";
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(false);

    if (password === confirmedPassword) {
      try {
        const res = await fetch(
          "https://panaderia-api.vercel.app/changePassword",
          {
            method: "PUT",
            body: JSON.stringify({ email, password, confirmedPassword }),
            headers: {
              "Content-Type": "application/json",
              "Acces-Control-Allow_Origin": "localhost:3000",
            },
            mode: "cors",
          }
        );

        const data = await res.json();
        console.log(data);

        setLoading(true);
        if (!data.registeredMail) {
          incorrectEmail();
        } else {
          showSuccessfulRegister();
          window.location.assign("/login");
        }
      } catch (error) {
        console.log(error);
      }
    } else showDifferentPasswords();
  };

  return (
    <>
      <div className="container" style={{overflow: 'hidden'}}>
        <div style={{ marginTop: "18vh", paddingBottom: "12vh" }}>
          <div className="row card contenido">
            <div
              className="col card-body bg-cream caja p-0"
              style={{ position: "relative" }}
            >
              <h1 className="text-center card-title bg-cream font-poppins pt-5 titulo ">
                Cambiar contraseña
              </h1>
              <form className="mt-4 bg-cream" onSubmit={submitHandler}>
                <p ref={successText} className="d-none">
                  ¡Cambio de contraseña exitoso!
                </p>
                <p ref={emailText} className="white-font bg-brown d-none">
                  Email incorrecto. Por favor, ingrese un email registrado.
                </p>
                <p ref={passwordText} className="white-font bg-brown d-none">
                  Las contraseñas deben ser idénticas.
                </p>
                <div className="question">
                  <input
                    type="text"
                    className="p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Usuario o email</label>
                </div>
                <div className="question">
                  <input
                    type="password"
                    className="p-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Contraseña nueva</label>
                </div>
                <div className="question">
                  <input
                    type="password"
                    className="p-2"
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Repetir contraseña</label>
                </div>
                <div
                  className="m-auto mt-4 mb-2"
                  style={{ width: "max-content" }}
                >
                  <button
                    className="d-block m-auto font-poppins text-decoration-none"
                    type="submit"
                  >
                    Cambiar contraseña
                  </button>
                </div>
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

export default ChangePassword;
