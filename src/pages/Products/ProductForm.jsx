import React, { useState, useEffect } from "react";

import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import {
  Row,
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
} from "reactstrap";
import { Routes, Route, useNavigate, useParams, link } from "react-router-dom";

import axios from "axios";
import ModalComponent from "../../components/Modal/modal";
import ENDPOINTS from "../../utils/constants";

const baseURL = ENDPOINTS.PRODUCTOS_ADD;
const baseId = ENDPOINTS.PRODUCTOS;
const baseOfertas = ENDPOINTS.OFERTAS;
const baseCategorias = ENDPOINTS.TIPOSCATEGORIAS;

const ProductForm = () => {
  const dataAsync = async () => {
    if (id) {
      axios.get(baseId + "/" + id).then((response) => {
        setDataForm(response.data[0]);
        initDataWithId(response.data[0]);
      });
    }
    setData(dataProducts);

    axios.get(baseOfertas).then((response) => {
      setDataOfertas(response.data);
      if (!id) {
        initDataWithId(response.data[0]);
      }
    });
    axios.get(baseCategorias).then((responseCategorias) => {
      setDataCategorias(responseCategorias.data);
      if (!id) {
        initDataWithId(responseCategorias.data[0]);
      }
    });
  };

  const navigate = useNavigate();
  const inventarioP = () => {
    navigate("/product-dashboard", { replace: true });
  };
  const goTo = (path) => {
    navigate(path, { replace: true });
  };

  // DATA TO SEND

  const [dataProducts, setData] = useState({
    data: new FormData(),
  });

  const handleChangeProduct = (e) => {
    let nameInput = e.target.name;
    let value;
    if (nameInput === "image") {
      nameInput = "file";
      value = e.target.files[0];
      dataProducts.data.set("image", value);
    } else {
      value = e.target.value;
      if (nameInput === "id_ofert" || nameInput === "id_type_category") {
        value = Number(value);
      }
      dataProducts.data.set(nameInput, value);
    }
    setData(dataProducts);
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    console.log(dataProducts);
    if (id) {
      axios
        .put(baseId + "/update/" + id, dataProducts.data)
        .then((response) => {
          optionsEditModal = {
            title: "Operación Exitosa",
            message: "Producto editado exitosamente",
            redirectTo: () => {
              navigate("/product-dashboard", { replace: true });
            },
          };
          setShowEditModal(true);
        });
    } else {
      axios.post(baseURL, dataProducts.data).then((response) => {
        optionsAddModal = {
          title: "Operación Exitosa",
          message: "Producto Agregado",
          redirectTo: () => {
            navigate("/product-dashboard", { replace: true });
          },
        };
        setShowAddModal(true);
      });
    }
  };

  const initDataWithId = (data) => {
    for (const property in data) {
      if (property === "id_category") {
        dataProducts.data.set("id_type_category", data[property]);
      } else {
        dataProducts.data.set(property, data[property]);
      }
    }
    setData(dataProducts);
  };
  // END SEND DATA

  // MODAL
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  let optionsEditModal = {
    title: "Operación Exitosa",
    message: "Producto editado exitosamente",
    redirectTo: () => {
      navigate("/product-dashboard", { replace: true });
    },
  };

  let optionsAddModal = {
    title: "Operación Exitosa",
    message: "Producto Agregado",
    redirectTo: () => {
      navigate("/product-dashboard", { replace: true });
    },
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };
  // END MODAL

  const { id } = useParams();
  React.useEffect(() => {
    dataAsync();
  }, []);
  const [dataForm, setDataForm] = React.useState([{}]);
  const [dataOfertas, setDataOfertas] = React.useState([{}]);
  const [dataCategorias, setDataCategorias] = React.useState([{}]);

  return (
    <Helmet title="Producto Formulario">
      <CommonSection title="Producto Formulario" />
      <section style={{ padding: "30px 0px" }}>
        <Container>
          <Row>
            <Col lg="12">
              <Button
                style={{ backgroundColor: "black", color: "white" }}
                onClick={inventarioP}
              >
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
              <Form method="post" onSubmit={handleSubmitProduct}>
                <FormGroup>
                  <Label for="productName">Nombre del producto</Label>
                  <Input
                    id="product_name"
                    name="product_name"
                    placeholder="Ingresa el nombre del producto"
                    type="text"
                    onChange={handleChangeProduct}
                    defaultValue={id ? dataForm?.product_name : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="product_price">Precio</Label>
                  <Input
                    id="product_price"
                    name="product_price"
                    placeholder="0.00"
                    type="tel"
                    onChange={handleChangeProduct}
                    defaultValue={id ? dataForm?.product_price : null}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="ofert">Tipo Oferta</Label>
                  <Input
                    id="id_ofert"
                    name="id_ofert"
                    type="select"
                    onChange={handleChangeProduct}
                    defaultValue={
                      id ? dataForm?.id_ofert : dataOfertas[0].id_ofert
                    }
                  >
                    {dataOfertas.map((oferta) => {
                      return (
                        <option
                          value={oferta.id_ofert}
                          label={oferta.name_ofert + " - " + oferta.discount}
                          selected={dataForm.id_ofert === oferta.id_ofert}
                        ></option>
                      );
                    })}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="category">Tipo de Categoria</Label>
                  <Input
                    id="id_type_category"
                    name="id_type_category"
                    type="select"
                    onChange={handleChangeProduct}
                    defaultValue={
                      id
                        ? dataForm?.id_type_category
                        : dataCategorias[0].id_category
                    }
                  >
                    {dataCategorias.map((categoria) => (
                      <option
                        value={categoria.id_category}
                        label={categoria.name_category}
                        selected={
                          dataForm?.id_type_category === categoria.id_category
                        }
                      ></option>
                    ))}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="image">Imagen</Label>
                  <Input
                    id="image"
                    name="image"
                    type="file"
                    onChange={handleChangeProduct}
                  />
                  <FormText>Selecciona la imagen del producto.</FormText>
                </FormGroup>
                <Button style={{ display: id ? "none" : "" }} color="warning">
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
                onClick={inventarioP}
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

export default ProductForm;
