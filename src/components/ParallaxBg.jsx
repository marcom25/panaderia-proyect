// IMPORTS DE MODULOS
import React, {useEffect} from 'react';
import { Parallax } from 'react-parallax';

// IMPORTS DE CSS
import "../css/ParallaxBg.css"
import "../css/Fonts.css"


const ParallaxBg = () => {
    return (

        <Parallax
            blur={2}
            bgImage={require('../images/bakery/macaroons.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        > 
            <h1 className='texto text-center paragraph font-satisfy text-wrap'>Las mejores cosas en la vida son dulces</h1>
            <p className='texto text-center paragraph font-satisfy text-wrap pt-5 mt-2 d-none d-sm-block'>No te quedes con las ganas..</p>
            <div className='sizer' />
        </Parallax>
    );
};
 
export default ParallaxBg;

  