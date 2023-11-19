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
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ModalComponent from "../../components/Modal/modal";

const VecindariosForm = () => {
  const baseURL = "http://localhost:5000/vecindarios/add";
  const baseId = "http://localhost:5000/vecindarios";
  const baseSucursales = "http://localhost:5000/sucursales";

  const navigate = useNavigate();
  const goToVecindariosDashboard = () => {
    navigate("/vecindarios-dashboard", { replace: true });
  };

  // DATA SEND
  const [dataVecindarios, setData] = useState({
    data: new FormData(),
  });

  const handleChangeVecindario = (e) => {
    let nameInput = e.target.name;
    let value;
    value = e.target.value;
    dataVecindarios.data.set(nameInput, value);
  };

  const handleSubmitVecindarios = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(baseId + "/update/" + id, dataVecindarios.data)
        .then((response) => {
          console.log(response);
          const optionsModal = {
            title: "Operación Exitosa",
            message: "Vecindario editado exitosamente",
            redirectTo: () => {
              navigate("/vecindarios-dashboard", { replace: true });
            },
          };
          setShowEditModal(true, optionsModal);
        });
    } else {
      axios.post(baseURL, dataVecindarios.data).then((response) => {
        console.log("Response----->", response);
        const optionsModal = {
          title: "Operación Exitosa",
          message: "Vecindario Agregado",
          redirectTo: () => {
            navigate("/vecindarios-dashboard", { replace: true });
          },
        };
        setShowAddModal(true, optionsModal);
      });
    }
  };

  const initDataWithId = (data) => {
    for (const property in data) {
      dataVecindarios.data.set(property, data[property]);
    }
    setData(dataVecindarios);
  };

  // END DATA SEND
  // MODALS
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleCloseAddModal = () => setShowAddModal(false);
  // END MODALS

  // ID
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
      if (!id) {
        initDataWithId(response.data[0]);
      }
    });
  }, []);
  const [dataForm, setDataForm] = React.useState([{}]);
  const [sucursales, setSucursales] = React.useState([{}]);

  return (
    <Helmet title="Formulario Vecindarios">
      <CommonSection title="Formulario Vecindarios" />
      <section style={{ padding: "30px 0px" }}>
        <Container>
          <Row>
            <Col lg="12">
              <Button
                style={{ backgroundColor: "black", color: "white" }}
                onClick={goToVecindariosDashboard}
              >
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
                  <Label for="neighborhood_name">
                    {" "}
                    Nombre del Vecindario:{" "}
                  </Label>
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
                  <Label for="id_branch">
                    Selecciona la sucursal a la que corresponde
                  </Label>
                  <Input
                    id="id_branch"
                    name="id_branch"
                    type="select"
                    onChange={handleChangeVecindario}
                    defaultValue={sucursales[0]?.id_branch}
                  >
                    {sucursales.map((item, index) => (
                      <option
                        key={item.id_branch}
                        value={item.id_branch}
                        selected={dataForm.id_branch === item.id_branch}
                      >
                        {item.branch_name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>

                <Button
                  style={{ display: `${id ? "none" : ""}` }}
                  color="warning"
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
        <Modal isOpen={showAddModal} toggle={handleCloseAddModal}>
          <ModalHeader>Operación Exitosa</ModalHeader>
          <ModalBody>Vecindario Agregado</ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              onClick={() => {
                goToVecindariosDashboard();
                handleCloseAddModal();
              }}
            >
              Continuar
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={showEditModal} toggle={handleCloseEditModal}>
          <ModalHeader>Operación Exitosa</ModalHeader>
          <ModalBody>Vecindario Editado</ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              onClick={() => {
                goToVecindariosDashboard();
                handleCloseEditModal();
              }}
            >
              Continuar
            </Button>
          </ModalFooter>
        </Modal>
      </section>
    </Helmet>
  );
};

export default VecindariosForm;
