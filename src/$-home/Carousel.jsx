import image1 from "../images/bakery/pie.jpg";
import image2 from "../images/bakery/muffin.jpg";
import image3 from "../images/bakery/lemonpie.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel-home slide carousel-fade d-none d-md-block"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
          <img src={image1} className="d-block w-100 imagen" alt="" />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="title font-yellowtail">Tortas</h1>
            <p>Sweet day.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={image2} className="d-block w-100 imagen" alt="" />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="title font-yellowtail">Muffins</h1>
            <p>Sweet day.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={image3} className="d-block w-100 imagen" alt="" />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="title font-yellowtail">Tartas</h1>
            <p>Sweet day.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev d-none"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next d-none"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
