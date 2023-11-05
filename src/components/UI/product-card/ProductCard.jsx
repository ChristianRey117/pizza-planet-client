import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/product-card.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { Row, Container, Col, Card } from "reactstrap";
const baseImage = "http://localhost:5000/images";

const ProductCard = (props) => {
  const {
    id_product,
    product_name,
    product_price,
    ofert,
    category,
    image,
    discount,
  } = props.item;
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
        discount,
      })
    );
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
    <div className="product__item">
      <div className="product__img">
        <img src={baseImage + "/" + image} alt="product-img" className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/foods/${id_product}`}>{product_name}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <Row>
            <Col xs={12}>
              <span
                className="product__price"
                style={{
                  display: ofert !== "NINGUNA" ? "" : "none",
                  color: ofert !== "NINGUNA" ? "grey" : "",
                  textDecoration: ofert !== "NINGUNA" ? "line-through" : "",
                }}
              >
                ${product_price}{" "}
              </span>
            </Col>
            <Col xs={12}>
              <span className="product__price">${caseOfert(ofert)}</span>
            </Col>

            <Col xs={12} style={{ paddingTop: "2%" }}>
              <button onClick={addToCart} className="addToCart__btn">
                Añadir al carrito
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
