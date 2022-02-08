import React from 'react';
import { Parallax, Background} from 'react-parallax';
import "../css/ParallaxBg.css"
import "../css/Fonts.css"

const ParallaxBg = () => (
    <Parallax
        blur={2}
        bgImage={require('../images/medialunas.jpg')}
        bgImageAlt="the dog"
        strength={-200}
    >
        <p className='text-center paragraph font-satisfy text-wrap'>Lorem pisum ddasdo dnakwndp</p>
        <div className='sizer' />
    </Parallax>
);
 
export default ParallaxBg;

  