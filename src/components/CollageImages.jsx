// IMPORTANDO IMAGENES
import bakeryUno from "../images/bakery/bakery.jpg";
import bakeryDos from "../images/bakery/bakery2.jpg";
import brownie from "../images/bakery/brownie.jpg";
import cakeUno from "../images/bakery/cake.jpg";
import cakeDos from "../images/bakery/cake2.jpg";
import cakeTres from "../images/bakery/cake3.jpg";
import cheesecake from "../images/bakery/cheesecake.jpg";
import croissants from "../images/bakery/croissants.jpg";
import macaroons from "../images/bakery/macaroons.jpg";


const CollageImages = () => {
    return (  
        <>
               
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={brownie} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={cakeTres} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={macaroons} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={cakeUno} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={bakeryUno} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={croissants} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={cakeDos} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={bakeryDos} alt="muffins" className="w-100 h-100"/>
            </div>
            <div className="col-md-4 col-12 p-3 p-md-2">
                <img src={cheesecake} alt="muffins" className="w-100 h-100"/>
            </div>
        
        </>

    );
}
 
export default CollageImages;