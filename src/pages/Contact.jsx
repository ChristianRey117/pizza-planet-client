import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import whyImg from "../assets/images/equipo.jpg";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const Contact = () => {
  return (
    <Helmet title="Sobre Nosotros">
      <CommonSection title="Sobre Nosotros" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-foodie" className="w-100"></img>
            </Col>
            <Col lg="6" md="6">
              <div className="why__foodie">
                <h2 className="foodie-title mb-4">
                  Presentación <span>Pizza Planeta</span>
                </h2>
                <p className="foodie-desc">
                  Bienvenidos a "Pizza Planeta" en el centro de Mérida, Yucatán!
                  En "Pizza Planeta," fusionamos la tradición de la pizza
                  artesanal con toques yucatecos únicos. Nuestras pizzas son
                  auténticas obras maestras, preparadas con ingredientes frescos
                  locales y una pasión por la excelencia culinaria. Te invitamos
                  a explorar un universo de sabores en cada bocado. En "Pizza
                  Planeta," la calidad y la comunidad se unen para ofrecerte una
                  experiencia gastronómica inolvidable.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
