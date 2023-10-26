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

const VecindariosForm = () => {
  const baseURL = "http://localhost:5000/vecindarios/add";
  const baseId = "http://localhost:5000/vecindarios";
  const baseSucursales = 'http://localhost:5000/sucursales'

  const navigate = useNavigate();
  const goToVecindariosDashboard = () => {
    navigate("/vecindarios-dashboard", { replace: true });
  };

  //DATA SEND
  const [dataVecindarios, setData] = useState({
    data: new FormData(),
  });

  const handleChangeVecindario = (e) => {
    let nameInput = e.target.name;
    let value;
    value = e.target.value;
    dataVecindarios.data.set(nameInput, value);

    setData(dataVecindarios);
  };

  const handleSubmitVecindarios = (e) => {
    e.preventDefault();
    console.log(dataVecindarios);
    if (id) {
      axios
        .put(baseId + "/update/" + id, dataVecindarios.data)
        .then((response) => {
          console.log(response);
          optionsModal = { ...optionsModal, message: "Vecindario Editado" };
          setShow(true);
        });
    } else {
      axios.post(baseURL, dataVecindarios.data).then((response) => {
        console.log("Response----->", response);
        setShow(true);
      });
    }
  };

  const initDataWithId = (data) => {
    for (const property in data) {
      dataVecindarios.data.set(property, data[property]);
    }
    setData(dataVecindarios);
  };

  //END DATA SEND
  //MODAL
  const [show, setShow] = useState(false);
  let optionsModal = {
    title: "Operacion Exitosa",
    message: "El vecindario fue agregada exitosamente",
    redirectTo: () => {
      navigate("/vecindarios-dashboard", { replace: true });
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
      });
  }, []);
  const [dataForm, setDataForm] = React.useState([{}]);
  const [sucursales, setSucursales] = React.useState([{}]);

  //END ID
  return (
    <Helmet title="Formulario Categorias">
      <CommonSection title="Formulario Categorias" />
      <section style={{ padding: "30px 0px" }}>
        <Container>
          <Row>
            <Col lg="12">
              <Button color="secondary" onClick={goToVecindariosDashboard}>
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
              <Form method="post" onSubmit={handleSubmitVecindarios}>
                <FormGroup>
                  <Label for="neighborhood_name"> Nombre del Vecindario: </Label>
                  <Input
                    id="neighborhood_name"
                    name="neighborhood_name"
                    placeholder="Ingresa el nombre del vecindario"
                    type="text"
                    onChange={handleChangeVecindario}
                    defaultValue={id ? dataForm?.neighborhood_name : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="id_branch">Selecciona la sucursal a la que corresponde</Label>
                  <Input
                    id="id_branch"
                    name="id_branch"
                    type="select"
                    onChange={handleChangeVecindario}
                    defaultValue={sucursales[0]?.id_branch}
                  >
                    {sucursales.map((item, index) => {
                      return (
                        <option value={item.id_branch}>
                          {item.branch_name}
                        </option>
                      );
                    })}
                  </Input>
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
                onClick={goToVecindariosDashboard}
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

export default VecindariosForm;
