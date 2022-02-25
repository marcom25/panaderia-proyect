import React from 'react';


// IMPORTS DE CSS
import "../css/Grid.css";
import "../css/Colors.css";
import "../css/Collage.css";
import "../css/Fonts.css";
import "../css/Products.css";

const CardsProducts = ({cards}) => {

    

    return ( 
        

        <div className='w-100'>
            <div className='w-100 d-flex flex-wrap'>
                {
                    cards.map((card) => { 
                        
                        return  <div className='cardsWidth p-2 py-3 py-lg-3 bg-cream d-block post' id="Handler">
                                    <div class="card bg-cream border-0 w-100" key={card.id}>
                                        <img src={card.image} class="card-img-top w-100 imgWidth" alt="..." />
                                        <div className='capaPadre'>
                                            <div>
                                                <a href="#" class="btn cardsButton bg-white brown-font margin-button">+Añadir al carrito</a>
                                            </div>
                                        </div>
                                        <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                            <h5 class="card-title brown-font">{card.title}</h5>
                                            <p className='brown-font font-weight-700'>{card.price}</p>
                                        </div>
                                        <div className='m-auto d-lg-none'>
                                            <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                        </div>
                                    </div>
                                </div> 
                    })
                },
            </div>
            {   
                <div>
                    
                </div>
            }
        </div>
        
     );
}
 
export default CardsProducts;