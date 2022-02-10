import React from 'react';

const ImgBlock = () => {
    return ( 
        <>
            <div className='col-sm p-0 bg-success '>
                <h1 className='mt-2 text-center'>lorem solarim dmowda mod </h1>
                <p className='mt-3 mb-5 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi nihil suscipit placeat nostrum? Molestiae, neque! Voluptate quas nihil eum vel iure placeat quaerat iusto natus, non quia mollitia doloribus velit!</p>
            </div>
            <div className='col-sm p-0 bg-danger d-flex justify-content-center'>
                <img className='pt-3 pb-3' src='https://picsum.photos/id/237/200/300' alt=''/>
            </div>
        </>
    );
}
 
export default ImgBlock;