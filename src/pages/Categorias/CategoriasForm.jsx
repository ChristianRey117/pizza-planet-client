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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ENDPOINTS from "../../utils/constants";

const CategoriasForm = () => {
  const dataAsync = async () => {
    if (id) {
      axios.get(baseId + "/" + id).then((response) => {
        setDataForm(response.data[0]);
        initDataWithId(response.data[0]);
      });
    }
  };
  const baseURL = ENDPOINTS.TIPOSCATEGORIAS_ADD;
  const baseId = ENDPOINTS.TIPOSCATEGORIAS;

  const navigate = useNavigate();
  const goToCategoriasDashboard = () => {
    navigate("/categorias-dashboard", { replace: true });
  };

  // DATA SEND
  const [dataCategoria, setDataCategoria] = useState({
    data: new FormData(),
  });

  const handleChangeCategoria = (e) => {
    let nameInput = e.target.name;
    let value = e.target.value;
    dataCategoria.data.set(nameInput, value);
    setDataCategoria(dataCategoria);
  };

  // MODAL
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [optionsAddModal, setOptionsAddModal] = useState({
    title: "Operacion Exitosa",
    message: "La categoría fue agregada exitosamente",
    redirectTo: () => {
      navigate("/categorias-dashboard", { replace: true });
    },
  });

  const [optionsEditModal, setOptionsEditModal] = useState({
    title: "Operacion Exitosa",
    message: "La categoría fue editada exitosamente",
    redirectTo: () => {
      navigate("/categorias-dashboard", { replace: true });
    },
  });

  const handleCloseAddModal = () => setShowAddModal(false);
  const handleCloseEditModal = () => setShowEditModal(false);

  // ID
  const { id } = useParams();
  React.useEffect(() => {
    dataAsync();
  }, []);
  const [dataForm, setDataForm] = React.useState([{}]);

  const initDataWithId = (data) => {
    for (const property in data) {
      dataCategoria.data.set(property, data[property]);
    }
    setDataCategoria(dataCategoria);
  };

  const handleSubmitCategoria = (e) => {
    e.preventDefault();
    console.log(dataCategoria);
    if (id) {
      axios
        .put(baseId + "/update/" + id, dataCategoria.data)
        .then((response) => {
          console.log(response);
          setOptionsEditModal({
            ...optionsEditModal,
            message: "Categoría Editada",
          });
          setShowEditModal(true);
        });
    } else {
      axios.post(baseURL, dataCategoria.data).then((response) => {
        console.log("Response----->", response);
        setOptionsAddModal({
          ...optionsAddModal,
          message: "Categoría Agregada",
        });
        setShowAddModal(true);
      });
    }
  };

  return (
    <Helmet title="Formulario Categorias">
      <CommonSection title="Formulario Categorias" />
      <section style={{ padding: "30px 0px" }}>
        <Container>
          <Row>
            <Col lg="12">
              <Button
                style={{ backgroundColor: "black", color: "white" }}
                onClick={goToCategoriasDashboard}
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
              <Form method="post" onSubmit={handleSubmitCategoria}>
                <FormGroup>
                  <Label for="name_category"> Nombre de la Categoria: </Label>
                  <Input
                    id="name_category"
                    name="name_category"
                    placeholder="Ingresa el nombre de la categoría"
                    type="text"
                    onChange={handleChangeCategoria}
                    defaultValue={id ? dataForm?.name_category : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="description"> Descripción: </Label>
                  <Input
                    id="description"
                    name="description"
                    placeholder="Ingresa la descripción"
                    type="text"
                    onChange={handleChangeCategoria}
                    defaultValue={id ? dataForm?.description : null}
                  />
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
                onClick={goToCategoriasDashboard}
              >
                Cancelar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Modal isOpen={showAddModal} toggle={goToCategoriasDashboard}>
          <ModalHeader>{optionsAddModal.title}</ModalHeader>
          <ModalBody>{optionsAddModal.message}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={goToCategoriasDashboard}>
              Continuar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={showEditModal} toggle={goToCategoriasDashboard}>
          <ModalHeader>{optionsEditModal.title}</ModalHeader>
          <ModalBody>{optionsEditModal.message}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={goToCategoriasDashboard}>
              Continuar
            </Button>
          </ModalFooter>
        </Modal>
      </section>
    </Helmet>
  );
};

export default CategoriasForm;
