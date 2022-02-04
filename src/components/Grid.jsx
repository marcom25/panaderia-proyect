import React from 'react';
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Card from "./Card";
import { right } from '@popperjs/core';

const Grid = () => {
    return ( 
        <div className="container" style={{padding: "0"}}>
            <div className='row'>
                <div className='col-12'>
                    <Navbar/>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Carousel/>
                </div>
                <div className='col'>
                    <Card/>
                </div>
            </div>
        </div>
    );
}
 
export default Grid;