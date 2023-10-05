import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Pizza Planeta</h5>
              <p>
                Fast and easy food delivery service to spoil the foodie within
                you.
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Horario de entrega</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Lunes - Sabado</span>
                <p>13:00pm - 21:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Domingo</span>
                <p>12 :00pm - 22:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contacto</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Dirección: Mérida, 50 Centro</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Número telefonico: 999 345 023</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Correo: pizzaplaneta@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Suscribete a nuestras promociones</h5>
            <p>Suscribete</p>
            <div className="newsletter">
              <input type="email" placeholder="Ingresa tu correo"></input>
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="12" md="12">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Siguenos en: </p>
              <span>
                <Link to="https://www.facebook.com/tramngoc1999">
                  <i className="ri-facebook-circle-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/tramnguyenhere">
                  <i className="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/in/tramnguyenhere/">
                  <i className="ri-linkedin-box-fill"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
