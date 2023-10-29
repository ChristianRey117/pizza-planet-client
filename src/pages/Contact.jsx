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
                ¡Bienvenidos a <span>  Pizza Planeta!</span>
                </h2>
                <p className="foodie-desc">
                  Ubicados en el centro de Mérida, Yucatán, no solo somos amantes de la pizza,
                  sino que también somos apasionados por llevar a nuestros clientes
                  en un viaje culinario que los transportará a través de las
                  estrellas y más allá. Fundada en la creencia de que la pizza 
                  puede ser una experiencia cósmica, hemos fusionado la deliciosa 
                  tradición de la pizza con la emoción de la exploración espacial.
                
                </p>
                  
                
                <p className="foodie-desc">  
                <h4 className="foodie-title mb-4">
                Nuestra <span>  Filosofía </span>
                </h4>
                   En Pizza Planeta, creemos en la calidad sin compromisos. Utilizamos
                   ingredientes frescos y de primera calidad en cada una de nuestras creaciones.
                    Nuestras pizzas se elaboran con pasión y se hornean a la perfección,
                    garantizando una experiencia culinaria que dejará una impresión duradera.
                    Además, nos enorgullece ofrecer un servicio de entrega a domicilio eficiente
                    para que nuestros clientes puedan disfrutar de nuestras delicias desde la
                   comodidad de sus hogares.

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
