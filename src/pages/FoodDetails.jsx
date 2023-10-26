import React, { useState, useEffect } from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../styles/product-details.css";
const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const { id } = useParams();
  const product = products.products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { id_product, product_name, product_price, ofert, category, image } =
    product;
  const relatedProduct = products.products.filter(
    (item) => category === item.category
  );
  const dispatch = useDispatch();
  const addItem = () => {
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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredEmail, reviewMsg);
  };

  useEffect(() => {
    setPreviewImg(product.image);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title="Food Details">
      <CommonSection title={product_name} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image)}
                >
                  <img src={product.image} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{product_name}</h2>
                <p className="product__price">
                  Precio: <span>${product_price}</span>
                </p>
                <p className="category mb-5">
                  Categoria: <span>{category}</span>
                </p>
                <button onClick={addItem} className="addToCart__btn">
                  Añadir al carrito
                </button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-2">
                <h6
                  className={tab === "desc" ? "tab__active" : ""}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
              </div>

              {/* <div className="tab__content">
                <p>{desc}</p>
              </div> */}
            </Col>
            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__product-title">Tal vez te guste</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
