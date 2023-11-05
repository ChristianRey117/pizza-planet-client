import React from "react";
import { ListGroupItem } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/cart-item.css";

const baseImage = "http://localhost:5000/images";

const CartItem = ({ item }) => {
  const {
    id_product,
    product_name,
    product_price,
    ofert,
    category,
    image,
    quantity,
    discount,
  } = item;
  const dispatch = useDispatch();
  const increaseItem = () => {
    dispatch(
      cartActions.addItem({
        id_product,
        product_name,
        product_price,
        ofert,
        category,
        image,
        discount,
      })
    );
  };
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id_product));
  };
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id_product));
  };

  const caseOfert = (ofertas) => {
    switch (ofertas) {
      case "Porcentaje":
        return product_price - ((product_price / 100) * discount).toFixed(2);
        break;
      case "Cantidad":
        return product_price - discount;
        break;
      default:
      case "NINGUNA":
        return product_price;
        break;
    }
  };

  return (
    <ListGroupItem className="border-0 cart__item" key={id_product}>
      <div className="cart__item-info d-flex gap-2">
        <img src={baseImage + "/" + image} alt="product-img" />
        <div className="cart__product-info w-100 d-flex align-items-center justify-content-between gap-4">
          <div>
            <h6 className="cart__product-title">{product_name}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              x {quantity} = <span>${caseOfert(ofert)}</span>
            </p>

            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span onClick={increaseItem} className="increase__btn">
                <i className="ri-add-line" />
              </span>
              <span className="quantity">{quantity}</span>
              <span onClick={decreaseItem} className="decrease__btn">
                <i className="ri-subtract-line" />
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i className="ri-close-line" />
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
