import { useState } from "react";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password === confirmedPassword) {
      try {
        const res = await fetch("http://localhost:8080/changePassword", {
          method: "PATCH",
          body: JSON.stringify({ email, password, confirmedPassword }),
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
                Cambiar contraseña
              </h1>
              <form className="mt-4 bg-cream" onSubmit={submitHandler}>
                <div class="question">
                  <input
                    type="text"
                    className="p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Usuario o email</label>
                </div>
                <div class="question">
                  <input
                    type="password"
                    className="p-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="font-poppins">Contraseña nueva</label>
                </div>
                <div class="question">
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
                  {/* <Link
                    to="/login"
                    className="font-poppins text-decoration-none white-font font-pink-hover"
                  > */}
                  <button
                    className="d-block m-auto poppins text-decoration-none"
                    type="submit"
                  >
                    Cambiar contraseña
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

export default ChangePassword;
