<<<<<<< HEAD
import image from '../images/bakery/pancakes.jpg';
import { CartState } from '../$-context/Context';
=======
import { CartState } from "../$-context/Context";
import image from "../images/bakery/pancakes.jpg";

const SingleProduct = ({ cards }) => {
  const {
    state: {cart},
    dispatch,
  } = CartState();

  console.log('productos desde SingleProducts:', cards);
>>>>>>> master

const SingleProduct = ({ card }) => {
  const { dispatch } = CartState();
  return (
<<<<<<< HEAD
    <div
      className="cardsWidth p-2 py-3 py-lg-3 bg-cream d-block post"
      key={card.id}
    >
      <div class="card bg-cream border-0 w-100">
        <img
          src={image}
          class="card-img-top w-100 imgWidth"
          alt={card.category}
        />
        <div className="capaPadre">
          <div>
            <button
              class="btn cardsButton bg-white brown-font bg-brown-hover font-white-hover margin-button font-poppins"
              onClick={() =>
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: card,
                })
              }
            >
              +Añadir al Carrito
            </button>
=======
    <div className="w-100">
      <div className="w-100 d-flex flex-wrap">
        {cards.map((card) => (
          <div className="cardsWidth p-2 py-3 py-lg-3 bg-cream d-block post" key={card.id}>
            <div class="card bg-cream border-0 w-100" >
              <img
                src={image}
                class="card-img-top w-100 imgWidth"
                alt={card.category}
              />
              <div className="capaPadre">
                <div>
                  <button
                    class="btn cardsButton bg-white brown-font bg-brown-hover font-white-hover margin-button font-poppins"
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: card,
                      })
                    }
                  >
                    +Añadir al Carrito
                  </button>
                </div>
              </div>
              <div class="card-body bg-cream p-0 d-flex justify-content-between">
                <h5 class="card-title brown-font font-poppins">{card.name}</h5>
                <p className="brown-font font-weight-700 font-poppins">$ {card.price}</p>
              </div>
              <div className="m-auto d-lg-none">
                
                <button
                  className="btn cardsButton bg-brown white-font font-poppins"
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: card,
                    })
                  }
                >
                  +Añadir al Carrito
                </button>
              </div>
            </div>
>>>>>>> master
          </div>
        </div>
        <div class="card-body bg-cream p-0 d-flex justify-content-between">
          <h5 class="card-title brown-font font-poppins">{card.name}</h5>
          <p className="brown-font font-weight-700 font-poppins">
            $ {card.price}
          </p>
        </div>
        <div className="m-auto d-lg-none">
          <button
            className="btn cardsButton bg-brown white-font font-poppins"
            onClick={() =>
              dispatch({
                type: 'ADD_TO_CART',
                payload: card,
              })
            }
          >
            +Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
