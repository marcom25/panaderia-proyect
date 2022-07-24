
import { useCart } from '../../../../contexts/Cart';

const SingleProduct = ({ card }) => {
  const { addToCart } = useCart();
  return (
    <div
      className="cardsWidth p-2 py-3 py-lg-3 bg-cream d-block post"
      key={card.id}
    >
      <div style={{overflow: 'hidden'}}>
        <div className="card bg-cream border-0 w-100 zoom">
          <img
            src={card.image}
            className="card-img-top w-100 imgWidth img-fluid"
            alt={card.category}
          />
          <div className="capaPadre">
            <div>
              <button
                className="btn cardsButton bg-white brown-font bg-brown-hover font-white-hover margin-button font-poppins"
                onClick={() =>
                  addToCart(card)
                }
              >
                +Añadir al Carrito
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className="card-body bg-cream p-0 d-flex justify-content-between">
          <h5 className="card-title brown-font font-poppins">{card.name}</h5>
          <p className="brown-font font-weight-700 font-poppins">
            $ {card.price}
          </p>
      </div>
      <div className="text-center d-lg-none">
          <button
            className="btn cardsButton bg-brown white-font font-poppins"
            onClick={() =>
              addToCart(card)
            }
          >
            +Añadir al Carrito
          </button>
      </div>
    </div>
  );
};

export default SingleProduct;
