import React from 'react';

import "../css/Colors.css";
import "../css/ImgBlock.css";
import "../css/Fonts.css";


const ImgBlock = ({image, textAtributes, imgAtributes}) => {
    return ( 
        <>
            <div className={imgAtributes}>
                <img className='p-3 w-100' src={image} alt=''/>
            </div>
            <div className={textAtributes}>
                <h1 className='pt-3 pt-md-4 pt-lg-5  text-center font-comforter '>Masitas dulces</h1>
                <p className='text-center'>500gr Harina</p>
                <p className='text-center'>500ml Leche</p>
                <p className='text-center'>300gr Manteca</p>
                <p className='text-center'>2 Huevos </p>
            </div>
        </>
    );
}
 
export default ImgBlock;