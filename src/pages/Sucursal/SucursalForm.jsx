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
} from "reactstrap";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ModalComponent from "../../components/Modal/modal";
import { current } from "@reduxjs/toolkit";

const baseURL = "http://localhost:5000/sucursales/add";
const baseId = "http://localhost:5000/sucursales";
const baseProveedores = "http://localhost:5000/proveedores";

const SucursalForm = () => {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({}); // Agrega esta línea para dataForm

  const goToInventarioDashboard = () => {
    navigate("/sucursales-dashboard", { replace: true });
  };

  // Datos para enviar
  const [dataSucursal, setData] = useState({
    data: new FormData(),
  });

  const handleChangeSucursal = (e) => {
    let nameInput = e.target.name;
    let value;

    if (nameInput === "branch_image") {
      nameInput = "file";
      value = e.target.files[0];
      dataSucursal.data.set("image", value);
    } else {
      value = e.target.value;
      if (nameInput === "id_supplier") {
        value = Number(value);
      }

      dataSucursal.data.set(nameInput, value);
    }

    setData(dataSucursal);
  };

  const handleSubmitSucursal = (e) => {
    e.preventDefault();
    dataSucursal.data.append(
      "ids_supliers",
      JSON.stringify(selectedProveedores)
    );
    if (id) {
      axios
        .put(`${baseId}/update/${id}`, dataSucursal.data)
        .then((response) => {
          optionsEditModal = {
            title: "Operación Exitosa",
            message: "La sucursal fue editada exitosamente",
            redirectTo: () => {
              navigate("/sucursales-dashboard", { replace: true });
            },
          };
          setShowEditModal(true);
        })
        .catch((error) => {
          console.error("Error al editar la sucursal:", error);
          // Manejar el error, por ejemplo, mostrar un modal de error
        });
    } else {
      axios
        .post(baseURL, dataSucursal.data)
        .then((response) => {
          optionsAddModal = {
            title: "Operación Exitosa",
            message: "La sucursal fue agregada exitosamente",
            redirectTo: () => {
              navigate("/sucursales-dashboard", { replace: true });
            },
          };
          setShowAddModal(true);
        })
        .catch((error) => {
          console.error("Error al agregar la sucursal:", error);
          // Manejar el error, por ejemplo, mostrar un modal de error
        });
    }
  };

  const initDataWithId = (data) => {
    for (const property in data) {
      if (property == "ids_suppliers") {
        let ids = data[property].split(",");
        ids = ids.map((_id) => {
          return (_id = Number(_id));
        });
        setSelectedProveedores(ids);
      } else {
        dataSucursal.data.set(property, data[property]);
      }
    }
    setData(dataSucursal);
  };

  // Estados y funciones para los modales
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  let optionsEditModal = {
    title: "Operacion Exitosa",
    message: "La sucursal fue editada exitosamente",
    redirectTo: () => {
      navigate("/sucursales-dashboard", { replace: true });
    },
  };

  let optionsAddModal = {
    title: "Operacion Exitosa",
    message: "La sucursal fue agregada exitosamente",
    redirectTo: () => {
      navigate("/sucursales-dashboard", { replace: true });
    },
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  // Obtener el ID de los parámetros
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      axios.get(`${baseId}/${id}`).then((response) => {
        setDataForm(response.data[0]);
        initDataWithId(response.data[0]);
      });
    }

    axios.get(baseProveedores).then((response) => {
      var options = response.data.map((option) => {
        return {
          value: option.id_supplier,
          label: option.supplier_name,
          name: "id_suplier",
        };
      });
      setProveedores(options);
      if (!id) {
        initDataWithId(response.data[0]);
      }
    });
    const select = document.getElementById("id_supplier");
    select.defaultValue = { label: "Hola", value: 1 };
  }, []);

  const [proveedores, setProveedores] = React.useState([{}]);
  const [selectedProveedores, setSelectedProveedores] = React.useState([]);
  const [clickSelect, setClickSelect] = useState(true);

  const onSelected = () => {
    const obj = [];
    selectedProveedores.map((select) => {
      return proveedores.map((prop) => {
        if (prop.value === select) {
          obj.push(prop);
        }
      });
    });

    return obj;
  };
  return (
    <Helmet title="Sucursales Formulario">
      <CommonSection title="Sucursales Formulario" />
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
                    type="text"
                    defaultValue={id ? dataForm?.branch_name : ""}
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
                    defaultValue={id ? dataForm?.branch_direction : ""}
                    onChange={handleChangeSucursal}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="id_supplier">Proveedores</Label>
                  <Row style={{ display: !id | !clickSelect ? "none" : "" }}>
                    <Col xs={12}>
                      <Label>Proveedores Actuales:</Label>
                    </Col>
                    {onSelected().map((current) => {
                      return (
                        <Col xs={3}>
                          <p style={{ backgroundColor: "grey" }}>
                            {current.label}
                          </p>
                        </Col>
                      );
                    })}
                  </Row>
                  <Select
                    id="id_supplier"
                    isMulti
                    className="basic-multi-select"
                    classNamePrefix="select"
                    options={proveedores}
                    onChange={(e) => {
                      setClickSelect(false);
                      let responseArray = [];
                      e.map((response) => {
                        responseArray.push(response.value);
                      });
                      setSelectedProveedores(responseArray);
                    }}
                    closeMenuOnSelect={false}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="work_personnel">Trabajadores disponibles</Label>
                  <Input
                    id="work_personnel"
                    name="work_personnel"
                    placeholder="Ingresa el numero de trabajadores"
                    type="number"
                    defaultValue={id ? dataForm?.work_personnel : ""}
                    onChange={handleChangeSucursal}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="branch_image">Imagen proveedores</Label>
                  <Input
                    id="branch_image"
                    name="branch_image"
                    placeholder="Selecciona la imagen del proveedor"
                    type="file"
                    onChange={handleChangeSucursal}
                  />
                </FormGroup>

                <Row>
                  <Col xs={12}>
                    <Button
                      style={{ display: id ? "none" : "" }}
                      color="success"
                    >
                      Agregar
                    </Button>
                    <Button
                      style={{ display: !id ? "none" : "" }}
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
                style={{ display: !id ? "none" : "" }}
                color="danger"
                onClick={goToInventarioDashboard}
              >
                Cancelar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Modal de edición */}
      <section>
        <ModalComponent
          show={showEditModal}
          handleClose={handleCloseEditModal}
          optionsModal={optionsEditModal}
        ></ModalComponent>
      </section>
      {/* Modal de agregar */}
      <section>
        <ModalComponent
          show={showAddModal}
          handleClose={handleCloseAddModal}
          optionsModal={optionsAddModal}
        ></ModalComponent>
      </section>
    </Helmet>
  );
};

export default SucursalForm;
