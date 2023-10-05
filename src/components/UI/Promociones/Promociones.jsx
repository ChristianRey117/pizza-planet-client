import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/promociones.css";
import promo2 from "../../../assets/images/promo2.1.png";
import promo1 from "../../../assets/images/promo1.1.png";
import promo3 from "../../../assets/images/promo3.1.png";

const promoData = [
  {
    display: "Combo Alienigena",
    imgUrl: promo1,
    text: "Pizza Mediana + Papas Fritas",
  },
  {
    display: "Pizza Astronauta",
    imgUrl: promo2,
    text: "Pizza Individual + Refresco de 1.25L",
  },
  {
    display: "Promo Galactica",
    imgUrl: promo3,
    text: "2 Pizzas Grandes",
  },
];

const Promociones = () => {
  return (
    <div className="oferts-home">
      <h1 style={{ color: "yellow", textAlign: "center" }}>PROMOCIONES</h1>

      <div className="text-offets-home">
        <h2>Lorem rapleas reasfaop reaopsdjasd raposdjad reaposda s</h2>
      </div>

      <div className="list-offets-home">
        <div className="container text-center">
          <div className="row align-items-center">
            {promoData.map((item) => {
              return (
                <Col
                  lg="4"
                  md="4"
                  sm="6"
                  xs="6"
                  className="mb-4"
                  style={{ paddingTop: "50px" }}
                >
                  <div className="category__item d-flex align-items-center gap-3">
                    <Row>
                      <Col lg="12">
                        <div className="category__img">
                          <img src={item.imgUrl} alt="category__item" />
                        </div>
                      </Col>

                      <Col className="category__item">
                        <h4>{item.display}</h4>
                        <h6>{item.text}</h6>
                      </Col>
                    </Row>
                  </div>
                </Col>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promociones;
