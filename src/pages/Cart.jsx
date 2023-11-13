import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import "../styles/cart-page.css";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Container, Col, Row } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import ENDPOINTS from "../utils/constants";

const baseImage = ENDPOINTS.BASE_IMAGES;

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const isLogin = () => {
    const token = JSON.parse(localStorage.getItem("datosUser"));
    let path;
    token === null ? (path = "/login") : (path = "/checkout");
    navigate(path, { replace: true });
  };

  return (
    <Helmet title="Carrito">
      <CommonSection title="Carrito" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Tu carrito está vacío</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
              <div className="mt-4">
                <h6>
                  Subtotal:
                  <span className="cart__subtotal"> ${totalAmount}</span>
                </h6>
                <p>Impuestos y envío serán calculados al momento del pago</p>
                <div className="cart__page-btn">
                  <button className="addToCart__btn me-4">
                    <Link to="/foods">Continuar Comprando</Link>
                  </button>
                  <button className="addToCart__btn" onClick={isLogin}>
                    Proceder al Pago
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const {
    id_product,
    product_name,
    product_price,
    ofert,
    category,
    image,
    quantity,
    discount,
  } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => dispatch(cartActions.deleteItem(id_product));
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={baseImage + "/" + image} alt="food"></img>
      </td>
      <td className="text-center">{product_name}</td>
      <td className="text-center">${caseOfert(props.item)}</td>
      <td className="text-center">{quantity} pcs</td>
      <td onClick={deleteItem} className="text-center cart__item-del">
        <i className="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

const caseOfert = (item) => {
  switch (item.ofert) {
    case "Porcentaje":
      return (
        item.product_price -
        ((item.product_price / 100) * item.discount).toFixed(2)
      );
      break;
    case "Cantidad":
      return item.product_price - item.discount;
      break;

    default:
    case "NINGUNA":
      return item.product_price;
      break;
  }
};

export default Cart;
