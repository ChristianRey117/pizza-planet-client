import React, { useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Modal,
} from "reactstrap";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ModalComponent from "../../components/Modal/modal";

const UsuariosForm = () => {
  const baseURL = "http://localhost:5000/tipousuario/add";
  const baseId = "http://localhost:5000/tipousuario";

  const navigate = useNavigate();
  const goToUsuariosDashboard = () => {
    navigate("/usuarios-form", { replace: true });
  };

  //DATA SEND
  const [dataUsuario, setData] = useState({
    data: new FormData(),
  });

  const handleChangeUsuario = (e) => {
    let nameInput = e.target.name;
    let value;
    value = e.target.value;
    dataUsuario.data.set(nameInput, value);

    setData(dataUsuario);
  };

  const handleSubmitCategoria = (e) => {
    e.preventDefault();
    console.log(dataUsuario);
    if (id) {
      axios.put(baseId + "/update/" + id, dataUsuario.data).then((response) => {
        console.log(response);
        optionsModal = { ...optionsModal, message: "Usuario Editado" };
        setShow(true);
      });
    } else {
      axios.post(baseURL, dataUsuario.data).then((response) => {
        console.log("Response----->", response);
        setShow(true);
      });
    }
  };

  const initDataWithId = (data) => {
    for (const property in data) {
      dataUsuario.data.set(property, data[property]);
    }
    setData(dataUsuario);
  };

  //END DATA SEND
  //MODAL
  const [show, setShow] = useState(false);
  let optionsModal = {
    title: "Operacion Exitosa",
    message: "La información fue agregada exitosamente",
    redirectTo: () => {
      navigate("/login", { replace: true });
    },
  };
  const handleClose = () => setShow(false);
  //END MODAL

  //ID
  const { id } = useParams();
  React.useEffect(() => {
    if (id) {
      axios.get(baseId + "/" + id).then((response) => {
        setDataForm(response.data[0]);
        initDataWithId(response.data[0]);
      });
    }
  }, []);
  const [dataForm, setDataForm] = React.useState([{}]);

  //END ID
  return (
    <Helmet title="Formulario Usuarios">
      <CommonSection title="Formulario Usuario" />
      <section style={{ padding: "30px 0px" }}>
        <Container>
          <Row>
            <Col lg="12">
              <Button color="secondary" onClick={goToUsuariosDashboard}>
                Regresar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ padding: "30px" }}>
        <Container>
          <Row>
            <Col lg="12" style={{ paddingBottom: "15px" }}>
              <h3>Rellena el formulario</h3>
            </Col>
            <Col lg="12">
              <Form method="post" onSubmit={handleSubmitCategoria}>
                <FormGroup>
                  <Label for="name_name"> Nombre: </Label>
                  <Input
                    id="user_name"
                    name="user_name"
                    placeholder="Ingresa tu Nombre"
                    type="text"
                    onChange={handleChangeUsuario}
                    defaultValue={id ? dataForm?.user_name : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="user_email"> Email: </Label>
                  <Input
                    id="user_email"
                    name="user_email"
                    placeholder="Ingresa tu Correo"
                    type="email"
                    onChange={handleChangeUsuario}
                    defaultValue={id ? dataForm?.user_email : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="user_password"> Contraseña: </Label>
                  <Input
                    id="user_password"
                    name="user_password"
                    placeholder="Ingresa tu Contraseña"
                    type="password"
                    onChange={handleChangeUsuario}
                    defaultValue={id ? dataForm?.user_password : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="id_neighborhood">Vecindario: </Label>
                  <Input
                    id="id_neighborhood"
                    name="id_neighborhood"
                    type="select"
                    // onChange={handleChangeSucursal}
                  >
                    {/* {proveedores.map((item, index) => {
                      return (
                        <option value={item.id_supplier}>
                          {item.supplier_name}
                        </option>
                      );
                    })} */}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="id_branch">Sucursal: </Label>
                  <Input
                    id="id_branch"
                    name="id_branch"
                    type="select"
                    // onChange={handleChangeSucursal}
                  >
                    {/* {proveedores.map((item, index) => {
                      return (
                        <option value={item.id_supplier}>
                          {item.supplier_name}
                        </option>
                      );
                    })} */}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="phone"> Número Teléfono: </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Ingresa tú número de teléfono"
                    type="phone"
                    onChange={handleChangeUsuario}
                    defaultValue={id ? dataForm?.phone : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="direction"> Dirección: </Label>
                  <Input
                    id="direction"
                    name="direction"
                    placeholder="Ingresa tú dirección"
                    type="text"
                    onChange={handleChangeUsuario}
                    defaultValue={id ? dataForm?.direction : null}
                  />
                </FormGroup>

                <Button
                  style={{ display: `${id ? "none" : ""}` }}
                  color="success"
                >
                  Editar
                </Button>
                <Row>
                  <Col xs={12}>
                    <Button
                      style={{ display: `${!id ? "none" : ""}` }}
                      color="warning"
                    >
                      Editar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{ paddingTop: "10px" }}>
              <Button
                style={{ display: `${!id ? "none" : ""}` }}
                color="danger"
                onClick={goToUsuariosDashboard}
              >
                Cancelar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <ModalComponent
          show={show}
          handleClose={handleClose}
          optionsModal={optionsModal}
        ></ModalComponent>
      </section>
    </Helmet>
  );
};

export default UsuariosForm;
