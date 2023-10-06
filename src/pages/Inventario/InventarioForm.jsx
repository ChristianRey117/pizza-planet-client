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

const InventarioForm = () => {
  const navigate = useNavigate();

  const goToInventarioDashboard = () => {
    navigate("/inventario-dashboard", { replace: true });
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
                  <Label for="sucursalesSelect">Sucursal</Label>
                  <Input id="sucursalesSelect" name="select" type="select">
                    <option>Luna</option>
                    <option>Jupiter</option>
                    <option>Marte</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="ammountQueso">Queso disponible</Label>
                  <Input
                    id="ammountQueso"
                    name="queso"
                    placeholder="Ingresa el queso disponible"
                    type="tel"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="ammountSalsa">Salsa disponible</Label>
                  <Input
                    id="ammountSalsa"
                    name="salsa"
                    placeholder="Ingresa la salsa disponible"
                    type="tel"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="ammountHarina">Harina disponible</Label>
                  <Input
                    id="ammountHarina: "
                    name="salsa"
                    placeholder="Ingresa la harina disponible"
                    type="tel"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="ammountChampiñones">Champiñones disponible</Label>
                  <Input
                    id="ammountChampiñones"
                    name="salsa"
                    placeholder="Ingresa los champiñones disponibles"
                    type="tel"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="ammountPineapple">Piña disponible</Label>
                  <Input
                    id="ammountPineapple"
                    name="piña"
                    placeholder="Ingresa la piña disponible"
                    type="tel"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="ammountChiles">Chiles disponible</Label>
                  <Input
                    id="ammountChiles"
                    name="chiles"
                    placeholder="Ingresa los chiles disponibles"
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

export default InventarioForm;
