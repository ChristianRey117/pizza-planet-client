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
import imageSuc1 from "../../assets/images/PizzaPlaneta1.jpg";
import imageSuc2 from "../../assets/images/PizzaPlaneta2.jpg";
import imageSuc3 from "../../assets/images/PizzaPlaneta3.jpg";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";

const productosCompras = [
  {
    name: "Inventario Actual",
    sucursal: "Luna",
    ammountQueso: "10kg",
    ammountSalsa: "20L",
    ammountHarina: "50kg",
    ammountChampiñones: "10kg",
    ammountPineapple: "10kg",
    ammountChiles: "5kg",
    path: "/inventario-form",
    buttonText: "Ir a Sucursal",
  },
  {
    name: "Inventario Actual",

    sucursal: "Jupiter",
    ammountQueso: "15kg",
    ammountSalsa: "22L",
    ammountHarina: "34kg",
    ammountChampiñones: "65kg",
    ammountPineapple: "12kg",
    ammountChiles: "3kg",
    path: "/inventario-form",
    buttonText: "Ir a Sucursal",
  },

  {
    name: "Inventario Actual",

    sucursal: "Marte",
    ammountQueso: "40kg",
    ammountSalsa: "10L",
    ammountHarina: "20kg",
    ammountChampiñones: "15kg",
    ammountPineapple: "13kg",
    ammountChiles: "51kg",
    path: "/inventario-form",
    buttonText: "Ir a Sucursal",
  },
];

const ComprasDashboard = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/inventario-form", { replace: true });
  };

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  return (
    <Helmet title="Inventario">
      <CommonSection title="Compras Admistrador" />

      <section>
        <Row>
          <Col lg="12" style={{ textAlign: "center" }}>
            <h1>Compras Dashboard</h1>
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
                Filtro
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {productosCompras.map((item, index) => {
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
                          <ListGroup>
                            <ListGroupItem>
                              Sucursal: {item.sucursal}
                            </ListGroupItem>
                            <ListGroupItem>
                              Queso disponible: {item.ammountQueso}
                            </ListGroupItem>
                            <ListGroupItem>
                              Salsa disponible: {item.ammountSalsa},
                            </ListGroupItem>
                            <ListGroupItem>
                              Champiñones disponible: {item.ammountChampiñones},
                            </ListGroupItem>
                            <ListGroupItem>
                              Piña disponible: {item.ammountPineapple}
                            </ListGroupItem>
                            <ListGroupItem>
                              Chiles disponibles: {item.ammountChiles}
                            </ListGroupItem>
                          </ListGroup>
                        </Col>

                        <Col lg="6">
                          <CardTitle tag="h5">{item.name}</CardTitle>

                          <CardText>{item.describe}</CardText>
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

export default ComprasDashboard;
