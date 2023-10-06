import React, { useState } from 'react';

import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Row, Container, Col, Card, CardBody, Button, Form, FormGroup, FormText, Label, Input  } from "reactstrap";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import imageSuc1 from "../../assets/images/PizzaPlaneta1.jpg";
import products from '../../assets/fake-data/products';

const cardProducts = [
    {
        id:'',
        name:'S',
        image:imageSuc1,
        price:'MXN 5.00',
        path:'',
        path3:'/product-dashboard',
        id_ofert:1,
    },
   

]


const ProductForm = ()=>{
const navigate = useNavigate();
const inventarioP =()=>{
    navigate('/product-dashboard',{replace:true})
   }



const goTo = (path)=>{
navigate(path,{replace:true})
}

    return (<Helmet title="Producto Formulario">
    <CommonSection title="Producto Formulario" />
    <section style={{ padding: "30px 0px" }}>
      <Container>
        <Row>
          <Col lg="12">
            <Button color="secondary" onClick={inventarioP}>
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
                    <Label for="productName">Nombre</Label>
                    <Input
                    id="productName"
                    name="name"
                    placeholder="Ingresa el queso disponible"
                    type="text"
                    />
              </FormGroup>
              <FormGroup>
                    <Label for="productImage">
                    Imagen
                    </Label>
                    <Input
                    id="productImage"
                    name="image"
                    type="file"
                    />
                    <FormText>
                    Selecciona la imagen del producto.
                    </FormText>
                </FormGroup>
              <FormGroup>
                    <Label for="productPrice">Precio</Label>
                    <Input
                    id="productPrice"
                    name="price"
                    placeholder="0.00"
                    type="tel"
                    />
              </FormGroup>
              <FormGroup>
                    <Label for="productDes">Descripcion</Label>
                    <Input
                    id="productDes"
                    name="description"
                    placeholder="Ingresa descripcion del producto"
                    type="text"
                    />
              </FormGroup>
              <FormGroup>
                <Label for="productSelect">Tipo Oferta</Label>
                <Input id="productSelect" name="select" type="select">
                  <option>Ninguna</option>
                  <option>Oferta 1</option>
                  <option>Oferta 2</option>
                </Input>
              </FormGroup>
              <Button color="success">Agregar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>)
}

export default ProductForm;