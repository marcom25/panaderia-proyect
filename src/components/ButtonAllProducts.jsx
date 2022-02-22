import React from 'react'

import "../css/Grid.css";
import "../css/Colors.css";
import "../css/Collage.css";
import "../css/Fonts.css";
import "../css/Products.css";

const ButtonAllProducts = ({buttons, filter}) => {

    return (
        <div>
            {
                buttons.map((cat, i)=>{ 
                    if (cat === 'All') {
                        return  <li  className='brown-font line-height-products d-block mb-1 container-category' onClick={()=> filter(cat)} style={{fontWeight: '470'}}>Todos los productos</li>
                    }
                })  
            }
        </div>

    );
}
 
export default ButtonAllProducts;