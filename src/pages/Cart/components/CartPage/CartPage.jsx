import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useAlert } from "react-alert";
import { useCart } from "../../../../contexts/Cart";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import { HiOutlineTrash } from "react-icons/hi";

import { TitlesHome } from "../../../Home/style/Components";

export const CartPage = () => {
  const { cart, removeFromCart, changeCartQty } = useCart();

  const cookies = new Cookies();

  const alert = useAlert();

  const [subTotal, setSubtotal] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    if (cookies.get("username")) {
      console.log("checkout");
    } else {
      alert.error("Iniciar Sesion para continuar", {
        timeout: 1500,
        onClose: () => window.location.assign("/login"),
      });
    }
  };

  const handleCheckoutMobile = () => {
    if (cookies.get("username")) {
      console.log("checkout");
    } else {
      alert.error("Iniciar Sesion para continuar", {
        timeout: 1500,
        position: "bottom center",
        onClose: () => window.location.assign("/login"),
      });
    }
  };

  const handleRemoveQty = (item) => {
    item.qty -= 1;
    item.qty === 0 ? removeFromCart(item) : changeCartQty(item.id, item.qty);
  };

  const handleAddQty = ({ id, qty }) => {
    qty += 1;
    changeCartQty(id, qty);
  };

  return (
    <Container className="bg-cream cart-container">
      <Row className="cart-row">
        <Col md={12}>
          <TitlesHome className="brown-font">CARRITO</TitlesHome>
        </Col>
        {cart.map((item) => (
          <Col md={8} className="item-col" key={item.id}>
            <Image src={item.image} alt={item.name} className="item-image" />
            {/* MOBILE <576px */}
            <div className="mobile-manager">
              <h1 className="item-title font-poppins brown-font">
                {item.name}
              </h1>
              <div className="mobile-qty-manager">
                {item.qty === 1 ? (
                  <Button
                    className="btn-delete"
                    onClick={() => handleRemoveQty(item)}
                  >
                    <HiOutlineTrash />
                  </Button>
                ) : (
                  <Button
                    className="btn-qty font-poppins"
                    onClick={() => handleRemoveQty(item)}
                  >
                    -
                  </Button>
                )}
                <Form.Control
                  type="number"
                  className="input-qty font-poppins"
                  value={item.qty}
                />
                <Button
                  className="btn-qty font-poppins"
                  onClick={() => handleAddQty(item)}
                >
                  +
                </Button>
              </div>

              <div className="item-price font-poppins brown-font">
                ${item.price}
              </div>
            </div>

            {/* DESKTOP >576px*/}
            <div className="manager-item-info">
              <h1 className="item-title font-poppins brown-font">
                {item.name}
              </h1>
              <div className="item-description font-bitter brown-font">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                quod saepe a, nobis esse provident cupiditate porro
              </div>
              <div className="item-price font-poppins brown-font">
                ${item.price}
              </div>
            </div>
            <div className="qty-manager">
              {item.qty === 1 ? (
                <Button
                  className="btn-delete"
                  onClick={() => handleRemoveQty(item)}
                >
                  <HiOutlineTrash />
                </Button>
              ) : (
                <Button
                  className="btn-qty font-poppins"
                  onClick={() => handleRemoveQty(item)}
                >
                  -
                </Button>
              )}
              <Form.Control
                type="number"
                className="input-qty font-poppins"
                value={item.qty}
              />
              <Button
                className="btn-qty font-poppins"
                onClick={() => handleAddQty(item)}
              >
                +
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      <Row className="pay-row">
        <Col md={8} className="pay-col">
          <div className="manager-pay">
            <h3 className="subtotal font-poppins brown-font">
              Subtotal <span className="number">${subTotal}</span>
            </h3>
            <h1 className="total font-poppins brown-font">
              Total <span className="number">${total}</span>
            </h1>
          </div>
          <div className="manager-button">
            <Link to="/error" className="pay-button">
              Ir a Pagar
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
