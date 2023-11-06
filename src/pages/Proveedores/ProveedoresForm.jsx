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

const ProveedorForm = () => {
  const baseURL = "http://localhost:5000/proveedores/add";
  const baseId = "http://localhost:5000/proveedores";
  const navigate = useNavigate();

  const goToProveedoresDashboard = () => {
    navigate("/proveedores-dashboard", { replace: true });
  };

  //DATA SEND
  const [dataProveedores, setData] = useState({
    data: new FormData(),
  });

  const handleChangeProveedores = (e) => {
    let nameInput = e.target.name;
    let value;
    if (nameInput == "productImage") {
      value = e.target.files[0];
      dataProveedores.data.set("image", value);
    } else {
      value = e.target.value;
      dataProveedores.data.set(nameInput, value);
    }
    setData(dataProveedores);
  };

  const handleSubmitProveedores = (e) => {
    e.preventDefault();

    if (id) {
      axios
        .put(baseId + "/update/" + id, dataProveedores.data)
        .then((response) => {
          optionsModal = { ...optionsModal, message: "Proveedor Editado" };
          setShow(true);
        });
    } else {
      axios.post(baseURL, dataProveedores.data).then((response) => {
        setShow(true);
      });
    }
  };

  const initDataWithId = (data) => {
    for (const property in data) {
      dataProveedores.data.set(property, data[property]);
    }
    setData(dataProveedores);
  };

  //END DATA SEND

  //MODAL
  const [show, setShow] = useState(false);
  let optionsModal = {
    title: "Operacion Exitosa",
    message: "El proveedor fue agregado exitosamente",
    redirectTo: () => {
      navigate("/proveedores-dashboard", { replace: true });
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
    dataProveedores.data.set("id_supplier", "1");
    setData(dataProveedores);
  }, []);
  const [dataForm, setDataForm] = React.useState([{}]);
  //END ID

  return (
    <Helmet title="Proveedores Formulario">
      <CommonSection title="Proveedores Formulario" />
      <section style={{ padding: "30px 0px" }}>
        <Container>
          <Row>
            <Col lg="12">
              <Button color="secondary" onClick={goToProveedoresDashboard}>
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
              <Form method="post" onSubmit={handleSubmitProveedores}>
                <FormGroup>
                  <Label for="proveedorName">Proveedor</Label>
                  <Input
                    id="supplier_name"
                    name="supplier_name"
                    placeholder="Ingresa el nombre del proveedor"
                    type="text"
                    defaultValue={id ? dataForm?.supplier_name : null}
                    onChange={handleChangeProveedores}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="proveedorProduct">Productos</Label>
                  <Input
                    id="supplier_product"
                    name="supplier_product"
                    placeholder="Ingresa los nombres de los productos"
                    type="text"
                    defaultValue={id ? dataForm?.supplier_product : null}
                    onChange={handleChangeProveedores}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="productImage">Imagen</Label>
                  <Input
                    id="productImage"
                    name="productImage"
                    type="file"
                    onChange={handleChangeProveedores}
                  />
                  <FormText>Selecciona la imagen del proveedor.</FormText>
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
                onClick={goToProveedoresDashboard}
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

export default ProveedorForm;
