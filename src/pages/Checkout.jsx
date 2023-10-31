import React, { useState } from "react";

import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";
import axios from "axios";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Modal,
} from "reactstrap";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";
import ModalCompra from "../components/Modal/ModalCompra";

const baseCompra = "http://localhost:5000/compras/add";
const baseCheckout = "http://localhost:5000/usuario";

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const years = ["2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredVecindario, setEnteredVecindario] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartProducts = useSelector((state) => state.cart.cartItems);

  const [dataCompra, setDataCompra] = useState({
    data: new FormData(),
  });

  const shippingCost = 10;
  const totalAmount = cartTotalAmount + shippingCost;
  const submitHandler = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("datosUser"));
    const id_usuario = user.id_usuario;

    var compra = {
      id_user: id_usuario,
      products: cartProducts,
    };

    dataCompra.data.set("id_user", id_usuario);
    dataCompra.data.set("products", cartProducts);
    setDataCompra(dataCompra);

    axios.post(baseCompra, compra).then((response) => {
      cartProducts.forEach((element) => {
        dispatch(cartActions.deleteItem(element.id_product));
      });
      setOptionModal({
        ...optionModal,
        client: userDatos.user_name,
        vecindario: userDatos.neighborhood,
        direction: userDatos.direction,
        products: cartProducts,
        total: totalAmount,
      });
      setShow(true);
    });

    const userShippingAddress = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredNumber,
      address: enteredAddress,
    };

    //shippingInfo.push(userShippingAddress);
  };

  const changeInfo = () => {
    const user = JSON.parse(localStorage.getItem("datosUser"));
    const id_usuario = user.id_usuario;
    navigate("/usuarios-form/" + id_usuario);
  };

  React.useEffect(() => {
    setOptionModal({
      ...optionsModal,
      client: "",
      vecindario: "",
      products: [],
      Total: totalAmount,
    });
    const user = JSON.parse(localStorage.getItem("datosUser"));

    axios.get(baseCheckout + "/" + user.id_usuario).then((response) => {
      console.log(response.data[0]);
      const datosUsuario = response.data[0];
      setUserDatos(datosUsuario);

      setEnteredName(datosUsuario.user_name);
      setEnteredAddress(datosUsuario.direction);
      setEnteredEmail(datosUsuario.user_email);
      setEnteredNumber(datosUsuario.phone);
      setEnteredVecindario(datosUsuario.neighborhood);
    });
  }, []);

  //MODAL
  const [show, setShow] = useState(false);
  let optionsModal = {
    title: "Compra Exitosa",
    redirectTo: () => {
      const user = JSON.parse(localStorage.getItem("datosUser"));
      navigate("/compras/usuario/" + user.id_usuario);
    },
  };
  const handleClose = () => setShow(false);
  const [optionModal, setOptionModal] = useState({});

  //END MODAL
  const [userDatos, setUserDatos] = useState({});

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row style={{ paddingBottom: "5%" }}>
            <Col xs="12">
              <Button onClick={changeInfo}>Cambiar Informacion</Button>
            </Col>
          </Row>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Dirección de envio</h6>
              <form
                action=""
                className="checkout__form"
                onSubmit={submitHandler}
              >
                <div className="form__group">
                  <input
                    required
                    type="text"
                    placeholder="Nombre(s)"
                    defaultValue={enteredName}
                    onChange={(e) => setEnteredName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    required
                    type="email"
                    placeholder="Correo Electronico"
                    defaultValue={enteredEmail}
                    onChange={(e) => setEnteredEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    required
                    type="number"
                    placeholder="Numero Telefonico"
                    defaultValue={enteredNumber}
                    onChange={(e) => setEnteredNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    required
                    type="text"
                    placeholder="Calle"
                    defaultValue={enteredAddress}
                    onChange={(e) => setEnteredAddress(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    required
                    type="text"
                    placeholder="Vecindario"
                    disabled={true}
                    defaultValue={enteredVecindario}
                    onChange={(e) => setEnteredVecindario(e.target.value)}
                  />
                </div>

                <div>
                  <h6>Datos de la tarjeta</h6>

                  <Row>
                    <Col xs={6}>
                      <div className="form__group">
                        <input
                          required
                          type="text"
                          placeholder="Nombre del Titular"
                        />
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="form__group">
                        <input
                          required
                          type="tel"
                          placeholder="Numeros de la tarjeta"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={3}>
                      <div
                        className="form__group"
                        style={{
                          position: "relative",
                          bottom: "-63px",
                          left: "0px",
                        }}
                      >
                        <input required type="text" placeholder="CVV" />
                      </div>
                    </Col>
                    <Col xs={9}>
                      <Label
                        style={{
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                          textAlign: "center",
                        }}
                      >
                        <b>Vigencia</b>
                      </Label>

                      <Row>
                        <Col xs={6}>
                          <div className="form__group select-container">
                            <Label>Año</Label>

                            <Input type="select">
                              {years.map((year) => {
                                return (
                                  <option label={year} value={year}></option>
                                );
                              })}
                            </Input>
                          </div>
                        </Col>

                        <Col xs={6}>
                          <div className="form__group select-container">
                            <Label>Mes</Label>
                            <Input type="select">
                              {meses.map((mes) => {
                                return (
                                  <option label={mes} value={mes}></option>
                                );
                              })}
                            </Input>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>

                <button className="addToCart__btn">Pagar por su orden</button>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal:<span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Envio:<span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <ModalCompra
                optionsModal={optionModal}
                show={show}
                handleClose={handleClose}
              ></ModalCompra>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
