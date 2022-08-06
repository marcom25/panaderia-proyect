import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useAlert } from "react-alert";
import { useCart } from "../../../../contexts/Cart";
import { Container, Row, Col, Image } from "react-bootstrap";
import { TitlesHome } from "../../../Home/style/Components";

export const CartPage = () => {
  const { cart, removeFromCart, changeCartQty } = useCart();

  const cookies = new Cookies();

  const alert = useAlert();

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

  return (
    <Container className="bg-cream cart-container">
      <Row className="cart-row">
        <Col md={12}>
          <TitlesHome>CARRITO</TitlesHome>
        </Col>
        {cart.map((item) => (
          <Col md={8} className="item-col" key={item.id}>
            <Image src={item.image} alt={item.name} className="item-image" />
            <div>
              <div className="item-title">{item.name}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
