import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Register = () => {
  const registerNameRef = useRef();
  const registerLastNameRef = useRef();
  const registerPhoneRef = useRef();
  const registerAddressRef = useRef();
  const registerPasswordRef = useRef();
  const registerEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };
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
              <Link to="/login">Ya tienes una cuenta? Inicia sesion</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
