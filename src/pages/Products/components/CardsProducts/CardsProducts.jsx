import { CartState } from '../../../../contexts/Context';

import SingleProduct from '../SingleProduct/SingleProduct.jsx';

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

  return (
    <div className="w-100 pe-md-3" key={1}>
      <div className="w-100 d-flex flex-wrap">{renderedCards()}</div>
      {<div></div>}
    </div>
  );
};

export default CardsProducts;
