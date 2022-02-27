import { FaShoppingCart } from "react-icons/fa";

export const DropdownCart = () => {
  return (
    <>
      <button
        type="button"
        class="btn brown-font position-relative dropdown-toggle"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FaShoppingCart
          className="font-cream-hover-carrito"
          style={{ fontSize: "2rem", cursor: "pointer", padding: "0" }}
        />

        <span class="carrito-badge position-absolute translate-middle badge rounded-pill "></span>
      </button>

      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><p className="dropdown-item">hola</p></li>
       
      </ul>
    </>
  );
};

export const Cart = () => {
  return <></>;
};


