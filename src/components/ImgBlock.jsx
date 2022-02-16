// IMPORTS DE MODULOS
import React from 'react';
// IMPORTS DE CSS
import "../css/Colors.css";
import "../css/ImgBlock.css";
import "../css/Fonts.css";


const ImgBlock = ({image, textAtributes, imgAtributes, p1, p2, p3, p4, h1}) => {


    return ( 
        <>
            <div className={imgAtributes}>
                <img className='p-3 w-100' src={image} alt=''/>
            </div>
            <div className={textAtributes}>
                <h1 className='pt-3 pt-md-4 mb-xl-4 pt-lg-5  text-center font-bitter'>{h1}</h1>
                <p className='text-center font-poppins'>{p1}</p>
                <p className='text-center font-poppins'>{p2}</p>
                <p className='text-center font-poppins'>{p3}</p>
                <p className='text-center font-poppins'>{p4}</p>
            </div>
        </>
    );
}
 
export default ImgBlock;