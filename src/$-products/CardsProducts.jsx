import { CartState } from '../$-context/Context';

import SingleProduct from './SingleProduct';

const CardsProducts = ({ allCards, filteredCards }) => {
  const {
    state: { cart },
  } = CartState();

  const renderedCards = () => {
    if (filteredCards.length === 0) {
      return allCards?.map((card) => <SingleProduct card={card} />);
    } else {
      return filteredCards?.map((card) => <SingleProduct card={card} />);
    }
  };

  console.log('cartState', cart);
  return (
    <div className="w-100 pe-md-3">
      <div className="w-100 d-flex flex-wrap">{renderedCards()}</div>
      {<div></div>}
    </div>
  );
};

export default CardsProducts;
