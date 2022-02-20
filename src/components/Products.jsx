import React from 'react';
import Navbar from '../utils/Navbar';
import Sidebar from '../utils/Sidebar';
import Footer from '../utils/Footer';

// IMPORTS DE CSS
import "../css/Grid.css";
import "../css/Colors.css";
import "../css/Collage.css";
import "../css/Fonts.css";
import "../css/Products.css";
// IMPORTS DE IMAGENES
import image1 from "../images/bakery/pancakes.jpg";
import image2 from "../images/bakery/donuts2.jpg";
import image3 from "../images/bakery/pie.jpg";
import image4 from "../images/bakery/bakery.jpg";
import image5 from "../images/bakery/bakery2.jpg";
import image6 from "../images/bakery/brownie.jpg";

const Products = () => {
    return ( 
        <>
            <div className="container-xs bg-cream" style={{padding: "0", overflow: 'hidden'}}>
            <div className='row'>
                <div className='col-12 p-0 bg-pink' style={{overflow: 'hidden'}}>
                    <Navbar />
                    <Sidebar/>
                </div>
            </div>
            <section className='container-xs bg-cream'>
                <h3 className= 'py-4 text-center brown-font'>Productos</h3>
                <div className='d-flex'>
                    <div className='d-none d-md-block ps-4 pe-5' style={{width: 'max-content'}}>
                        <h5 className='brown-font font-weight-800'>Todos los productos</h5>
                        <div>
                            <h5 className='brown-font font-weight-800'>Pastelería</h5>
                            <ul className='list-unstyled'>
                                <li className='brown-font'>Brownie</li>
                                <li className='brown-font'>Tortas</li>
                                <li className='brown-font'>Masitas</li>
                                <li className='brown-font'>Tartas</li>
                                <li className='brown-font'>Macaroons</li>
                                <li className='brown-font'>Muffins</li>
                                <li className='brown-font'>Budines</li>
                                <li className='brown-font'>Cheesecakes</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Bebidas calientes</h5>
                            <ul className='list-unstyled'>
                                <li>Café</li>
                                <li>Té</li>
                                <li>Chocolatada</li>
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap'>
                        <div className='cardsWidth p-2 py-4 bg-cream'>
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Pancakes</h5>
                                    <p className='brown-font font-weight-800'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream'>
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Pancakes</h5>
                                    <p className='brown-font font-weight-800'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream'>
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Pancakes</h5>
                                    <p className='brown-font font-weight-800'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream'>
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Pancakes</h5>
                                    <p className='brown-font font-weight-800'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream'>
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Pancakes</h5>
                                    <p className='brown-font font-weight-800'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream'>
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Pancakes</h5>
                                    <p className='brown-font font-weight-800'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream'>
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Pancakes</h5>
                                    <p className='brown-font font-weight-800'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream'>
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Pancakes</h5>
                                    <p className='brown-font font-weight-800'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream'>
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Pancakes</h5>
                                    <p className='brown-font font-weight-800'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream'>
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Pancakes</h5>
                                    <p className='brown-font font-weight-800'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream'>
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Pancakes</h5>
                                    <p className='brown-font font-weight-800'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream'>
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Pancakes</h5>
                                    <p className='brown-font font-weight-800'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
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