
const Card = ({
  image,
  msg,
  imageClass,
  iamgeType,
  imageDataTarget,
  imageAriaControls,
  bodyClass,
  bodyId,
  bodyAriaLabel,
  contentClass,
}) => {
  return (
    <div className="card m-auto container-card d-flex justify-content-center align-items-center" style={{ width: "20rem" }}>
      <img
        className="card-img-top image accordion-button p-0 collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={imageDataTarget}
        aria-controls={imageAriaControls}
        src={image}
        alt="Card cap"
      />
      <div className="capa">
        <h3 className="h3">Lorem ipsum</h3>
        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis explicabo eaque fugit, saepe quis animi accusantium!</p>
      </div>
      {/* <div
        id={bodyId}
        className={bodyClass}
        aria-labelledby={bodyAriaLabel}
        data-bs-parent="#accordionFlushExample"
      >
        <h5 className={contentClass}>{msg} </h5>
      </div> */}
    </div>
  );
};

export default Card;
