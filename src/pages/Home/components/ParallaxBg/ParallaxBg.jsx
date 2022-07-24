// IMPORTS DE MODULOS
import React, {useEffect} from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import torta from '../../../../images/bakery/Torta-by-stef.jpg';
import WOW from 'wowjs';


const ParallaxBg = () => {

    useEffect(() => {
        const wow = new WOW.WOW({});
      wow.init();
    }, []);

    return (

        <ParallaxBanner
        layers={[
            { image: torta, speed: -20 },
            
          ]}
          className="aspect-[2/1]"
        > 
            <h1 className='texto text-center paragraph font-oleo text-wrap wow fadeIn' data-wow-delay= '1s' data-wow-duration="2s">Las mejores cosas en la vida son dulces</h1>
            <p className='texto text-center paragraph font-oleo text-wrap pt-5 mt-2 d-none d-sm-block wow fadeIn' data-wow-delay= '3s' data-wow-duration="2s">No te quedes con las ganas..</p>
            <div className='sizer w-100' />
        </ParallaxBanner>
    );
};
 
export default ParallaxBg;

  