import { useState, useRef } from "react";
import Loader from "../../../../components/common/Loader/Loader.jsx";

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
    userText.current.className = 'd-block invalid-text bg-brown white-font';
  }

  const showDifferentPasswords = () => {
    passwordText.current.className = 'd-block invalid-text bg-brown white-font';
  }

  const showSuccessfulRegister = () => {
    successText.current.className = "d-block success-text";
  };

  const submitHandler = async (e) => {
    setLoading(false);
    e.preventDefault();

    if (password === newPassword) {
      try {
        const res = await fetch(
          "https://panaderia-api.herokuapp.com/register",
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
        if (data.isAlreadyUsed) {
          setLoading(true);
          showUsedText();
        } else {
          setLoading(true);
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
      <div className="container">
        <div style={{ marginTop: "12vh", paddingBottom: "12vh" }}>
          <div className="row card contenido">
            {loading ? (
              <div className="col card-body bg-cream caja p-0">
                <h1 className="text-center card-title bg-cream  font-poppins pt-5 titulo ">
                  Registrarme
                </h1>
                <form className="mt-4 bg-cream" onSubmit={submitHandler}>
                  <p ref={successText} className="d-none">
                    ??Registro exitoso!
                  </p>
                  <p ref={userText} className="d-none">
                    Email y/o usuario en uso.
                  </p>
                  <p ref={passwordText} className="d-none">
                    Las contrase??as deben ser id??nticas.
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
                    <label className="font-poppins">Contrase??a</label>
                  </div>
                  <div className="question">
                    <input
                      type="password"
                      className="p-2"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                    <label className="font-poppins">Repetir contrase??a</label>
                  </div>

                  <div
                    className="m-auto mt-4 mb-2"
                    style={{ width: "max-content" }}
                  >
                    {/* <Link
                    to="/login"
                    className="font-poppins text-decoration-none white-font font-pink-hover"
                  > */}
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
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
