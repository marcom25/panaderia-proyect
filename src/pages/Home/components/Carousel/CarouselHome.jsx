// Components imports
import Carousel from "react-bootstrap/Carousel";

// Images imports
import image1 from "../../../../images/bakery/pie.jpg";
import image2 from "../../../../images/bakery/muffinprueba.jpg";
import image3 from "../../../../images/bakery/tartaprueba.jpg";

const CarouselHome = () => {
  return (
    <div className="d-none d-md-block">
      <Carousel
        fade={true}
        controls={false}
        indicators={false}
        pause={false}
        blur={true}
        className="w-100 h-auto"
      >
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img-fluid blur"
            src={image2}
            alt="First slide"
            blurRadius={5}
          />
          <Carousel.Caption>
            <h3 className="title font-oleo">Muffins</h3>
            <p>Sweet day.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 blur"
            src={image3}
            alt="Second slide"
            blurRadius={5}
          />
          <Carousel.Caption>
            <h3 className="title font-oleo">Tartas</h3>
            <p>Sweet day.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 blur"
            src={image1}
            alt="Third slide"
            blurRadius={5}
          />
          <Carousel.Caption>
            <h3 className="title font-oleo">Tortas</h3>
            <p>Sweet day.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
