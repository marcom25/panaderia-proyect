import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../../../images/bakery/pie.jpg";
import image2 from "../../../../images/bakery/muffinprueba.jpg";
import image3 from "../../../../images/bakery/tartaprueba.jpg";


const Carousell = () => {
  return (
    <div>
      <Carousel fade={true} controls={false} indicators={false} pause={false} blur={true} className="w-100 h-auto">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 img-fluid blur"
          src={image2}
          alt="First slide"
          blurRadius={5}
        />
        <Carousel.Caption>
          <h3 className='title font-oleo'>Muffins</h3>
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
          <h3 className='title font-oleo'>Tartas</h3>
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
          <h3 className='title font-oleo'>Tortas</h3>
          <p>
            Sweet day.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    // <div
    //   id="carouselExampleCaptions"
    //   className="carousel-home slide carousel-fade d-none d-md-block"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner">
    //     <div className="carousel-item active" data-bs-interval="4000">
    //       <img src={image1} className="d-block w-100 imagen" alt="" />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h1 className="title font-oleo">Tortas</h1>
    //         <p>Sweet day.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item" data-bs-interval="4000">
    //       <img src={image2} className="d-block w-100 imagen" alt="" />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h1 className="title font-oleo">Muffins</h1>
    //         <p>Sweet day.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item" data-bs-interval="4000">
    //       <img src={image3} className="d-block w-100 imagen" alt="" />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h1 className="title font-oleo">Tartas</h1>
    //         <p>Sweet day.</p>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev d-none"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next d-none"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
};

export default Carousell;
