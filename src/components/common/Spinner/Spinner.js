import loader from "../../../images/loader.gif";
import { Image } from "react-bootstrap";
const Spinner = () => {
    return ( 
        <Image src={loader} alt="spinner" style={{width: '100%', height:'auto'}}/>
    );
}
 
export default Spinner;