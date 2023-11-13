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
  FormText,
} from "reactstrap";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ModalComponent from "../../components/Modal/modal";
import ENDPOINTS from "../../utils/constants";

const ProveedorForm = () => {
  const baseURL = ENDPOINTS.PROVEEDORES_ADD;
  const baseId = ENDPOINTS.PROVEEDORES;
  const navigate = useNavigate();

  const goToProveedoresDashboard = () => {
    navigate("/proveedores-dashboard", { replace: true });
  };

  // DATA SEND
  const [dataProveedores, setDataProveedores] = useState({
    data: new FormData(),
  });

  const handleChangeProveedores = (e) => {
    let nameInput = e.target.name;
    let value;
    if (nameInput === "productImage") {
      value = e.target.files[0];
      dataProveedores.data.set("image", value);
    } else {
      value = e.target.value;
      dataProveedores.data.set(nameInput, value);
    }
    setDataProveedores(dataProveedores);
  };

  const handleSubmitProveedores = (e) => {
    e.preventDefault();
    console.log(dataProveedores);
    if (id) {
      axios
        .put(`${baseId}/update/${id}`, dataProveedores.data)
        .then((response) => {
          optionsEditModal = {
            title: "Operación Exitosa",
            message: "Proveedor editado exitosamente",
            redirectTo: () => {
              navigate("/proveedores-dashboard", { replace: true });
            },
          };
          setShowEditModal(true);
        });
    } else {
      axios.post(baseURL, dataProveedores.data).then((response) => {
        optionsAddModal = {
          title: "Operación Exitosa",
          message: "Proveedor Agregado",
          redirectTo: () => {
            navigate("/proveedores-dashboard", { replace: true });
          },
        };
        setShowAddModal(true);
      });
    }
  };

  const initDataWithId = (data) => {
    for (const property in data) {
      dataProveedores.data.set(property, data[property]);
    }
    setDataProveedores(dataProveedores);
  };

  // END DATA SEND

  // MODAL
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  let optionsEditModal = {
    title: "Operación Exitosa",
    message: "Proveedor editado exitosamente",
    redirectTo: () => {
      navigate("/proveedores-dashboard", { replace: true });
    },
  };

  let optionsAddModal = {
    title: "Operación Exitosa",
    message: "Proveedor Agregado",
    redirectTo: () => {
      navigate("/proveedores-dashboard", { replace: true });
    },
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  // ID
  const { id } = useParams();
  React.useEffect(() => {
    if (id) {
      axios.get(`${baseId}/${id}`).then((response) => {
        setDataForm(response.data[0]);
        initDataWithId(response.data[0]);
      });
    }
    dataProveedores.data.set("id_supplier", "1");
    setDataProveedores(dataProveedores);
  }, []);

  const [dataForm, setDataForm] = React.useState([{}]);

  // END ID

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
                  <Label for="supplier_name">Proveedor</Label>
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
                  <Label for="supplier_product">Productos</Label>
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

                <Button style={{ display: id ? "none" : "" }} color="success">
                  Agregar
                </Button>
                <Button style={{ display: !id ? "none" : "" }} color="warning">
                  Editar
                </Button>
              </Form>
            </Col>
          </Row>

          <Row>
            <Col xs={12} style={{ paddingTop: "10px" }}>
              <Button
                style={{ display: !id ? "none" : "" }}
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
          show={showEditModal}
          handleClose={handleCloseEditModal}
          optionsModal={optionsEditModal}
        ></ModalComponent>
        <ModalComponent
          show={showAddModal}
          handleClose={handleCloseAddModal}
          optionsModal={optionsAddModal}
        ></ModalComponent>
      </section>
    </Helmet>
  );
};

export default ProveedorForm;
