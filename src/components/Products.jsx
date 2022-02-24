// IMPORTS DE MODULOS
import React, { useState } from 'react';

// IMPORTS DE COMPONENTES
import Navbar from '../utils/Navbar';
import Sidebar from '../utils/Sidebar';
import Footer from '../utils/Footer';
import AllDataProducts from './AllDataProducts';
import ButtonBakery from './ButtonBakery';
import ButtonHotDrinks from './ButtonHotDrinks';
import ButtonAllProducts from './ButtonAllProducts';
import CardsProducts from './CardsProducts';

// IMPORTS DE CSS
import "../css/Grid.css";
import "../css/Colors.css";
import "../css/Collage.css";
import "../css/Fonts.css";
import "../css/Products.css";



const allCategories = ['All', ...new Set(AllDataProducts.map(item => item.product))];


const Products = () => {
    const [cards, setCards] = useState(AllDataProducts);
    const [buttons, setButtons] = useState(allCategories);

    const filter = (category) => {
        if (category === 'All') {
            setCards(AllDataProducts);
            return;
        }

        const filteredData = AllDataProducts.filter(items => items.product === category);
        setCards(filteredData);
    }

    return ( 
        <>
            <div className="container-xs bg-cream" style={{padding: "0"}}>
                <div className='row'>
                    <div className='col-12 p-0 bg-pink' style={{overflow: 'hidden'}}>
                        <Navbar />
                        <Sidebar/>
                    </div>
                </div>
                <section className='container-xs bg-cream pt-2 pb-5'>
                    <h3 className= 'py-4 text-center brown-font'>Productos</h3>
                    <div className='text-center'>
                        <div class="dropdown pt-2 pb-4 d-md-none">
                            <button class="btn bg-brown white-font dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">Todas las categorias</button>
                            <ul class="dropdown-menu bg-cream brown-font text-center ms-2 fw-bold" aria-labelledby="dropdownMenu2">
                                    <ButtonAllProducts buttons={buttons} filter={filter} className='fw-bold bg-brown-hover' />
                                    <ButtonBakery buttons={buttons} filter={filter}/>
                                    <ButtonHotDrinks buttons={buttons} filter={filter}/>
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='d-none d-md-block ps-4 pe-5' style={{width: 'min-content'}}>
                            <ButtonAllProducts buttons={buttons} filter={filter}/>
                            <hr className="m-0"/>
                            <div className='filters'>
                                <h5 className='brown-font mb-1' style={{fontSize: '1.1rem'}}>Pastelería</h5>
                                <ul className='list-unstyled line-height-products mb-3'>
                                    <ButtonBakery buttons={buttons} filter={filter}/>
                                </ul>
                            </div>
                            <div>
                                <h5 className='line-height-products mb-1' style={{fontSize: '1.1rem'}}>Bebidas calientes</h5>
                                <ul className='list-unstyled line-height-products'>
                                    <ButtonHotDrinks buttons={buttons} filter={filter}/>
                                </ul>
                            </div>
                        </div>
                        <div className='d-flex flex-wrap posts pe-lg-4 pe-xl-5 w-100'>
                            <CardsProducts cards={cards}/>
                        </div>
                    </div>
                </section>
                <div className='row'>
                    <div className='p-0 '>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Products;