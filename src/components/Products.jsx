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
                        <input type="radio" className="d-none" name="categories" id='Todo' value='Todo'/>
                        <label className='brown-font line-height-products d-block mb-1 container-category' for="Todo" style={{fontWeight: '470'}}>Todos los productos</label>
                        <hr className="m-0"/>
                        <div className='filters'>
                            <h5 className='brown-font mb-1' style={{fontSize: '1.1rem'}}>Pastelería</h5>
                            <ul className='list-unstyled line-height-products mb-3'>
                                <input type="radio" className="" name="categories" id="Brownies" value='Brownies' />
                                <input type="radio" className="" name="categories" id="Tortas" value='Tortas'/>
                                <input type="radio" className="d-none" name="categories" id="Masitas" value='Masitas'/>
                                <input type="radio" className="d-none" name="categories" id="Tartas" value='Tartas'/>
                                <input type="radio" className="d-none" name="categories" id="Macaroons" value='Macaroons'/>
                                <input type="radio" className="d-none" name="categories" id="Muffins" value='Muffins'/>
                                <input type="radio" className="d-none" name="categories" id="Budines" value='Budines'/>
                                <input type="radio" className="d-none" name="categories" id="Cheesecakes" value='Cheesecakes'/>
                                
                                <label className='brown-font d-block container-category' for="Brownies">Brownies</label>
                                <label className='brown-font d-block container-category' for="Tortas">Tortas</label>
                                <label className='brown-font d-block container-category' for="Masitas">Masitas</label>
                                <label className='brown-font d-block container-category' for="Tartas">Tartas</label>
                                <label className='brown-font d-block container-category' for="Macaroons">Meriendas</label>
                                <label className='brown-font d-block container-category' for="Muffins">Muffins</label>
                                <label className='brown-font d-block container-category' for="Budines">Budines</label>
                                <label className='brown-font d-block container-category' for="Cheesecakes">Cakes</label>
                            </ul>
                        </div>
                        <div>
                            <h5 className='line-height-products mb-1' style={{fontSize: '1.1rem'}}>Bebidas calientes</h5>
                            <ul className='list-unstyled line-height-products'>

                                <input type="radio" className="d-none" name="categories" id="Café" value='Café'/>
                                <input type="radio" className="d-none" name="categories" id="Té" value='Té'/>
                                <input type="radio" className="d-none" name="categories" id="Chocolatada" value='Chocolatada'/>

                                <label className='brown-font d-block container-category' for="Café">Café</label>
                                <label className='brown-font d-block container-category' for="Té">Té</label>
                                <label className='brown-font d-block container-category' for="Cheesecakes">Chocolate</label>
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap posts'>
                        <div className='cardsWidth p-2 py-4 bg-cream post' data-category="Brownies">
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Brownies</h5>
                                    <p className='brown-font font-weight-700'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream post' data-category="Tortas">
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Tortas</h5>
                                    <p className='brown-font font-weight-700'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream post' data-category="Masitas">
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Masitas</h5>
                                    <p className='brown-font font-weight-700'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream post' data-category="Tartas">
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Tartas</h5>
                                    <p className='brown-font font-weight-700'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream post' data-category="Macaroons">
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Meriendas</h5>
                                    <p className='brown-font font-weight-700'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream post' data-category="Muffins">
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Muffins</h5>
                                    <p className='brown-font font-weight-700'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream post' data-category="Budines">
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Budines</h5>
                                    <p className='brown-font font-weight-700'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream post' data-category="Cheesecakes">
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Cakes</h5>
                                    <p className='brown-font font-weight-700'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream post' data-category="Café">
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Café</h5>
                                    <p className='brown-font font-weight-700'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream post' data-category="Té">
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Té</h5>
                                    <p className='brown-font font-weight-700'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream post' data-category="Chocolatada">
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Chocolatada</h5>
                                    <p className='brown-font font-weight-700'>$500</p>
                                </div>
                                <div className='m-auto'>
                                    <a href="#" class="btn cardsButton bg-brown white-font">+Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className='cardsWidth p-2 py-4 bg-cream post' data-category="Chocolatada">
                            <div class="card bg-cream w-100 border-0">
                                <img src={image1} class="card-img-top w-100 imgWidth" alt="..." />
                                <div class="card-body bg-cream p-0 d-flex justify-content-between">
                                    <h5 class="card-title brown-font">Chocolatada</h5>
                                    <p className='brown-font font-weight-700'>$500</p>
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