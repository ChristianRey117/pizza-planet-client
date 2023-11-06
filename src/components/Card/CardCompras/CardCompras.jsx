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
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import ModalComponent from "../../Modal/modal";

const CardCompras = ({ id_buy, user, product, ammount, date, image }) => {
  const navigate = useNavigate();

  const baseURL = "http://localhost:5000/compras";
  const baseUrlImage = "http://localhost:5000/images";

  const dispatch = useDispatch();

  const deleteCompras = () => askDelete();

  const _delete = (id) => {
    axios.delete(baseURL + "/delete/" + id).then((response) => {});
  };

  const askDelete = () => {
    setShow(true);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const optionsModal = {
    title: "¿Esta seguro de eliminar esta Venta?",
    message: "No se podra recuperar la informacion",
    redirectTo: () => {
      _delete(id_buy);
      setShow(false);
      window.location.reload(false);
    },
  };

  return (
    <Col
      lg="4"
      md="6"
      sm="6"
      className="mt-2 mb-2"
      style={{ width: "28rem", marginLeft: "25px" }}
    >
      <Card
        style={{
          width: "28rem",
          height: "18rem",
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
              <CardTitle tag="h5">{product}</CardTitle>

              <CardText>
                <ListGroup>
                  <ListGroupItem>{"Cliente: " + user}</ListGroupItem>
                  <ListGroupItem>{"Cantidad: " + ammount}</ListGroupItem>
                  <ListGroupItem>{"Fecha: " + date}</ListGroupItem>
                </ListGroup>
              </CardText>

              <div style={{ position: "absolute", bottom: "15px" }}>
                <Row>
                  <Col lg="12">
                    <Button color="danger" onClick={deleteCompras}>
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

export default CardCompras;
