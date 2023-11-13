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

const CardCategory = ({ id_category, name_category, description }) => {
  const navigate = useNavigate();

  const baseURL = ENDPOINTS.TIPOSCATEGORIAS;
  const baseUrlImage = ENDPOINTS.BASE_IMAGES;

  const dispatch = useDispatch();

  const deleteCategory = () => askDelete();

  const _delete = (id) => {
    axios.delete(baseURL + "/delete/" + id).then((response) => {
      window.location.reload(false);
    });
  };

  const askDelete = () => {
    setShow(true);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const optionsModal = {
    title: "¿Esta seguro de eliminar esta Categoria?",
    message: "No se podrá recuperar la informacion",
    redirectTo: () => {
      _delete(id_category);
      setShow(false);
    },
  };

  const editCategory = () => {
    navigate("/categorias-form/" + id_category, { replace: true });
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
                {"Tipo de categoria: " + name_category}
              </CardTitle>

              <CardText>{description}</CardText>
              <div style={{ position: "absolute", bottom: "15px" }}>
                <Row>
                  <Col lg="6">
                    <Button color="warning" onClick={editCategory}>
                      Editar
                    </Button>
                  </Col>
                  <Col lg="6">
                    <Button color="danger" onClick={deleteCategory}>
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

export default CardCategory;
