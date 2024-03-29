import { useState, useRef } from "react";
import Spinner from "../../../../components/common/Spinner/Spinner";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(true);   

  const userText = useRef(null);
  const passwordText = useRef(null);
  const successText = useRef(null);

  const showUsedText = () => {
    userText.current.className = "d-block invalid-text bg-brown white-font";
  };

  const showDifferentPasswords = () => {
    passwordText.current.className = "d-block invalid-text bg-brown white-font";
  };

  const showSuccessfulRegister = () => {
    successText.current.className = "d-block success-text";
  };

  const submitHandler = async (e) => {
    setLoading(false);
    e.preventDefault();

    if (password === newPassword) {
      try {
        const res = await fetch(
          "https://panaderia-api.vercel.app/register",
          {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
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
        if (data.isAlreadyUsed) {
          showUsedText();
        } else {
          showSuccessfulRegister();
          window.location.assign("/login");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      showDifferentPasswords();
    }
  };

  return (
    <>
      <div className="container" style={{ overflow: "hidden" }}>
        <div style={{ marginTop: "18vh" }}>
          <div className="row card contenido">
            <div className="col card-body bg-cream caja p-0" style={{position: 'relative'}}>
              <h1 className="text-center card-title bg-cream  font-poppins pt-5 titulo ">
                Registrarme
              </h1>
              <form className="mt-4 bg-cream" onSubmit={submitHandler}>
                <p ref={successText} className="d-none">
                  ¡Registro exitoso!
                </p>
                <p ref={userText} className="d-none">
                  Email y/o usuario en uso.
                </p>
                <p ref={passwordText} className="d-none">
                  Las contraseñas deben ser idénticas.
                </p>
                <div className="question">
                  <input
                    type="text"
                    className="p-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Usuario</label>
                </div>
                <div className="question">
                  <input
                    type="email"
                    className="p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Correo electronico</label>
                </div>
                <div className="question">
                  <input
                    type="password"
                    className="p-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Contraseña</label>
                </div>
                <div className="question">
                  <input
                    type="password"
                    className="p-2"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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
                    Registrarme
                  </button>
                  {/* </Link> */}
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

export default RegisterForm;
