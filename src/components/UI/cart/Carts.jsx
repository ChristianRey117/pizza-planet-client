import { ListGroup } from "reactstrap";
import React from "react";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/shopping-cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUISlice";
const Carts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const isLogin = () => {
    const token = JSON.parse(localStorage.getItem("datosUser"));
    let path;
    token === null ? (path = "/login") : (path = "/checkout");
    navigate(path, { replace: true });
    toggleCart();
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill" />
          </span>
        </div>
        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">
              No se ha seleccionado ningun producto
            </h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal: <span>${totalAmount}</span>
          </h6>
          <button onClick={isLogin}>Pagar</button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
