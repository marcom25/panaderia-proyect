import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useAlert } from "react-alert";
import { useCart } from "../../../../contexts/Cart";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import {HiOutlineTrash} from "react-icons/hi"

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


  } 

  const handleAddQty = ({id, qty}) => {
    qty += 1;
    changeCartQty(id, qty);

  }

  return (
    <Container className="bg-cream cart-container">
      <Row className="cart-row">
        <Col md={12}>
          <TitlesHome>CARRITO</TitlesHome>
        </Col>
        {cart.map((item) => (
          <Col md={8} className="item-col" key={item.id}>
            <Image src={item.image} alt={item.name} className="item-image" />
            <div className="manager-item-info">
              <h1 className="item-title font-poppins">{item.name}</h1>
              <div className="item-description font-bitter">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                quod saepe a, nobis esse provident cupiditate porro
              </div>
              <div className="item-price font-poppins">
                ${item.price}
              </div>
            </div>
            <div className="qty-manager">
              {item.qty === 1? (
                  <Button className="btn-delete" onClick={() => handleRemoveQty(item)}><HiOutlineTrash/></Button>
                ):(
                  <Button className="btn-qty font-poppins" onClick={() => handleRemoveQty(item)}>-</Button>

              )}
              <Form.Control type="number" className="input-qty font-poppins" value={item.qty} />
              <Button className="btn-qty font-poppins" onClick={() => handleAddQty(item)}>+</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
