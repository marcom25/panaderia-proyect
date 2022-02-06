import React from 'react';
import { Parallax, Background} from 'react-parallax';
import "../css/ParallaxBg.css"

const ParallaxBg = () => (
    <Parallax
        bgImage={require('../images/medialunas.jpg')}
        bgImageAlt="the dog"
        strength={-200}
    >
        <p className='paragraph'>Lorem pisum ddasdo dnakwndp </p>
        <div className='sizer' />
    </Parallax>
);
 
export default ParallaxBg;

  