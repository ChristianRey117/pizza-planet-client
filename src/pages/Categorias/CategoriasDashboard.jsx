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
import CardCategory from "../../components/Card/CardCategory/CardCategory";
const baseURL = "http://localhost:5000/tipocategoria";

const CategoriasDashboard = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/categorias-form", { replace: true });
  };

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  const [categorias, setCategorias] = React.useState([{}]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCategorias(response.data);
    });
  }, []);

  return (
    <Helmet title="Categorias">
      <CommonSection title="Categorias Dashboard" />

      <section>
        <Row>
          <Col lg="12" style={{ textAlign: "center" }}>
            <h1>Categorias Activas</h1>
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
            {categorias.map((item, index) => {
              return (
                <Col
                  lg="4"
                  md="6"
                  sm="6"
                  key={index}
                  className="mt-2"
                  style={{
                    width: "22rem",
                    marginLeft: "22px",
                    height: "16rem",
                  }}
                >
                  <CardCategory
                    id_category={item.id_category}
                    name_category={item.name_category}
                    description={item.description}
                  ></CardCategory>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CategoriasDashboard;