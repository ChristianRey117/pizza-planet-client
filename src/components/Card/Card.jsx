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
import ModalComponent from "../../components/Modal/modal";

const CardComponent = ({ branch_name, branch_direction, id_branch, image }) => {
  const navigate = useNavigate();

  const baseURL = "http://localhost:5000/sucursales";
  const baseUrlImage = "http://localhost:5000/images";
  const dispatch = useDispatch();

  const deleteSucursal = () => askDelete();

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
    title: "¿Esta seguro de eleminar la sucursal?",
    message: "No se podra recuperar la informacion",
    redirectTo: () => {
      _delete(id_branch);
      setShow(false);
      window.location.reload(false);
    },
  };

  const editSucursal = () => {
    navigate("/sucursal-form/" + id_branch, { replace: true });
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
              <CardTitle tag="h5">{branch_name}</CardTitle>

              <CardText>{branch_direction}</CardText>
              <div style={{ position: "absolute", bottom: "15px" }}>
                <Row>
                  <Col lg="6">
                    <Button color="warning" onClick={editSucursal}>
                      <Link style={{ color: "white" }}>Editar</Link>
                    </Button>
                  </Col>
                  <Col lg="6">
                    <Button color="danger" onClick={deleteSucursal}>
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

export default CardComponent;
