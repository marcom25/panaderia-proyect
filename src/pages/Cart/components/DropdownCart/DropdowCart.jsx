import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useCart } from "../../../../contexts/Cart";


export const DropdownCart = () => {
  const {
    cart,
    removeFromCart,
  } = useCart();


  return (
    <>
      <button
        type="button"
        className="btn brown-font position-relative"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FaShoppingCart
          className="font-cream-hover-carrito"
          style={{ fontSize: "2rem", cursor: "pointer", padding: "0" }}
        />

        <span className="carrito-badge position-absolute translate-middle badge rounded-pill ">{cart.length}</span>
      </button>

      <ul
        className="dropdown-menu dropdownCart bg-cream"
        aria-labelledby="dropdownMenuButton1"
      >
        
        {cart.length > 0 ? (
          <>
            {cart.map((prod) => (
              <span className="cartitem" key={prod.id}>
                <img src={prod.image} className="cartItemImg" alt={prod.name} />
                <div className="cartItemDetail font-poppins">
                  <span>{prod.name}</span>
                  <span>$ {Number(prod.price)}</span>
                </div>
                <AiFillDelete
                  className="deleteIcon brown-font"
                  fontSize="20px"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    removeFromCart(prod)
                  }
                />
              </span>
            ))}
            <hr></hr>
            <div className="d-flex justify-content-center">
              <Link to="/cart" className="linkButton">
                <button className="cartButton font-poppins">
                  Ir al Carrito
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="d-flex justify-content-center ">
            <span className="d-flex justify-content-center font-poppins bg-brown cream-font rounded w-50"> El Carrito esta vacio </span>
          </div>
        )}
      </ul>
    </>
  );
};


