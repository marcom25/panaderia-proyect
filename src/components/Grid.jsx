import React from 'react';
import Navbar from "./Navbar";
import Card from "./Card";
import ParallaxBg from './ParallaxBg';


const Grid = () => {
    return ( 
        <div className="container-xs" style={{padding: "0"}}>
            <div className='row'>
                <div className='col-12'>
                    <Navbar/>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <ParallaxBg/> 
                </div>
            </div>
            <div className='row justify-content-sm-center'>
                <div className='col-sm m-auto'>
                    <Card/>
                </div>
                <div className='col-sm'>
                    <Card/>
                </div>
                <div className='col-sm'>
                    <Card/>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>
                    <div className=''>
                        <p>
                            TEXTO O IMAGENES
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Grid;