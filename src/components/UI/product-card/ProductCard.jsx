import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/product-card.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const baseImage = "http://localhost:5000/images";

const ProductCard = (props) => {
  const { id_product, product_name, product_price, ofert, category, image } =
    props.item;
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id_product,
        product_name,
        product_price,
        ofert,
        category,
        image,
      })
    );
  };
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={baseImage + "/" + image} alt="product-img" className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/foods/${id_product}`}>{product_name}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${product_price}</span>
          <button onClick={addToCart} className="addToCart__btn">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
