import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Register = () => {
  const registerNameRef = useRef();
  const registerLastNameRef = useRef();
  const registerPasswordRef = useRef();
  const registerEmailRef = useRef();
  const registerPhoneRef = useRef();
  const registerSucursalRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Helmet title="Register">
      <CommonSection title="Registro" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Nombre"
                    ref={registerNameRef}
                  ></input>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Apellidos"
                    ref={registerLastNameRef}
                  ></input>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Correo Electronico"
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

                <div className="form__group">
                  <input
                    type="tel"
                    placeholder="Numero de telefono"
                    ref={registerPhoneRef}
                  ></input>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Sucursal cercana"
                    ref={registerSucursalRef}
                  ></input>
                </div>

                <button type="submit" className="addToCart__btn">
                  Registrar usuario
                </button>
              </form>
              <Link to="/login">Ya tienes una cuenta? Ingresa</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
