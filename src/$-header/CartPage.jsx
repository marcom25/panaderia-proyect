import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { RiShoppingBag2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { CartState } from "../$-context/Context";
import {useAlert} from "react-alert";
// import { cookies } from '../$-home/Home'

export const CartPage = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const cookies = new Cookies();

  const alert = useAlert()


  const [subTotal, setSubtotal] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setSubtotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );

    setTotal(
      cart.reduce(
        (acc, curr) =>
          acc +
          Number(curr.price) * curr.qty +
          Number(curr.price) * curr.qty * 0.21,
        0
      )
    );
  }, [cart]);


  const handleCheckout = () => {
    

    if (cookies.get('username')) {
      console.log('checkout');
    } else {
      alert.error('Iniciar Sesion para continuar', {
        timeout: 1500,
        onClose: () => window.location.assign('/login')
      })
    }

  }

  return (
    <>
      <section className="container-xs bg-cream pt-2 pb-5 ">
        <h2 className="px-2 my-0 text-uppercase">
          <RiShoppingBag2Line style={{ paddingBottom: "0.1rem" }} /> Mi carrito
        </h2>
        <hr className="w-100 mt-3" />
        <div className="d-lg-flex justify-content-center">
          <div className="row">
            <div className="col-12 p-0">
              <div className="row">
                <div className="col-12 p-0">
                  <div className="row">
                    {cart.map((prod) => (
                      <div className="col-12 p-0" key={prod.id}>
                        <div className="row">
                          <div className="col-4 ms-md-4 my-auto">
                            <img src={prod.image} alt="pancake" className="w-100" />
                          </div>
                          <div className="col-4">
                            <h4>{prod.name}</h4>
                            <div className="d-flex">
                              <div className="me-3">
                                <p>
                                  <span className="fw-bold">Precio:</span> $
                                  {prod.price}
                                </p>
                              </div>
                              <div className="ps-3">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  onChange={(e) =>
                                    dispatch({
                                      type: "CHANGE_CART_QTY",
                                      payload: {
                                        id: prod.id,
                                        qty: e.target.value,
                                      },
                                    })
                                  }
                                >
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 col-md-3 text-end ms-md-2">
                            <button
                              className="deleteIcon bg-cream fs-4"
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: prod,
                                })
                              }
                            >
                              <AiFillDelete className="deleteIcon brown-font" />
                            </button>
                          </div>
                        </div>
                        <hr className="w-100" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-8 text-start p-0 d-lg-none px-3">
                <h4 className="text-uppercase">Resumen de compra</h4>
                <hr className="w-100 p-0 m-0" />
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="mb-0">Subtotal</p>
                    <p>IVA +21%</p>
                  </div>
                  <div>
                    <p className="mb-0">$ {subTotal}</p>
                    <p>$ {subTotal * 0.21}</p>
                  </div>
                </div>
                <hr className="w-100 p-0 m-0" />
                <div className="d-flex justify-content-between">
                  <div>
                    <p>Total</p>
                  </div>
                  <div>
                    <p>$ {total}</p>
                  </div>
                </div>
                <div className="m-auto">
                  <div className="w-100">
                    <button className="w-100 fs-5 returnButton font-poppins buttonPay" onClick={handleCheckout} disabled={cart.length === 0}
                    >
                      Pagar
                    </button>
                  </div>
                </div>
              </div>
              <hr className="w-100 mt-3 d-lg-none" />
            </div>
          </div>

          <div className="col-12 col-lg-4 py-0 px-3 d-none d-lg-block">
            <div className="col-12 py-0 px-3 d-none d-lg-block">
              <h4 className="text-uppercase">Resumen de compra</h4>
              <hr className="w-100 p-0 m-0" />
              <div className="d-flex justify-content-between">
                <div>
                  <p className="mb-0">Subtotal </p>
                  <p>IVA +21%</p>
                </div>
                <div>
                  <p className="mb-0">$ {subTotal}</p>
                  <p>$ {subTotal * 0.21}</p>
                </div>
              </div>
              <hr className="w-100 p-0 m-0" />
              <div className="d-flex justify-content-between">
                <div>
                  <p>Total</p>
                </div>
                <div>
                  <p>$ {total}</p>
                </div>
              </div>
              <div className="m-auto">
                <div className="w-100 p-3">
                  <button
                    className="w-100 fs-5 returnButton font-poppins buttonPay"
                    onClick={handleCheckout}
                    disabled={cart.length === 0}
                  >
                    Pagar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-5">
          <h4 className="pb-3">¿Deseas volver a la seccion productos?</h4>
          <Link to="/productos">
            <button className="font-poppins returnButton">
              Volver a productos
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
