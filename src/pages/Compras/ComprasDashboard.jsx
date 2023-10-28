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
  Input,
} from "reactstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import imageSuc1 from "../../assets/images/product_01.1.jpg";
import imageSuc2 from "../../assets/images/product_01.3.jpg";
import imageSuc3 from "../../assets/images/product_04.jpg";
import imageSuc4 from "../../assets/images/product_08.jpg";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import axios from "axios";
import CardCompras from "../../components/Card/CardCompras/CardCompras";

const baseURL = "http://localhost:5000/compras";
const baseUrlImage = "http://localhost:5000/images";

const productosCompras = [
  {
    userName: "Juanito",
    productName: "Pizza Galactica",
    fecha: "05/09/2023",
    price: 220,
    imageProduct: imageSuc1,
  },
  {
    userName: "Juanito",
    productName: "Pizza Galactica",
    fecha: "05/09/2023",
    price: 220,
    imageProduct: imageSuc2,
  },

  {
    userName: "Juanito",
    productName: "Pizza Galactica",
    fecha: "05/09/2023",
    price: 220,
    imageProduct: imageSuc3,
  },
  {
    userName: "Juanito",
    productName: "Pizza Galactica",
    fecha: "05/09/2023",
    price: 220,
    imageProduct: imageSuc4,
  },
  {
    userName: "Juanito",
    productName: "Pizza Galactica",
    fecha: "05/09/2023",
    price: 220,
    imageProduct: imageSuc1,
  },
];

const ComprasDashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  const [ventas, setVentas] = React.useState([{}]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setVentas(response.data);
    });
  }, []);

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
            <Col lg="2">
              <Input size="lg" type="date" placeholder="Filtro"></Input>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {ventas.map((item, index) => {
              return (
                <CardCompras
                  user={item.user}
                  ammount={item.ammount}
                  date={item.date}
                  id_buy={item.id_buy}
                  product={item.product}
                ></CardCompras>
              );
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ComprasDashboard;
