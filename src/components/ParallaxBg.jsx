import React from 'react';
import { Parallax, Background} from 'react-parallax';

const ParallaxBg = () => (
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../images/descarga.jpg')}
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '10rem' }} />
    </Parallax>
);
 
export default ParallaxBg;