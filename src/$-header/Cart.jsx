import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../$-context/Context";
import { Link } from "react-router-dom";

export const DropdownCart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

  return (
    <>
      <button
        type="button"
        class="btn brown-font position-relative"
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
                  <span>{prod.product}</span>
                  <span>$ {Number(prod.price)}</span>
                </div>
                <AiFillDelete
                  fontSize="20px"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
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
          <span> El Carrito esta vacio </span>
        )}
      </ul>
    </>
  );
};

export const Cart = () => {
  return <></>;
};
