import muffins from "../images/muffins.jpg";
import pan from "../images/mas-pan.jpg";
import donuts from "../images/donuts.jpg";
import brownie from "../images/brownie.jpg";
import pancito from "../images/pan.jpg";
import medialunas from "../images/medialunas.jpg";

const CollageImages = () => {
    return (  
        <>
               
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={muffins} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={pan} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={donuts} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={brownie} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={pancito} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={medialunas} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={muffins} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={muffins} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={muffins} alt="muffins" className="w-100 h-100"/>
            </div>
        
        </>

    );
}
 
export default CollageImages;