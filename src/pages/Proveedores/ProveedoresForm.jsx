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
      console.log("Value--->", value);
    } else {
      value = e.target.value;
      dataProveedores.data.set(nameInput, value);
    }
    setData(dataProveedores);
  };

  const handleSubmitProveedores = (e) => {
    e.preventDefault();
    console.log(dataProveedores);
    if (id) {
      axios
        .put(baseId + "/update/" + id, dataProveedores.data)
        .then((response) => {
          console.log(response);
          optionsModal = { ...optionsModal, message: "Proveedor Editado" };
          setShow(true);
        });
    } else {
      axios.post(baseURL, dataProveedores.data).then((response) => {
        console.log("Response----->", response);
        setShow(true);
      });
    }
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
        console.log(dataForm);
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
                  <Label for="proveedorProduct">Producto</Label>
                  <Input
                    id="supplier_product"
                    name="supplier_product"
                    placeholder="Ingresa el nombre del producto"
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

                <Button color="success">Agregar</Button>
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

export default ProveedorForm;
