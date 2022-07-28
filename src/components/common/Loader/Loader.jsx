import loader from "../../../images/loader.gif";

const Loader = () => {
  return (
    <>
      <div className="bg-cream-products d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
          <img src={loader} alt="loader" style={{width: '18%', height:'auto'}}/>
      </div>
    </>
  );
};

export default Loader;
