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
import CardVecindarios from "../../components/Card/CardVecindarios/CardVecindarios";
const baseURL = "http://localhost:5000/vecindarios";

const VecindariosDashboard = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/vecindarios-form", { replace: true });
  };

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  const [vecindarios, setVecindarios] = React.useState([{}]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setVecindarios(response.data);
    });
  }, []);

  return (
    <Helmet title="Vecindarios">
      <CommonSection title="Vecindarios Dashboard" />

      <section>
        <Row>
          <Col lg="12" style={{ textAlign: "center" }}>
            <h1>Vecindarios Activos</h1>
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
            {vecindarios.map((item, index) => {
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
                  <CardVecindarios
                    id_branch={item.id_branch}
                    id_neighborhood={item.id_neighborhood}
                    neighborhood_name={item.neighborhood_name}
                    branch={item.branch}
                  ></CardVecindarios>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default VecindariosDashboard;
