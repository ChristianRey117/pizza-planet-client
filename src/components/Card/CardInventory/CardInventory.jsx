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
import ModalComponent from "../../../components/Modal/modal";

const CardInventory = ({
  id_inventory,
  branch,
  ammountQueso,
  ammountSalsa,
  ammountHarina,
  ammountChampi,
  ammountPina,
  ammountChiles,
}) => {
  console.log("BRANCH--->", branch);
  const navigate = useNavigate();

  const baseURL = "http://localhost:5000/inventario";
  const baseUrlImage = "http://localhost:5000/images";
  const dispatch = useDispatch();

  const deleteInventory = () => askDelete();

  const _delete = (id) => {
    axios.delete(baseURL + "/delete/" + id).then((response) => {
      console.log(response);
    });
  };

  const askDelete = () => {
    setShow(true);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const optionsModal = {
    title: "¿Esta seguro de eliminar este inventario?",
    message: "No se podra recuperar la informacion",
    redirectTo: () => {
      _delete(id_inventory);
      setShow(false);
      window.location.reload(false);
    },
  };

  const editInventory = () => {
    navigate("/inventario-form/" + id_inventory, { replace: true });
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
              <ListGroup>
                <ListGroupItem>Insumos en Kg o L </ListGroupItem>
                <ListGroupItem>Queso disponible: {ammountQueso}</ListGroupItem>
                <ListGroupItem>Salsa disponible: {ammountSalsa},</ListGroupItem>
                <ListGroupItem>
                  Champiñones disponible: {ammountChampi},
                </ListGroupItem>
                <ListGroupItem>Piña disponible: {ammountPina}</ListGroupItem>
                <ListGroupItem>
                  Chiles disponibles: {ammountChiles}
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="6">
              <CardTitle tag="h5">
                {"Inventario actual"} <br />
                {"Sucursal:" + branch}
              </CardTitle>

              <div style={{ position: "absolute", bottom: "15px" }}>
                <Row>
                  <Col lg="6">
                    <Button color="warning" onClick={editInventory}>
                      Editar
                    </Button>
                  </Col>
                  <Col lg="6">
                    <Button color="danger" onClick={deleteInventory}>
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

export default CardInventory;
