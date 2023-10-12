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
import axios from "axios";

const baseURL = "http://localhost:5000/sucursales/add";

const SucursalForm = () => {
  const navigate = useNavigate();

  const goToInventarioDashboard = () => {
    navigate("/sucursales-dashboard", { replace: true });
  };

  // DATA TO SEND

  const [dataSucursal, setData] = useState({
    data: new FormData(),
  });

  const handleChangeSucursal = (e) => {
    let nameInput = e.target.name;
    let value;
    if (nameInput == "branch_image") {
      nameInput = "file";
      value = e.target.files[0];
      // const formData = new FormData();
      // formData.append("file", value);
      // value = formData;
      dataSucursal.data.set("image", value);
    } else {
      value = e.target.value;
      // const formData = new FormData();
      // formData.append(nameInput, value);
      // value = formData;
      if (nameInput == "id_supplier") {
        value = Number(value);
        console.log("id_supplier", value);
      }

      dataSucursal.data.set(nameInput, value);
    }
    setData(dataSucursal);
  };

  const handleSubmitSucursal = (e) => {
    e.preventDefault();
    console.log(dataSucursal);
    axios.post(baseURL, dataSucursal.data).then((response) => {
      console.log("Response----->", response);
    });
  };
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
                  <Label for="id_supplier">Proveedores</Label>
                  <Input
                    id="id_supplier"
                    name="id_supplier"
                    type="select"
                    onChange={handleChangeSucursal}
                  >
                    <option value="1">El abuelo</option>
                    <option value="2">Tia Rosa</option>
                    <option value="3">Costeña</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="work_personnel">Trabajadores disponibles</Label>
                  <Input
                    id="work_personnel: "
                    name="work_personnel"
                    placeholder="Ingresa el numero de trabajadores"
                    type="tel"
                    onChange={handleChangeSucursal}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="branch_image">Imagen proveedores</Label>
                  <Input
                    id="branch_image: "
                    name="branch_image"
                    placeholder="Selecciona la imagen del proveedor"
                    type="file"
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
