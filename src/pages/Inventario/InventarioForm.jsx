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
} from "reactstrap";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ModalComponent from "../../components/Modal/modal";

const InventarioForm = () => {
  const baseURL = "http://localhost:5000/inventario/add";
  const baseId = "http://localhost:5000/inventario";
  const baseSucursales = "http://localhost:5000/sucursales";

  const navigate = useNavigate();

  const goToInventarioDashboard = () => {
    navigate("/inventario-dashboard", { replace: true });
  };

  //DATA SEND
  const [dataInventory, setData] = useState({
    data: new FormData(),
  });

  const handleChangeInventory = (e) => {
    let nameInput = e.target.name;
    let value;

    value = e.target.value;
    dataInventory.data.set(nameInput, value);

    setData(dataInventory);
  };

  const handleSubmitInventory = (e) => {
    e.preventDefault();
    console.log(dataInventory);
    if (id) {
      axios
        .put(baseId + "/update/" + id, dataInventory.data)
        .then((response) => {
          console.log(response);
          optionsModal = { ...optionsModal, message: "Inventario Editado" };
          setShow(true);
        });
    } else {
      axios.post(baseURL, dataInventory.data).then((response) => {
        console.log("Response----->", response);
        setShow(true);
      });
    }
  };

  const initDataWithId = (data) => {
    for (const property in data) {
      dataInventory.data.set(property, data[property]);
    }
    setData(dataInventory);
  };

  //END DATA SEND

  //MODAL
  const [show, setShow] = useState(false);
  let optionsModal = {
    title: "Operacion Exitosa",
    message: "El inventario fue agregado exitosamente",
    redirectTo: () => {
      navigate("/inventario-dashboard", { replace: true });
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

    axios.get(baseSucursales).then((response) => {
      setSucursales(response.data);
      console.log(response.data);
      dataInventory.data.set("id_branch", response.data[0].id_branch);
    });
    setData(dataInventory);
  }, []);
  const [dataForm, setDataForm] = React.useState([{}]);
  const [sucursales, setSucursales] = React.useState([{}]);

  //END ID

  return (
    <Helmet title="Inventario Formulario">
      <CommonSection title="Inventario Formulario" />
      <section style={{ padding: "30px 0px" }}>
        <Container>
          <Row>
            <Col lg="12">
              <Button color="secondary" onClick={goToInventarioDashboard}>
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
              <Form method="post" onSubmit={handleSubmitInventory}>
                <FormGroup>
                  <Label for="sucursalesSelect">Sucursal</Label>
                  <Input
                    id="id_branch"
                    name="id_branch"
                    type="select"
                    onChange={handleChangeInventory}
                  >
                    {sucursales.map((item) => {
                      return (
                        <option value={item.id_branch} label={item.branch_name} selected={dataForm.id_branch === item.id_branch}>
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="ammountQueso">Queso disponible</Label>
                  <Input
                    id="ammountQueso"
                    name="ammountQueso"
                    placeholder="Ingresa el queso disponible"
                    type="tel"
                    onChange={handleChangeInventory}
                    defaultValue={id ? dataForm?.ammountQueso : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="ammountSalsa">Salsa disponible</Label>
                  <Input
                    id="ammountSalsa"
                    name="ammountSalsa"
                    placeholder="Ingresa la salsa disponible"
                    type="tel"
                    onChange={handleChangeInventory}
                    defaultValue={id ? dataForm?.ammountSalsa : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="ammountHarina">Harina disponible</Label>
                  <Input
                    id="ammountHarina: "
                    name="ammountHarina"
                    placeholder="Ingresa la harina disponible"
                    type="tel"
                    onChange={handleChangeInventory}
                    defaultValue={id ? dataForm?.ammountHarina : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="ammountChampiñones">Champiñones disponible</Label>
                  <Input
                    id="ammountChampi"
                    name="ammountChampi"
                    placeholder="Ingresa los champiñones disponibles"
                    type="tel"
                    onChange={handleChangeInventory}
                    defaultValue={id ? dataForm?.ammountChampi : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="ammountPineapple">Piña disponible</Label>
                  <Input
                    id="ammountPina"
                    name="ammountPina"
                    placeholder="Ingresa la piña disponible"
                    type="tel"
                    onChange={handleChangeInventory}
                    defaultValue={id ? dataForm?.ammountPina : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="ammountChiles">Chiles disponible</Label>
                  <Input
                    id="ammountChiles"
                    name="ammountChiles"
                    placeholder="Ingresa los chiles disponibles"
                    type="tel"
                    onChange={handleChangeInventory}
                    defaultValue={id ? dataForm?.ammountChiles : null}
                  />
                </FormGroup>

                <Button
                  style={{ display: `${id ? "none" : ""}` }}
                  color="success"
                >
                  Agregar
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
                onClick={goToInventarioDashboard}
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

export default InventarioForm;
