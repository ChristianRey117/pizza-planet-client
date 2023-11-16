import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
import ModalComponent from "../../../components/Modal/modal";
import ENDPOINTS from "../../../utils/constants";

const CardProductos = ({
  id_product,
  product_name,
  product_price,
  id_ofert,
  id_type_category,
  image,
}) => {
  const navigate = useNavigate();

  const baseURL = ENDPOINTS.PRODUCTOS;
  const baseUrlImage = ENDPOINTS.BASE_IMAGES;
  const dispatch = useDispatch();

  const deleteProductos = () => askDelete();

  const _delete = (id) => {
    axios.delete(baseURL + "/delete/" + id).then((response) => {
      console.log(response);
      window.location.reload(false);
    });
  };

  const askDelete = () => {
    setShow(true);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const optionsModal = {
    title: "¿Esta seguro de eleminar este producto?",
    message: "No se podrá recuperar la informacion",
    redirectTo: () => {
      _delete(id_product);
      setShow(false);
    },
  };

  const editProduct = () => {
    navigate("/product-form/" + id_product, { replace: true });
  };

  return (
    <Col
      lg="4"
      md="6"
      sm="6"
      className="mt-2 mb-5"
      style={{ width: "36rem", marginLeft: "35px" }}
    >
      <Card
        style={{
          width: "34rem",
        }}
      >
        <CardBody>
          <Row>
            <Col lg="6">
              <img
                alt="Sample"
                src={baseUrlImage + "/" + image}
                // src="https://picsum.photos/300/200"
                style={{ width: "180px" }}
              />
            </Col>

            <Col lg="6">
              <CardTitle tag="h5">{product_name}</CardTitle>

              <CardText>{"Precio: " + product_price}</CardText>
              <div style={{ position: "absolute", bottom: "15px" }}>
                <Row>
                  <Col lg="6">
                    <Button color="warning" onClick={editProduct}>
                      <Link style={{ color: "black" }}>Editar</Link>
                    </Button>
                  </Col>
                  <Col lg="6">
                    <Button color="danger" onClick={deleteProductos}>
                      Eliminar
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <section>
        <ModalComponent
          show={show}
          handleClose={handleClose}
          optionsModal={optionsModal}
        ></ModalComponent>
      </section>
    </Col>
  );
};

export default CardProductos;
