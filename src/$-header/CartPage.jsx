// 
import React from 'react';
import { Link } from "react-router-dom";

// 
import pancake from "../images/bakery/pancakes.jpg";

// 
import { RiDeleteBin6Line, RiShoppingBag2Line } from "react-icons/ri";


// 
import "../css/Colors.css";
import "../css/CartPage.css";


const CartPage = () => {
    return ( 
        <section className="container-xs bg-cream pt-2 pb-5">
            <h2 className='px-2 my-0 text-uppercase'><RiShoppingBag2Line style={{paddingBottom: '0.1rem'}}/> Mi carrito</h2>
            <div className='row'>
                <hr className='w-100 mt-3'/>
                <div className='col-12 col-lg-8 p-0'>
                    <div className='row'>
                        <div className='col-4 ms-md-4'>
                            <img src={pancake} alt="pancake" className='w-100' />
                        </div>
                        <div className='col-4'>
                            <h4>Pancake</h4>
                            <div className='d-flex'>
                                <div className='me-3'>
                                    <p><span className='fw-bold'>Precio:</span> $400</p>
                                </div>
                                <div className='ps-3'>
                                    <div class="dropdown">
                                        <a class="btn bg-white dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            1
                                        </a>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">1</a></li>
                                            <li><a class="dropdown-item" href="#">2</a></li>
                                            <li><a class="dropdown-item" href="#">3</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 col-md-3 text-end ms-md-2'>
                            <h4><RiDeleteBin6Line className='deleteIcon'/></h4>
                        </div>
                    </div>
                    <hr className='w-100'/>
                </div>
                <div className='col-12 col-lg-4 py-0 px-3 d-none d-lg-block'>
                    <h4 className="text-uppercase">Resumen de compra</h4>
                    <hr className='w-100 p-0 m-0'/>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p>Subtotal</p>
                        </div>
                        <div>
                            <p>$400</p>
                        </div>
                    </div>
                    <hr className='w-100 p-0 m-0'/>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p>Total</p>
                        </div>
                        <div>
                            <p>$400</p>
                        </div>
                    </div>
                    <div className='m-auto'>
                        <div className='w-100 p-3'>
                            <button className='w-100 fs-5 buttons bg-brown white-font py-1'>Pagar</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-8 text-start p-0 d-lg-none px-3'>
                    <h4 className="text-uppercase">Resumen de compra</h4>
                    <hr className='w-100 p-0 m-0'/>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p>Subtotal</p>
                        </div>
                        <div>
                            <p>$400</p>
                        </div>
                    </div>
                    <hr className='w-100 p-0 m-0'/>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p>Total</p>
                        </div>
                        <div>
                            <p>$400</p>
                        </div>
                    </div>
                    <div className='m-auto'>
                        <div className='w-100'>
                            <button className='w-100 fs-5 buttons bg-brown white-font py-1'>Pagar</button>
                        </div>
                    </div>
                </div>
                <hr className='w-100 mt-3 d-lg-none'/>
                <div className='text-center py-5'>
                    <h4 className='pb-3'>¿Deseas volver a la seccion productos?</h4> 
                    <Link to="/productos"><button className='p-2 fs-4 bg-brown white-font buttons'>Volver a productos</button></Link>
                </div>
            </div>
        </section>
    );
}
 
export default CartPage;