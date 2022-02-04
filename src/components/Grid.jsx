import React from 'react';
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Card from "./Card";

const Grid = () => {
    return ( 
        <div className="container">
            <div className='row'>
                <div className='col'>
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