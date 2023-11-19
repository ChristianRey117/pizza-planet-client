import React, { useState, useEffect } from "react";

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
  Input,
} from "reactstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import axios from "axios";
import CardCompras from "../components/Card/CardCompras/CardCompras";
import CardComprasUsuario from "../components/Card/CardComprasUsuario/CardComprasUsuario";
import ENDPOINTS from "../utils/constants";

const baseURL = ENDPOINTS.COMPRAS_USUARIO;
const baseUrlImage = ENDPOINTS.BASE_IMAGES;

const ComprasUsuario = () => {
  const dataAsync = async () => {
    const user = JSON.parse(localStorage.getItem("datosUser"));
    setUserData(user);

    axios.get(baseURL + "/" + user.id_usuario).then((response) => {
      setVentas(response.data);
    });
  };

  const navigate = useNavigate();

  const goToAdminDashboard = () => {
    navigate("/usuarios-form/" + userData.id_usuario, { replace: true });
  };

  const [ventas, setVentas] = useState([]); // Usar un array vacío en lugar de [{}]
  const [userData, setUserData] = useState({});

  React.useEffect(() => {
    dataAsync();
  }, []);

  return (
    <div>
      <Helmet title="Tus compras">
        <CommonSection title="Tus compras" />

        <section>
          <Row>
            <Col lg="12" style={{ textAlign: "center" }}>
              <h1>Compras Dashboard</h1>
            </Col>
          </Row>
        </section>

        <section
          style={{
            paddingTop: "0px",
            paddingBottom: "0px",
            marginLeft: "50px",
          }}
        >
          <Container>
            <Row>
              <Col
                className="col-2 col-md-2 col-sm-2 mb-2"
                style={{ marginLeft: "-30px" }}
              >
                <Button
                  size="lg"
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={goToAdminDashboard}
                >
                  Regresar
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              {ventas.map((item, index) => (
                <CardComprasUsuario compras={item}></CardComprasUsuario>
              ))}
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default ComprasUsuario;
