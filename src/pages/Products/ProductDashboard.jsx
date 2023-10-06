import React, { useState } from "react";

import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import imageSuc1 from "../../assets/images/PizzaPlaneta1.jpg";
import imageSuc2 from "../../assets/images/PizzaPlaneta2.jpg";
import imageSuc3 from "../../assets/images/PizzaPlaneta3.jpg";
import products from "../../assets/fake-data/products";

const cardProducts = [
  {
    name: "Salsa Bufalo",
    image: imageSuc1,
    price: "MXN 5.00",
    describe: "Salsa picante",
    path: "/product-form",
    id_ofert: 1,
  },
  {
    name: "Salsa Bufalo",
    image: imageSuc2,
    price: "MXN 5.00",
    describe: "Salsa picante",
    path: "/product-form",
    id_ofert: 1,
  },

  {
    name: "Cheese",
    image: imageSuc3,
    price: "MXN 5.00",
    describe: "Queso extra",
    path: "/product-form",
    id_ofert: 1,
  },

  {
    name: "Salsa Tomate",
    image: imageSuc1,
    price: " MXN 5.00",
    describe: "Salsa de tomate",
    path: "/product-form",
    id_ofert: 1,
  },

  {
    name: "Salsa Bufalo",
    image: imageSuc1,
    price: "MXN 5.00",
    describe: "Salsa picante",
    path: "/product-form",
    id_ofert: 1,
  },
  {
    name: "Salsa Bufalo",
    image: imageSuc1,
    price: "MXN 5.00",
    describe: "Salsa picante",
    path: "/product-form",
    id_ofert: 1,
  },
];

const ProductDashboard = () => {
  const navigate = useNavigate();

  const agregarProducto = () => {
    navigate("/product-form", { replace: true });
  };

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  return (
    <Helmet title="Productos">
      <CommonSection title="Productos Adimistrador" />

      <section>
        <Row>
          <Col lg="12" style={{ textAlign: "center" }}>
            <h1>Productos Dashboard</h1>
          </Col>
        </Row>
      </section>

      <section
        style={{ paddingTop: "0px", paddingBottom: "0px", marginLeft: "50px" }}
      >
        <Container>
          <Row>
            <Col lg="1">
              <Button size="lg" color="secondary" onClick={goToAdminDashboard}>
                Regresar
              </Button>
            </Col>
            <Col lg="1">
              <Button size="lg" color="success" onClick={agregarProducto}>
                Agregar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {cardProducts.map((item, index) => {
              return (
                <Col
                  lg="4"
                  md="6"
                  sm="6"
                  key={index}
                  className="mt-2 mb-5"
                  style={{ width: "36rem", marginLeft: "45px" }}
                >
                  <Card
                    style={{
                      width: "34rem",
                    }}
                  >
                    <CardBody>
                      <Row>
                        <Col lg="6">
                          <img
                            alt="product"
                            src={item.image}
                            style={{ width: "180px" }}
                          />
                        </Col>

                        <Col lg="6">
                          <CardTitle tag="h5">{item.name}</CardTitle>

                          <CardText>
                            {item.describe}
                            <p>{item.price}</p>
                          </CardText>
                          <div style={{ position: "absolute", bottom: "15px" }}>
                            <Row>
                              <Col lg="6">
                                <Button color="warning">
                                  <Link
                                    to={item.path}
                                    style={{ color: "white" }}
                                  >
                                    Editar
                                  </Link>
                                </Button>
                              </Col>
                              <Col lg="6">
                                <Button color="danger">
                                  <Link
                                    to={item.path}
                                    style={{ color: "white" }}
                                  >
                                    Eliminar
                                  </Link>
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDashboard;
