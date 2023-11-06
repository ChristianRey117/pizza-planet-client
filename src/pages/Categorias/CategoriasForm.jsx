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

const CategoriasForm = () => {
  const baseURL = "http://localhost:5000/tipocategoria/add";
  const baseId = "http://localhost:5000/tipocategoria";

  const navigate = useNavigate();
  const goToCategoriasDashboard = () => {
    navigate("/categorias-dashboard", { replace: true });
  };

  //DATA SEND
  const [dataCategoria, setData] = useState({
    data: new FormData(),
  });

  const handleChangeCategoria = (e) => {
    let nameInput = e.target.name;
    let value;
    value = e.target.value;
    dataCategoria.data.set(nameInput, value);

    setData(dataCategoria);
  };

  const handleSubmitCategoria = (e) => {
    e.preventDefault();

    if (id) {
      axios
        .put(baseId + "/update/" + id, dataCategoria.data)
        .then((response) => {
          optionsModal = { ...optionsModal, message: "Categoria Editada" };
          setShow(true);
        });
    } else {
      axios.post(baseURL, dataCategoria.data).then((response) => {
        setShow(true);
      });
    }
  };

  const initDataWithId = (data) => {
    for (const property in data) {
      dataCategoria.data.set(property, data[property]);
    }
    setData(dataCategoria);
  };

  //END DATA SEND
  //MODAL
  const [show, setShow] = useState(false);
  let optionsModal = {
    title: "Operacion Exitosa",
    message: "La categoria fue agregada exitosamente",
    redirectTo: () => {
      navigate("/categorias-dashboard", { replace: true });
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
    <Helmet title="Formulario Categorias">
      <CommonSection title="Formulario Categorias" />
      <section style={{ padding: "30px 0px" }}>
        <Container>
          <Row>
            <Col lg="12">
              <Button color="secondary" onClick={goToCategoriasDashboard}>
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
                    placeholder="Ingresa el nombre de la categoria"
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
                onClick={goToCategoriasDashboard}
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

export default CategoriasForm;
