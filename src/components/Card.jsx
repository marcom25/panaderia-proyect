import React from 'react';

const Card = ({image}) => {
    return ( 
        <div className="card m-auto" style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
            </div>
        </div>
    );
}
 
export default Card;

