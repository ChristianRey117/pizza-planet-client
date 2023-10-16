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

const baseURL = "http://localhost:5000/sucursales/add";
const baseId = "http://localhost:5000/sucursales";

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
    if(id){
      axios.put(baseId + '/update/' + id, dataSucursal.data).then((response) =>{
        console.log(response);
        optionsModal = {...optionsModal, message:'Sucursal Editada'}
        setShow(true);
      })
    }else{
      axios.post(baseURL, dataSucursal.data).then((response) => {
        console.log("Response----->", response);
        setShow(true);
      });
    }
    
  };
  //END SEND DATA

  //MODAL
  const [show, setShow] = useState(false);
  let optionsModal = {
    title: "Operacion Exitosa",
    message: "La sucursal fue agregada exitosamente",
    redirectTo: () => {
      navigate("/sucursales-dashboard", { replace: true });
    },
  };
  const handleClose = () => setShow(false);
  //END MODAL

  const {id} = useParams();
  React.useEffect(() => {
    if(id){
      axios.get(baseId + '/' + id).then(response=>{
        setDataForm(response.data[0]);
        console.log(dataForm);

      })
    }
    dataSucursal.data.set('id_supplier', '1');
    setData(dataSucursal);
  }, []);
  const [dataForm, setDataForm] = React.useState([{}]);


  return (
    <Helmet title="Inventario Formulario">
      <CommonSection title="Inventario Formulario "  />
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
                    defaultValue={id ? dataForm?.branch_name : null}
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
                    defaultValue={id ? dataForm?.branch_direction : null}
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
                    defaultValue={id ? dataForm?.work_personnel : null}
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

export default SucursalForm;
