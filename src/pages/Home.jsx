import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/header2.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/fake-data/products.js";
import rocket from "../assets/images/network.gif";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import { DefaultDataProvider, Dashboard } from "superset-dashboard-sdk";

const featureData = [
  {
    title: "Entrega Cohete",
    imgUrl: featureImg01,
    desc: "Nos preocupamos por que tus órdenes lleguen a tiempo.",
  },
  {
    title: "Calidad Galáctica",
    imgUrl: featureImg02,
    desc: "Los platillos mantienen su calor con nuestras bolsas térmicas.",
  },
  {
    title: "En toda la galaxia",
    imgUrl: featureImg03,
    desc: "Nos encontramos en cada rincón de Mérida.",
  },
];

const dataProvider = new DefaultDataProvider("http://20.84.102.134:8088", {
  username: "admin",
  password: "admin",
});
const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.products.filter(
      (item) => item.category === "Pizza"
    );
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);
  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="12" md="12">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
              {/* <Dashboard
                dataProvider={dataProvider}
                domain="http://20.84.102.134:8088"
                uuid={"eb08c304-8fb9-4204-a596-a2fdf464c8cf"}
              /> */}
            </Col>
          </Row>
        </Container>
      </section>
      {/* <Row style={{ marginBottom: "35px" }}> */}
      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            {featureData.map((item, index) => {
              return (
                <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                  <div className="feature__item text-center px-5 py-3">
                    <img
                      className="w-25 mb-3"
                      src={item.imgUrl}
                      alt="feature-img"
                    />
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-foodie" className="w-100"></img>
            </Col>
            <Col lg="6" md="6">
              <div className="why__foodie">
                <h2 className="foodie-title mb-4">
                  ¿Por qué <span>Pizza Planeta?</span>
                </h2>
                <p className="foodie-desc">
                  <i> Pizza Planeta </i> es más que un lugar para satisfacer tu
                  hambre. Es un punto de encuentro donde amigos y familias
                  pueden compartir momentos especiales mientras disfrutan de
                  nuestras deliciosas creaciones. Nuestro ambiente acogedor y
                  nuestro personal amable te hacen sentir como en casa.
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Comida fresca y
                      deliciosa
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Soporte de
                      calidad
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Diferentes
                      sucursales
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-40">
                  ¿Qué están <span>diciendo </span>los alienígenas?
                </h2>
                <p className="testimonial__desc">
                  Gracias por elegir <i> Pizza Planeta </i> como tu destino
                  culinario en Mérida. Esperamos que disfrutes explorando los
                  sabores del espacio exterior a través de nuestras pizzas
                  únicas y auténticas. Ven a visitarnos y únete a nosotros en
                  esta emocionante aventura gastronómica.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              {/* <img src={networkImg} alt="testimonial-img" className="w-100" /> */}
              <div className="gif-container">
                <img
                  className="w-100"
                  src={rocket}
                  alt="gif-img"
                  // style={{ width: "661px", height: "661px" }}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
