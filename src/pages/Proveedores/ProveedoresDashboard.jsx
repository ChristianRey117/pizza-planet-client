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
import axios from "axios";
import CardProveedores from "../../components/Card/CardProveedores/CardProveedores";

const baseURL = "http://localhost:5000/proveedores";
const baseUrlImage = "http://localhost:5000/images";
const dataProveedores = [
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

  const [dataProveedores, setDataProveedores] = React.useState([{}]);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDataProveedores(response.data);
    });
  }, []);

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
            {dataProveedores.map((item, index) => {
              return (
                <CardProveedores
                  id_supplier={item.id_supplier}
                  supplier_name={item.supplier_name}
                  supplier_product={item.supplier_product}
                  image={item.image}
                ></CardProveedores>
              );
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProveedoresDashboard;
