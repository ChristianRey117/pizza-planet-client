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
import CardCategory from "../../components/Card/CardCategory/CardCategory";
import CardVecindarios from "../../components/Card/CardVecindarios/CardVecindarios";
import { DefaultDataProvider, Dashboard } from "superset-dashboard-sdk";

const VecindariosDashboard = () => {
  const navigate = useNavigate();

  const dataProvider = new DefaultDataProvider("http://20.84.102.134:8088", {
    username: "admin",
    password: "admin",
  });

  const goTo = () => {
    navigate("/vecindarios-form", { replace: true });
  };

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  return (
    <Helmet title="Estadisticas">
      <CommonSection title="Estadisticas Dashboard" />

      <section>
        <Row>
          <Col lg="12" style={{ textAlign: "center" }}>
            <h1>Estadisticas</h1>
          </Col>
        </Row>
      </section>

      <section
        style={{ paddingTop: "0px", paddingBottom: "0px", marginLeft: "50px" }}
      >
        <Container>
          <Row>
            <Col className="col-2 col-md-2 col-sm-2 mb-2">
              <Button
                size="lg"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={goToAdminDashboard}
              >
                Regresar
              </Button>
            </Col>
            <Col className="col-2 col-md-2 col-sm-2 mb-2">
              {/* <Button size="lg" color="success" onClick={goTo}>
                Agregar
              </Button> */}
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col style={{ height: "900px" }}>
              <Dashboard
                dataProvider={dataProvider}
                domain="http://20.84.102.134:8088"
                uuid={"3a58deb9-bc60-4f40-89d6-8dbf28f17f57"}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default VecindariosDashboard;
