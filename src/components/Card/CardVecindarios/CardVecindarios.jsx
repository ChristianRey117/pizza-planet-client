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
import SucursalForm from "../../../pages/Sucursal/SucursalForm";

const CardVecindarios = ({
  id_neighborhood,
  id_branch,
  neighborhood_name,
  branch,
}) => {
  const navigate = useNavigate();

  const baseURL = "http://localhost:5000/vecindarios";

  const dispatch = useDispatch();

  const deleteVecindario = () => askDelete();

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
    title: "¿Esta seguro de eliminar este Vecindario?",
    message: "No se podrá recuperar la informacion",
    redirectTo: () => {
      _delete(id_neighborhood);
      setShow(false);
      window.location.reload(false);
    },
  };

  const editVecindario = () => {
    navigate("/vecindarios-form/" + id_neighborhood, { replace: true });
  };

  return (
    <Col
      lg="4"
      md="6"
      sm="6"
      className="mt-2 mb-5"
      style={{ width: "36rem", marginLeft: "45px" }}
    >
      <Card
        style={{
          width: "22rem",
          height: "12rem",
        }}
      >
        <CardBody>
          <Row>
            <Col lg="12">
              <CardTitle tag="h5">
                {"Vecindario: " + neighborhood_name}
              </CardTitle>

              <CardText>{"Sucursal: " + branch}</CardText>
              <div style={{ position: "absolute", bottom: "15px" }}>
                <Row>
                  <Col lg="6">
                    <Button color="warning" onClick={editVecindario}>
                      Editar
                    </Button>
                  </Col>
                  <Col lg="6">
                    <Button color="danger" onClick={deleteVecindario}>
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

export default CardVecindarios;
