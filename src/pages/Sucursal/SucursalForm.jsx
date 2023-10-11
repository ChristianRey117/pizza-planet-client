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
import { Routes, Route, useNavigate } from "react-router-dom";

const SucursalForm = () => {
  const navigate = useNavigate();

  const goToInventarioDashboard = () => {
    navigate("/sucursales-dashboard", { replace: true });
  };

  // DATA TO SEND
  const [dataSucursal, setData] = useState({branch_name:'',branch_direction:'',work_personnel:0, supplier: ''});

  const handleChangeSucursal = (e) =>{
    const nameInput = e.target.name;
    const value = e.target.value;
    setData({...dataSucursal, [nameInput]: value})
  }

  const handleSubmitSucursal = (e)=>{
    e.preventDefault();
    console.log(dataSucursal);
  }
  //END SEND DATA

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
              <Form method="post" onSubmit={handleSubmitSucursal}>
                <FormGroup>
                  <Label for="branch_name">Sucursal</Label>
                  <Input
                    id="branch_name"
                    name="branch_name"
                    placeholder="Ingresa el nombre de la sucursal"
                    type="tel"
                    onChange={handleChangeSucursal}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="branch_direction">Dirección</Label>
                  <Input
                    id="branch_direction"
                    name="branch_direction"
                    placeholder="Ingresa la dirección"
                    type="text"
                    onChange={handleChangeSucursal}

                  />
                </FormGroup>

                <FormGroup>
                  <Label for="supplier">Proveedores</Label>
                  <Input id="supplier" name="supplier" type="select" 
                    onChange={handleChangeSucursal}

                  >
                    <option>El abuelo</option>
                    <option>Tia Rosa</option>
                    <option>Costeña</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="work_personnel">
                    Trabajadores disponibles
                  </Label>
                  <Input
                    id="work_personnel: "
                    name="work_personnel"
                    placeholder="Ingresa el numero de trabajadores"
                    type="tel"
                    onChange={handleChangeSucursal}

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
