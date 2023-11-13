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
import ENDPOINTS from "../../utils/constants";

import axios from "axios";
import CardOfert from "../../components/Card/CardOfertas/CardOfertas";
const baseURL = ENDPOINTS.OFERTAS;

const OfertasDashboard = () => {
  const dataAsync = () => {
    axios.get(baseURL).then((response) => {
      setOfert(response.data);
    });
  };
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/ofertas-form", { replace: true });
  };

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  const [ofertas, setOfert] = React.useState([{}]);

  React.useEffect(() => {
    dataAsync();
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
