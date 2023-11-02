import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useRef } from "react";
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
  Label,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import ModalComponent from "../../Modal/modal";

const CardCompras = ({ id_users, user_name, user_email, typeU, typeUsers }) => {
  const navigate = useNavigate();

  const baseURL = "http://localhost:5000/usuario";

  const dispatch = useDispatch();

  const deleteRol = () => askDelete();

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
    title: "¿Esta seguro de eliminar este Rol?",
    message: "No se podra recuperar la informacion",
    redirectTo: () => {
      _delete(id_users);
      setShow(false);
      window.location.reload(false);
    },
  };

  const [typeUserSelect, setTypeUserSelect] = useState(1);
  const onEdit = () => {
    console.log("tipo de usuario seleccionado--->", typeUserSelect);
    var user = {
      id_type_users: typeUserSelect,
    };
    axios.put(baseURL + "/update/" + id_users, user).then(() => {
      window.location.reload(false);
    });
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
            <Col lg="12">
              {/* <CardTitle tag="h5">{product}</CardTitle> */}
              <Col lg="12">
                <CardText>
                  <Row>
                    <Col xs={3}>
                      <h6>Nombre</h6>
                    </Col>
                    <Col xs={9}>{user_name}</Col>
                  </Row>
                  <Row>
                    <Col xs={3}>
                      <h6>Correo</h6>
                    </Col>
                    <Col xs={9}>{user_email}</Col>
                  </Row>
                </CardText>
                <Form method="post">
                  {/* <Form method="post" onSubmit={handleSubmitCategoria}> */}

                  <FormGroup>
                    <Label for="id_type_users">Tipo Usuario: </Label>
                    <Input
                      id="id_type_users"
                      name="id_type_users"
                      type="select"
                      onChange={(e) => setTypeUserSelect(e.target.value)}
                    >
                      {typeUsers.map((type_user) => {
                        return (
                          <option
                            value={type_user.id_type_users}
                            label={type_user.type_users_name}
                            selected={typeU === type_user.type_users_name}
                          ></option>
                        );
                      })}
                    </Input>
                  </FormGroup>
                </Form>
              </Col>

              <div style={{ position: "absolute", bottom: "15px" }}>
                <Row>
                  <Col xs="6" sm="6" md="6" lg="6">
                    <Button color="warning" onClick={onEdit}>
                      Editar
                    </Button>
                  </Col>
                  <Col xs="6" sm="6" md="6" lg="6">
                    <Button color="danger" onClick={deleteRol}>
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
