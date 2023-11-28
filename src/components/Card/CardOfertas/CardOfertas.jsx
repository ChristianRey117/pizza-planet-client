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
import ENDPOINTS from "../../../utils/constants";

const CardOfert = ({ id_ofert, name_ofert, discount, description, image }) => {
  const navigate = useNavigate();

  const baseURL = ENDPOINTS.OFERTAS;
  const baseUrlImage = ENDPOINTS.BASE_IMAGES;

  const dispatch = useDispatch();

  const deleteOfert = () => askDelete();

  const _delete = (id) => {
    axios.put(baseURL + "/delete/" + id).then((response) => {
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
    title: "¿Esta seguro de eliminar esta Oferta?",
    message: "No se podrá recuperar la informacion",
    redirectTo: () => {
      _delete(id_ofert);
      setShow(false);
    },
  };

  const editOfert = () => {
    navigate("/ofertas-form/" + id_ofert, { replace: true });
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
          width: "34rem",
          height: "16rem",
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
              <ListGroup>
                <ListGroupItem>Descuento: {discount}</ListGroupItem>
              </ListGroup>

              <CardTitle tag="h5">{name_ofert}</CardTitle>

              <CardText>{description}</CardText>
              <div style={{ position: "absolute", bottom: "15px" }}>
                <Row>
                  <Col lg="6">
                    <Button color="warning" onClick={editOfert}>
                      Editar
                    </Button>
                  </Col>
                  <Col lg="6">
                    <Button color="danger" onClick={deleteOfert}>
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

export default CardOfert;
