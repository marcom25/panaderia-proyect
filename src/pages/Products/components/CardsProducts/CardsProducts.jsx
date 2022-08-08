

import SingleProduct from '../SingleProduct/SingleProduct';

const CardsProducts = ({ allCards, filteredCards }) => {


  const renderedCards = () => {
    if (filteredCards.length === 0) {
      return allCards?.map((card) => <SingleProduct card={card} />);
    } else {
      return filteredCards?.map((card) => <SingleProduct card={card} />);
    }
  };

  return (
    <div className="w-100" key={1}>
      <div className="w-100 d-flex flex-wrap">{renderedCards()}</div>
      {<div></div>}
    </div>
  );
};

export default CardsProducts;
