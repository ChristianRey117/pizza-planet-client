import React from "react";
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
import { Routes, Route, useNavigate } from "react-router-dom";

const ProveedorForm = () => {
  const navigate = useNavigate();

  const goToProveedoresDashboard = () => {
    navigate("/proveedores-dashboard", { replace: true });
  };

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
              <Form>
                <FormGroup>
                  <Label for="proveedorName">Proveedor</Label>
                  <Input
                    id="proveedorName"
                    name="proveedorName"
                    placeholder="Ingresa el nombre del proveedor"
                    type="text"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="proveedorProduct">Producto</Label>
                  <Input
                    id="proveedorProduct"
                    name="proveedorProduct"
                    placeholder="Ingresa el nombre del producto"
                    type="text"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="productImage">Imagen</Label>
                  <Input id="productImage" name="image" type="file" />
                  <FormText>Selecciona la imagen del proveedor.</FormText>
                </FormGroup>

                <Button color="success">Agregar</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProveedorForm;
