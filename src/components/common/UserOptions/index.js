import Cookies from "universal-cookie";

const UserOptions = () => {
  const cookies = new Cookies();

  return (
    <>
      <div
        className="my-auto px-3 ms-md-3 w-100 font-poppins dropdown user-dropdown d-flex justify-content-center"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {cookies.get("username").key}
      </div>
      <ul
        className="dropdown-menu bg-cream dd-body ms-md-3 text-center "
        aria-labelledby="dropdownMenuButton2"
      >
        <li className="px-3 font-poppins user-options-dropdown font-orange-dark-hover">
          Mi Perfil
        </li>
        <li
          className="px-3 font-poppins user-options-dropdown font-orange-dark-hover"
          onClick={() => {
            cookies.remove("username", { maxAge: 1 });
            document.location.reload();
          }}
        >
          Cerrar Sesion
        </li>
      </ul>
    </>
  );
};

export default UserOptions;
