import React from 'react';


import "../css/Card.css"
import "../css/Colors.css"


const Card = ({image ,msg}) => {
   

    return ( 
        <div className="card m-auto " style={{width: "20rem"}}>
            <img className="card-img-top image" src={image} alt="Card cap"/>
            <div className="card-body bg-lightblue card-content">
                <h5 className="card-title text-center">{msg} </h5>
              
            </div>
        </div>
    );
}
 
export default Card;

