import { cardInfo } from "./utils";

const Card = () => {
  return cardInfo.map((card) => (
    <div
      className="cards col-md-6 col-lg-4 py-4 wow fadeIn"
      data-wow-delay="1s"
      data-wow-duration="1s"
    >
      <div
        className="row card m-auto container-card d-flex justify-content-center align-items-center"
        style={{ width: "20rem" }}
        key={card.id}
      >
        <img
          className="card-img-top image accordion-button p-0 collapsed"
          src={card.img}
          alt="Card cap"
        />
        <div className="layer">
          <h3 className="h3">{card.title}</h3>
          <p className="p">{card.content}</p>
        </div>
      </div>
    </div>
  ));
};

export default Card;
