import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import "../styles/cart-page.css";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";

const baseImage = "http://localhost:5000/images";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Carrito">
      <CommonSection title="Tu carrito" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Tu carrito esta vacio</h5>
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
                <p>Impuestos y envio seran calculados al pago</p>
                <div className="cart__page-btn">
                  <button className="addToCart__btn me-4">
                    <Link to="/foods">Continuar Comprando</Link>
                  </button>
                  <button className="addToCart__btn">
                    <Link to="/checkout">Proceder al Pago</Link>
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
  } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => dispatch(cartActions.deleteItem(id_product));
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={baseImage + "/" + image} alt="food"></img>
      </td>
      <td className="text-center">{product_name}</td>
      <td className="text-center">${product_price}</td>
      <td className="text-center">{quantity} pcs</td>
      <td onClick={deleteItem} className="text-center cart__item-del">
        <i className="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
