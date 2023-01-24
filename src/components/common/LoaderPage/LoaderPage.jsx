import loader from "../../../images/loader.gif";
import Spinner from "../Spinner/Spinner";

const LoaderPage = () => {
  return (
    <>
      <div className="bg-cream-products d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="spinner-container">
          <Spinner/>
        </div>
      </div>
    </>
  );
};

export default LoaderPage;
