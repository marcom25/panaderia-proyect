import { CartState } from "../$-context/Context";


const CardsProducts = ({ cards }) => {
  const {
    state: {cart},
    dispatch,
  } = CartState();

  return (
    <div className="w-100">
      <div className="w-100 d-flex flex-wrap">
        {cards.map((card) => (
          <div className="cardsWidth p-2 py-3 py-lg-3 bg-cream d-block post">
            <div class="card bg-cream border-0 w-100" key={card.id}>
              <img
                src={card.image}
                class="card-img-top w-100 imgWidth"
                alt={card.product}
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
                <h5 class="card-title brown-font font-poppins">{card.title}</h5>
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
          </div>
        ))}
      </div>
      {<div></div>}
    </div>
  );
};

export default CardsProducts;
