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

const SucursalForm = () => {
  const navigate = useNavigate();

  const goToInventarioDashboard = () => {
    navigate("/sucursales-dashboard", { replace: true });
  };

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
              <Form>
                <FormGroup>
                  <Label for="sucursalName">Sucursal</Label>
                  <Input
                    id="sucursalName"
                    name="sucursalName"
                    placeholder="Ingresa el nombre de la sucursal"
                    type="tel"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="sucursalAddress">Dirección</Label>
                  <Input
                    id="sucursalAddress"
                    name="sucursalAddress"
                    placeholder="Ingresa la dirección"
                    type="text"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="sucursalProveedores">Proveedores</Label>
                  <Input id="sucursalProveedores" name="select" type="select">
                    <option>El abuelo</option>
                    <option>Tia Rosa</option>
                    <option>Costeña</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="sucursalesWorkers">
                    Trabajadores disponibles
                  </Label>
                  <Input
                    id="sucursalesWorkers: "
                    name="sucursalesWorkers"
                    placeholder="Ingresa el numero de trabajadores"
                    type="tel"
                  />
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

export default SucursalForm;
