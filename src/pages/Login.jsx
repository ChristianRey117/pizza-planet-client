import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import ModalComponent from "../components/Modal/modal";

const baseURL = "http://localhost:5000/login";

const Login = () => {
  const navigate = useNavigate();

  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    var userData = {
      user_email: loginNameRef.current.value,
      user_password: loginPasswordRef.current.value,
    };

    axios.post(baseURL, userData).then((response) => {
      if (response.data.err) {
        setOptionModal({
          ...optionModal,
          message: response.data.err,
          title: "Error",
          redirectTo: () => {
            setShow(false);
          },
        });
      } else {
        //localStorage.setItem("token", response.data.accessToken);
        var datosStorage = {
          token: response.data.info.token,
          tipo_usuario: response.data.info.tipo_usuario,
          id_usuario: response.data.info.id_usuario,
        };
        localStorage.setItem("datosUser", JSON.stringify(datosStorage));

        if (response.data.info.tipo_usuario === 1) {
          setOptionModal({
            ...optionsModal,
            redirectTo: () => {
              navigate("/usuarios-form/" + response.data.info.id_usuario, {
                replace: true,
              });
            },
          });
        } else {
          setOptionModal({
            ...optionsModal,
            redirectTo: () => {
              navigate("/admin-menu", { replace: true });
            },
          });
        }
      }
      setShow(true);
    });
  };

  const loginUser = () => {
    navigate("/admin-menu", { replace: true });
  };

  //MODAL
  const [show, setShow] = useState(false);
  const [optionModal, setOptionModal] = useState({});
  const optionsModal = {
    title: "Inicio de sesion",
    message: "Inicio de sesion exitoso",
    redirectTo: () => {
      navigate("/admin-menu", { replace: true });
    },
  };
  const handleClose = () => setShow(false);
  //END MODAL

  React.useEffect(() => {
    setOptionModal(optionModal);
  }, []);

  return (
    <Helmet title="Inicio de sesion">
      <CommonSection title="Inicio de sesion" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Correo Electronico"
                    ref={loginNameRef}
                  ></input>
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    ref={loginPasswordRef}
                  ></input>
                </div>
                <button type="submit" className="addToCart__btn">
                  Iniciar sesion
                </button>
              </form>
              <Link to="/register">Primera vez aqui? Crear cuenta</Link>
            </Col>

            <section>
              <ModalComponent
                show={show}
                handleClose={handleClose}
                optionsModal={optionModal}
              ></ModalComponent>
            </section>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
