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
import ENDPOINTS from "../../utils/constants";

const UsuariosForm = () => {
  const baseId = ENDPOINTS.USUARIOS;
  const baseVecindarios = ENDPOINTS.VECINDARIOS;
  const baseSucursales = ENDPOINTS.SUCURSALES;

  const navigate = useNavigate();

  const ComprasUsuario = () => {
    const user = JSON.parse(localStorage.getItem("datosUser"));
    navigate("/compras/usuario/" + user.id_usuario);
  };
  const logOut = () => {
    localStorage.removeItem("datosUser");
    window.location.reload(false);
  };

  //DATA SEND
  const [dataUsuario, setData] = useState({
    data: new FormData(),
  });

  const handleChangeUsuario = (e) => {
    let nameInput = e.target.name;
    let value;
    value = e.target.value;
    if (nameInput === "id_neighborhood") {
      let vecinda = vecindarios.find((element) => {
        return element ? element?.id_neighborhood.toString() === value : null;
      });

      let sucursal = sucursales.find((suc) => {
        return vecinda.branch === suc.branch_name;
      });

      dataUsuario.data.set("id_branch", sucursal.id_branch);
      setSelectedSuc(sucursal);
    }
    dataUsuario.data.set(nameInput, value);

    setData(dataUsuario);
  };

  const handleSubmitCategoria = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(baseId + "/update/" + id, dataUsuario.data).then((response) => {
        optionsModal = {
          ...optionsModal,
          message: "Usuario editado exitosamente",
        };
        setShow(true);
      });
    }
  };

  const initDataWithId = (data) => {
    for (const property in data) {
      if (property !== "user_password") {
        dataUsuario.data.set(property, data[property]);
      }
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
      window.location.reload(false);
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

    axios.get(baseVecindarios).then((response) => {
      setVecindarios(response.data);
    });

    axios.get(baseSucursales).then((response) => {
      setSucursales(response.data);
    });
  }, []);
  const [dataForm, setDataForm] = React.useState({});
  const [vecindarios, setVecindarios] = React.useState([{}]);
  const [sucursales, setSucursales] = React.useState([{}]);
  const [selectedSuc, setSelectedSuc] = React.useState([{}]);

  //END ID
  return (
    <Helmet title="Informacion Cliente">
      <CommonSection title="Informacion del Cliente" />
      <section style={{ padding: "30px 0px" }}>
        <Container>
          <Row>
            <Col className="col-6 col-md-2 col-sm-2 mb-2">
              {/* <Button size="lg" color="secondary" onClick={goToAdminDashboard}> */}
              <Button
                style={{ backgroundColor: "black", color: "white" }}
                onClick={ComprasUsuario}
              >
                Mis Compras
              </Button>
            </Col>
            <Col className="col-6 col-md-2 col-sm-2 mb-2">
              <Button
                color="danger"
                style={{ position: "right" }}
                onClick={logOut}
              >
                Salir
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
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="id_neighborhood">Vecindario: </Label>
                  <Input
                    id="id_neighborhood"
                    name="id_neighborhood"
                    type="select"
                    onChange={handleChangeUsuario}
                  >
                    {vecindarios.map((item, index) => {
                      return (
                        <option
                          value={item?.id_neighborhood}
                          label={item.neighborhood_name}
                          selected={
                            dataForm?.id_neighborhood === item?.id_neighborhood
                          }
                        ></option>
                      );
                    })}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="id_branch">Sucursal: </Label>
                  <Input
                    id="id_branch"
                    name="id_branch"
                    type="select"
                    onChange={handleChangeUsuario}
                    disabled={true}
                  >
                    {!selectedSuc?.id_branch ? (
                      <option
                        value={dataForm?.id_branch}
                        label={dataForm?.branch}
                      ></option>
                    ) : (
                      <option
                        value={selectedSuc?.id_branch}
                        label={selectedSuc?.branch_name}
                      ></option>
                    )}
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
