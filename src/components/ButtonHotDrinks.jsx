import React from 'react'

import "../css/Grid.css";
import "../css/Colors.css";
import "../css/Collage.css";
import "../css/Fonts.css";
import "../css/Products.css";

const ButtonHotDrinks = ({buttons, filter}) => {

    return (
        <div>
            {
                buttons.map((cat, i)=>{ 
                    if (cat === 'Café' || cat === 'Té' || cat === 'Chocolate') {
                        return <li onClick={()=> filter(cat)} className='brown-font d-block container-category'>{cat}</li>
                    }
                })  
            }
        </div>

    );
}
 
export default ButtonHotDrinks;