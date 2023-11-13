import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Routes, Route, useNavigate, useParams, Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import ModalComponent from "../components/Modal/modal";
import ENDPOINTS from "../utils/constants";

const baseURL = ENDPOINTS.USUARIOS_ADD;

const Register = () => {
  const navigate = useNavigate();

  const registerNameRef = useRef();
  const registerLastNameRef = useRef();
  const registerPhoneRef = useRef();
  const registerAddressRef = useRef();
  const registerPasswordRef = useRef();
  const registerEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    var userData = {
      user_name:
        registerNameRef.current.value + " " + registerLastNameRef.current.value,
      phone: registerPhoneRef.current.value,
      user_email: registerEmailRef.current.value,
      user_password: registerPasswordRef.current.value,
      direction: registerAddressRef.current.value,
      id_type_users: 1,
    };

    axios.post(baseURL, userData).then((response) => {
      setShow(true);
    });
  };

  //MODAL
  const [show, setShow] = useState(false);
  let optionsModal = {
    title: "Usuario Registrado",
    message: "El usuario fue registrado exitosamente",
    redirectTo: () => {
      navigate("/login", { replace: true });
    },
  };
  const handleClose = () => setShow(false);
  //END MODAL
  return (
    <Helmet title="Registro">
      <CommonSection title="Registro" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Nombre(s)"
                    ref={registerNameRef}
                  ></input>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Apellido(s)"
                    ref={registerLastNameRef}
                  ></input>
                </div>

                <div className="form__group">
                  <input
                    type="tel"
                    placeholder="Telefono"
                    ref={registerPhoneRef}
                  ></input>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Direccion"
                    ref={registerAddressRef}
                  ></input>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Correo electronico"
                    ref={registerEmailRef}
                  ></input>
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    ref={registerPasswordRef}
                  ></input>
                </div>
                <button type="submit" className="addToCart__btn">
                  Registrar
                </button>
              </form>
              <Link to="/login">Inicia sesion</Link>
            </Col>

            <section>
              <ModalComponent
                show={show}
                handleClose={handleClose}
                optionsModal={optionsModal}
              ></ModalComponent>
            </section>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
