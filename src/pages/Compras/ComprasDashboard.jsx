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


const productosCompras = [
  {
    userName: "Juanito",
    productName: "Pizza Galactica",
    fecha: "05/09/2023",
    price: 220,
    imageProduct: imageSuc1
  },
  {
    userName: "Juanito",
    productName: "Pizza Galactica",
    fecha: "05/09/2023",
    price: 220,
    imageProduct: imageSuc2
  },

  {
    userName: "Juanito",
    productName: "Pizza Galactica",
    fecha: "05/09/2023",
    price: 220,
    imageProduct: imageSuc3

  },
  {
    userName: "Juanito",
    productName: "Pizza Galactica",
    fecha: "05/09/2023",
    price: 220,
    imageProduct: imageSuc4

  },
  {
    userName: "Juanito",
    productName: "Pizza Galactica",
    fecha: "05/09/2023",
    price: 220,
    imageProduct: imageSuc1

  }
];

const ComprasDashboard = () => {

  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();


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
            <Col lg="2">
              <Input size ='lg' type="date" placeholder="Filtro"></Input>
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
                          <img src={item.imageProduct} alt=""  style={{width:'180px'}}/>
                        </Col>

                        <Col lg="6">
                          <CardTitle tag="h5">Compra</CardTitle>

                          <CardText>
                          <ListGroup>
                            <ListGroupItem>
                              Cliente: {item.userName}
                            </ListGroupItem>
                            <ListGroupItem>
                              Producto Comprado: {item.productName}
                            </ListGroupItem>
                            <ListGroupItem>
                            Fecha: {item.fecha},
                            </ListGroupItem>
                            <ListGroupItem>
                               Precio: {item.price},
                            </ListGroupItem>
                            
                          </ListGroup>
                          </CardText>
                      
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
