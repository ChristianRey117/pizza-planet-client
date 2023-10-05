import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

 const loginUser =()=>{
  navigate('/admin-menu',{replace:true})
 }

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
                <button type="submit" className="addToCart__btn" onClick={loginUser}>
                  Iniciar sesion
                </button>
              </form>
              <Link to="/register">Primera vez aqui? Crear cuenta</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
