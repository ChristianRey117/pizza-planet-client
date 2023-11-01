import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  CardText,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import ModalComponent from "../../Modal/modal";

const CardComprasUsuario = ({ compras }) => {
  React.useEffect(() => {
    totalCompra();
  }, []);

  const totalCompra = () => {
    let Total = 0;
    compras.map((compra) => {
      let subTotal;

      subTotal = compra.price * compra.ammount;
      Total += subTotal;
    });

    Total += 10;
    setTotal(Total);
  };

  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const baseUrlImage = "http://localhost:5000/images";

  const dispatch = useDispatch();

  return (
    <Col
      lg="4"
      md="6"
      sm="8"
      xs="8"
      className="mt-2 mb-5"
      style={{ width: "auto", height: "auto" }}
    >
      <Card
        style={{
          width: "auto",
        }}
      >
        <CardBody>
          <CardTitle tag="h4" style={{ textAlign: "center" }}>
            Ticket de Compra
            {compras.length > 0 && (
              <h6 tag="h5" style={{ textAlign: "center" }}>
                {"Fecha y Hora: " + compras[0].date}
              </h6>
            )}
          </CardTitle>

          {compras.map((compra, index) => {
            return (
              <Row style={{ paddingTop: "2%" }} key={index}>
                <Col
                  lg="2"
                  md="2"
                  sm="2"
                  xs="2"
                  className="d-flex align-items-center justify-content-center"
                >
                  <img
                    alt="Sample"
                    src={baseUrlImage + "/" + compra.image}
                    style={{ width: "35%" }}
                  />
                </Col>

                <Col
                  lg="4"
                  md="4"
                  sm="12"
                  xs="12"
                  className="d-flex align-items-center justify-content-center"
                >
                  <h6>{compra.product}</h6>
                </Col>

                <Col
                  lg="2"
                  md="2"
                  sm="12"
                  xs="12"
                  className="d-flex align-items-center justify-content-center"
                >
                  <h6 tag="h5">{compra.ammount}</h6>
                </Col>

                <Col
                  lg="2"
                  md="2"
                  sm="12"
                  xs="12"
                  className="d-flex align-items-center justify-content-center"
                >
                  <h6 tag="h5">{"$" + compra.price * compra.ammount}</h6>
                </Col>
              </Row>
            );
          })}

          <Row style={{ paddingTop: "3%" }}>
            <Col xs={12}>
              <h6>Envío: $10</h6>
            </Col>

            <Col xs={12}>
              <h6>{"Total: $ " + total}</h6>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardComprasUsuario;
