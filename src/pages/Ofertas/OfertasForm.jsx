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
import ModalComponent from "../../components/Modal/modal";

const OfertasForm = () => {
  const baseURL = "http://localhost:5000/ofertas/add";
  const baseId = "http://localhost:5000/ofertas";

  const navigate = useNavigate();
  const goToOfertasDashboard = () => {
    navigate("/ofertas-dashboard", { replace: true });
  };

  // DATA SEND
  const [dataOfert, setData] = useState({
    data: new FormData(),
  });

  const handleChangeOfert = (e) => {
    let nameInput = e.target.name;
    let value;
    if (nameInput === "name_image") {
      nameInput = "image";
      value = e.target.files[0];
      dataOfert.data.set(nameInput, value);
    } else {
      value = e.target.value;
      if (nameInput === "id_ofert") {
        value = Number(value);
      }
      dataOfert.data.set(nameInput, value);
    }
    setData(dataOfert);
  };

  const handleSubmitOfert = (e) => {
    e.preventDefault();
    console.log(dataOfert);
    if (id) {
      axios.put(baseId + "/update/" + id, dataOfert.data).then((response) => {
        console.log(response);
        setOptionsEditModal({ ...optionsEditModal, message: "Oferta Editada" });
        setShowEditModal(true);
      });
    } else {
      axios.post(baseURL, dataOfert.data).then((response) => {
        console.log("Response----->", response);
        setShowAddModal(true);
      });
    }
  };

  const initDataWithId = (data) => {
    for (const property in data) {
      dataOfert.data.set(property, data[property]);
    }
    setData(dataOfert);
  };

  // END DATA SEND
  // MODAL
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [optionsAddModal, setOptionsAddModal] = useState({
    title: "Operacion Exitosa",
    message: "La oferta fue agregada exitosamente",
    redirectTo: () => {
      navigate("/ofertas-dashboard", { replace: true });
    },
  });

  const [optionsEditModal, setOptionsEditModal] = useState({
    title: "Operacion Exitosa",
    message: "La oferta fue editada exitosamente",
    redirectTo: () => {
      navigate("/ofertas-dashboard", { replace: true });
    },
  });

  const handleCloseAddModal = () => setShowAddModal(false);
  const handleCloseEditModal = () => setShowEditModal(false);

  // END MODAL

  // ID
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

  return (
    <Helmet title="Formulario Ofertas">
      <CommonSection title="Formulario Ofertas" />
      <section style={{ padding: "30px 0px" }}>
        <Container>
          <Row>
            <Col lg="12">
              <Button
                style={{ backgroundColor: "black", color: "white" }}
                onClick={goToOfertasDashboard}
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
              <Form method="post" onSubmit={handleSubmitOfert}>
                <FormGroup>
                  <Label for="OfertaName"> Nombre: </Label>
                  <Input
                    id="name_ofert"
                    name="name_ofert"
                    placeholder="Ingresa el nombre"
                    type="text"
                    onChange={handleChangeOfert}
                    defaultValue={id ? dataForm?.name_ofert : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="description"> Descripción: </Label>
                  <Input
                    id="descriptionid"
                    name="description"
                    placeholder="Ingresa la descripción"
                    type="text"
                    onChange={handleChangeOfert}
                    defaultValue={id ? dataForm?.description : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="discount"> Descuento:</Label>
                  <Input
                    id="discountid"
                    name="discount"
                    placeholder="Ingresa la cantidad fija"
                    type="text"
                    onChange={handleChangeOfert}
                    defaultValue={id ? dataForm?.discount : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="name_image">Imagen Oferta</Label>
                  <Input
                    id="name_image: "
                    name="name_image"
                    placeholder="Selecciona la imagen de la Oferta"
                    type="file"
                    onChange={handleChangeOfert}
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
                onClick={goToOfertasDashboard}
              >
                Cancelar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Modal isOpen={showAddModal} toggle={goToOfertasDashboard}>
          <ModalHeader>{optionsAddModal.title}</ModalHeader>
          <ModalBody>{optionsAddModal.message}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={goToOfertasDashboard}>
              Continuar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={showEditModal} toggle={goToOfertasDashboard}>
          <ModalHeader>{optionsEditModal.title}</ModalHeader>
          <ModalBody>{optionsEditModal.message}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={goToOfertasDashboard}>
              Continuar
            </Button>
          </ModalFooter>
        </Modal>
      </section>
    </Helmet>
  );
};

export default OfertasForm;
