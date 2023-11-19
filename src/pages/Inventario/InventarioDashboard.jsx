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
import axios from "axios";
import CardInventory from "../../components/Card/CardInventory/CardInventory";

const baseURL = "http://localhost:5000/inventario";

const InventarioDashboard = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/inventario-form", { replace: true });
  };

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  const [inventory, setInventory] = React.useState([{}]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setInventory(response.data);
    });
  }, []);

  return (
    <Helmet title="Inventario">
      <CommonSection title="Inventario Admistrador" />

      <section>
        <Row>
          <Col lg="12" style={{ textAlign: "center" }}>
            <h1>Inventario Dashboard</h1>
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
              style={{ marginLeft: "10px" }}
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
            {inventory.map((item) => {
              return (
                <CardInventory
                  id_inventory={item.id_inventory}
                  branch={item.branch}
                  ammountChampi={item.ammountChampi}
                  ammountChiles={item.ammountChiles}
                  ammountHarina={item.ammountHarina}
                  ammountPina={item.ammountPina}
                  ammountQueso={item.ammountQueso}
                  ammountSalsa={item.ammountSalsa}
                ></CardInventory>
              );
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default InventarioDashboard;
