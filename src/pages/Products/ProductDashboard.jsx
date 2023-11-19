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
} from "reactstrap";
import { Link } from "react-router-dom";
import imageSuc1 from "../../assets/images/product_01.png";
import imageSuc2 from "../../assets/images/product_09.png";
import imageSuc3 from "../../assets/images/product_4.1.png";

import products from "../../assets/fake-data/products";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ModalComponent from "../../components/Modal/modal";
import CardProductos from "../../components/Card/CardProductos/CardProductos";

const baseURL = "http://localhost:5000/productos";
const baseUrlImage = "http://localhost:5000/images";

const ProductDashboard = () => {
  const navigate = useNavigate();

  const agregarProducto = () => {
    navigate("/product-form", { replace: true });
  };

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  const [products, setProducts] = React.useState([{}]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Helmet title="Productos">
      <CommonSection title="Productos Administrador" />

      <section>
        <Row>
          <Col lg="12" style={{ textAlign: "center" }}>
            <h1>Productos Dashboard</h1>
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
              style={{ marginLeft: "5px" }}
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
              <Button size="lg" color="warning" onClick={agregarProducto}>
                Agregar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {products.map((item, index) => {
              return (
                <CardProductos
                  id_product={item.id_product}
                  product_name={item.product_name}
                  product_price={item.product_price}
                  id_ofert={item.id_ofert}
                  id_type_category={item.id_type_category}
                  image={item.image}
                ></CardProductos>
              );
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDashboard;
