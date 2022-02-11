import React from 'react';


import "../css/Card.css"
import "../css/Colors.css"


const Card = ({image ,msg, imageClass, iamgeType, imageDataTarget, imageAriaControls, bodyClass, bodyId, bodyAriaLabel, contentClass}) => {
   

    return ( 
        <div className="card m-auto " style={{width: "20rem"}}>
            <img className="card-img-top image accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={imageDataTarget} aria-controls={imageAriaControls} src={image} alt="Card cap"/>
            <div id={bodyId} className={bodyClass} aria-labelledby={bodyAriaLabel} data-bs-parent="#accordionFlushExample">
                <h5 className={contentClass}>{msg} </h5>
              
            </div>
        </div>
    );
}
 
export default Card;

