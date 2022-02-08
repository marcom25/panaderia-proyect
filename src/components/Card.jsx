import React from 'react';


import "../css/Card.css"
import "../css/Colors.css"


const Card = ({image, counter}) => {
   

    return ( 
        <div className="card m-auto mt-4 mb-4 bg-orange-dark" style={{width: "18rem"}}>
            <img className="card-img-top image" src={image} alt="Card cap"/>
            <div className="card-body bg-orange-light card-content">
                <h5 className="card-title">Card title</h5>
              

            </div>
        </div>
    );
}
 
export default Card;

