import React, { useState } from "react";

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
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import imageSuc1 from "../../assets/images/provedor_01.jpg";
import imageSuc2 from "../../assets/images/provedor_02.jpg";
import imageSuc3 from "../../assets/images/provedor_03.jpg";
import imageSuc4 from "../../assets/images/provedor_04.jpg";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";

const productosInventario = [
  {
    name: "Bola Roja",
    productProveedor: "Harina",
    imageProveedor: imageSuc3,
    path: "/proveedor-form",
  },
  {
    name: "Santos Lugo",
    productProveedor: "Queso",
    imageProveedor: imageSuc1,
    path: "/proveedor-form",
  },

  {
    name: "Global Food",
    productProveedor: "Piña",
    imageProveedor: imageSuc4,
    path: "/proveedor-form",
  },

  {
    name: "Costeña",
    productProveedor: "Salsa",
    imageProveedor: imageSuc2,
    path: "/proveedor-form",
  },
];

const ProveedoresDashboard = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/proveedores-form", { replace: true });
  };

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  return (
    <Helmet title="Proveedores">
      <CommonSection title="Proveedores Admistrador" />

      <section>
        <Row>
          <Col lg="12" style={{ textAlign: "center" }}>
            <h1>Proveedores Dashboard</h1>
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
              <Button size="lg" color="success" onClick={goTo}>
                Agregar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {productosInventario.map((item, index) => {
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
                            src={item.imageProveedor}
                            alt=""
                            style={{ width: "180px" }}
                          />
                        </Col>

                        <Col lg="6">
                          <CardTitle tag="h5">Proveedor: {item.name}</CardTitle>

                          <CardText>Producto: {item.productProveedor}</CardText>
                          <div style={{ position: "absolute", bottom: "15px" }}>
                            <Row>
                              <Col lg="6">
                                <Button color="warning" onClick={goTo}>
                                  <Link
                                    to={item.path}
                                    style={{ color: "white" }}
                                  >
                                    Editar
                                  </Link>
                                </Button>
                              </Col>
                              <Col lg="6">
                                <Button color="danger" onClick={goTo}>
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

export default ProveedoresDashboard;
