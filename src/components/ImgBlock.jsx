import React from 'react';

import "../css/Colors.css";
import "../css/ImgBlock.css";
import "../css/Fonts.css";


const ImgBlock = ({image, textAtributes, imgAtributes}) => {
    return ( 
        <>
            <div className={textAtributes}>
                <h1 className='mt-2 pt-2 text-center font-comforter'>lorem solarim dmowda mod </h1>
                <p className='mt-3 mb-5 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi nihil suscipit placeat nostrum? Molestiae, neque! Voluptate quas nihil eum vel iure placeat quaerat iusto natus, non quia mollitia doloribus velit!</p>
            </div>
            <div className={imgAtributes}>
                <img className='p-3 w-100' src={image} alt=''/>
            </div>
        </>
    );
}
 
export default ImgBlock;