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
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import CardOfert from "../../components/Card/CardOfertas/CardOfertas";
const baseURL = "http://localhost:5000/ofertas";
// const ofertas = [
//   {
//     name: " Noche de Banderillas",
//     describe:
//       "Añade a tu carrito dos ordenes de banderillas y disfruta de un descuento de $100 pesos en toda tu cuenta. ",
//     discount: 100,
//     path: "/sucursales-dashboard",
//     buttonText: "Añadir",
//   },
//   {
//     name: "Pizza del día",
//     describe:
//       "Hoy es el día de nuestra Pizza Margarita, y la puedes disfrutar con un increíble descuento de $40 pesos. ",
//     discount: 40,
//     path: "/ofertas-form",
//     buttonText: "Añadir",
//   },

//   {
//     name: "Doble pizza, doble diversión",
//     describe: "Ordena dos pizzas y obten un descuento de $120 pesos. ",
//     discount: 70,
//     path: "/ofertas-form",
//     buttonText: "Añadir",
//   },

//   {
//     name: "Favorito de todos",
//     describe:
//       "Si tu pizza favorita es la de pepperoni, acompañala con un refresco y unas papas fritas, para obtener un descuento de $90 pesos. ",
//     discount: 90,
//     path: "/ofertas-form",
//     buttonText: "Añadir",
//   },

//   {
//     name: "Refrescante",
//     describe:
//       "Añade más de cuatro bebidas a tu cuenta y obten un descuento de $110. pesos. ",
//     discount: 110,
//     path: "/ofertas-form",
//     buttonText: "Añadir",
//   },
//   {
//     name: "Veganos en acción",
//     describe:
//       "Disfruta de un descuento fijo de $50 pesos en cualquier pizza vegana o vegetariana. ",
//     discount: 50,
//     path: "/ofertas-form",
//     buttonText: "Añadir",
//   },
// ];
const OfertasDashboard = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/ofertas-form", { replace: true });
  };

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  const [ofertas, setOfert] = React.useState([{}]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setOfert(response.data);
    });
  }, []);

  return (
    <Helmet title="Ofertas">
      <CommonSection title="Ofertas Dashboard" />

      <section>
        <Row>
          <Col lg="12" style={{ textAlign: "center" }}>
            <h1>Ofertas Activas </h1>
          </Col>
        </Row>
      </section>

      <section
        style={{ paddingTop: "0px", paddingBottom: "0px", marginLeft: "50px" }}
      >
        <Container>
          <Row>
            <Col
              className="col-2 col-md-2 col-sm-2 mb-2"
              style={{ marginLeft: "60px" }}
            >
              <Button
                size="lg"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={goToAdminDashboard}
              >
                Regresar
              </Button>
            </Col>
            <Col className="col-2 col-md-2 col-sm-2 mb-2">
              <Button size="lg" color="warning" onClick={goTo}>
                Agregar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {ofertas.map((item, index) => {
              return (
                <Col
                  lg="4"
                  md="6"
                  sm="6"
                  key={index}
                  className="mt-2 mb-5"
                  style={{ width: "36rem", marginLeft: "45px" }}
                >
                  <CardOfert
                    id_ofert={item.id_ofert}
                    name_ofert={item.name_ofert}
                    discount={item.discount}
                    description={item.description}
                    image={item.image}
                  ></CardOfert>
                  {/* <Card
                    style={{
                      width: "34rem",
                      height: "16rem",
                    }}
                  >
                    <CardBody>
                      <Row>
                        <Col lg="6">
                          <ListGroup>
                            <ListGroupItem>
                              Descuento: {item.discount}
                            </ListGroupItem>
                          </ListGroup>
                        </Col>

                        <Col lg="6">
                          <CardTitle tag="h5">{item.name}</CardTitle>

                          <CardText>{item.describe}</CardText>
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
                  </Card> */}
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default OfertasDashboard;
