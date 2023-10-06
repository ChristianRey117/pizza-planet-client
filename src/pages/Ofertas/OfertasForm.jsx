import React from "react";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Routes, Route, useNavigate } from "react-router-dom";




const OfertasForm = () => {
    const navigate = useNavigate();
  const goToOfertasDashboard = () => {
    navigate("/ofertas-dashboard", { replace: true });
  };
  return (
    <Helmet title="Formulario Ofertas">
      <CommonSection title="Formulario Ofertas" />
      <section style={{ padding: "30px 0px" }}>
        <Container>
          <Row>
            <Col lg="12">
              <Button color="secondary" onClick={goToOfertasDashboard}>
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
                  <Label for="OfertaName"> Nombre: </Label>
                  <Input
                    id="Ofertaid"
                    name="oferta"
                    placeholder="Ingresa el nombre"
                    type="tel"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="description"> Descripción: </Label>
                  <Input
                    id="descriptionid"
                    name="description"
                    placeholder="Ingresa la descripción"
                    type="tel"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="discount"> Descuento:</Label>
                  <Input
                    id="discountid"
                    name="discount"
                    placeholder="Ingresa la cantidad fija"
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


export default OfertasForm;





