import React, { useEffect, useState } from "react";
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
} from "reactstrap";

const CardComponent = ({ branch_name, branch_direction, id_branch, image }) => {
  const baseURL = "http://localhost:5000";
  const baseUrlImage = "http://localhost:5000/images";

  const deleteSucursal = (id) => {
    console.log(id);
  };

  return (
    <Col
      lg="4"
      md="6"
      sm="6"
      className="mt-2 mb-5"
      style={{ width: "36rem", marginLeft: "35px" }}
    >
      <Card
        style={{
          width: "34rem",
        }}
      >
        <CardBody>
          <Row>
            <Col lg="6">
              <img
                alt="Sample"
                src={baseUrlImage + "/" + image}
                // src="https://picsum.photos/300/200"
                style={{ width: "180px" }}
              />
            </Col>

            <Col lg="6">
              <CardTitle tag="h5">{branch_name}</CardTitle>

              <CardText>{branch_direction}</CardText>
              <div style={{ position: "absolute", bottom: "15px" }}>
                <Row>
                  <Col lg="6">
                    <Button color="warning">
                      <Link style={{ color: "white" }}>Editar</Link>
                    </Button>
                  </Col>
                  <Col lg="6">
                    <Button color="danger" onClick={deleteSucursal(id_branch)}>
                      Eliminar
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardComponent;
