import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <Helmet title="Acerca de nosotros">
      <CommonSection title="Acerca de nosotros" />
      <section>
        <Container>
          <Row>
            <Col>
              <h4>
                ¡Bienvenidos a "Pizza Planeta" en el centro de Mérida, Yucatán!
                En "Pizza Planeta," fusionamos la tradición de la pizza
                artesanal con toques yucatecos únicos. Nuestras pizzas son
                auténticas obras maestras, preparadas con ingredientes frescos
                locales y una pasión por la excelencia culinaria. Te invitamos a
                explorar un universo de sabores en cada bocado. En "Pizza
                Planeta," la calidad y la comunidad se unen para ofrecerte una
                experiencia gastronómica inolvidable.
              </h4>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
