import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password === newPassword){
      try {
        
        const res = await fetch("http://localhost:8080/register", {
          method: "POST",
          body: JSON.stringify({ username, email, password }),
          headers: {
            "Content-Type": "application/json",
            "Acces-Control-Allow_Origin": "localhost:3000",
          },
          mode: "cors",
        });
  
        const data = await res.json();
        console.log(data);


      } catch (error) {
        console.log(error);
      }
    }

  };

  return (
    <>
      <div class="container">
        <div style={{ marginTop: "12vh", paddingBottom: "12vh" }}>
          <div class="row card contenido">
            <div className="col card-body bg-cream caja p-0">
              <h1 className="text-center card-title bg-cream  font-poppins pt-5 titulo ">
                Registrarme
              </h1>
              <form className="mt-4 bg-cream" onSubmit={submitHandler}>
                <div class="question">
                  <input
                    type="text"
                    className="p-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Usuario</label>
                </div>
                <div class="question">
                  <input
                    type="email"
                    className="p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Correo electronico</label>
                </div>
                <div class="question">
                  <input
                    type="password"
                    className="p-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Contraseña</label>
                </div>
                <div class="question">
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
                  {/* <Link
                    to="/login"
                    className="font-poppins text-decoration-none white-font font-pink-hover"
                  > */}
                    <button className="d-block m-auto font-poppins text-decoration-none" type="submit">
                      Registrarme
                    </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
