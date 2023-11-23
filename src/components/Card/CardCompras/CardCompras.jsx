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
  FormGroup,
  Label,
  Input,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import ModalComponent from "../../Modal/modal";
import ENDPOINTS from "../../../utils/constants";

const CardCompras = ({ compras, estatus }) => {
  const navigate = useNavigate();

  const baseURL = "http://localhost:5000/compras";
  const baseAddStatus = "http://localhost:5000/compras/update/";
  const baseUrlImage = "http://localhost:5000/images";

  const dispatch = useDispatch();

  const deleteCompras = () => askDelete();

  const _delete = (id) => {
    axios.delete(baseURL + "/delete/" + id).then((response) => {
      console.log(response);
    });
  };

  const askDelete = () => {
    setShow(true);
  };
  const [show, setShow] = useState(false);
  const [totalBuy, setTotalBuy] = useState(0);
  const handleClose = () => setShow(false);

  const optionsModal = {
    title: "¿Esta seguro de eliminar esta Venta?",
    message: "No se podrá recuperar la informacion",
    redirectTo: () => {
      //_delete(id_buy);
      setShow(false);
      window.location.reload(false);
    },
  };

  useEffect(() => {
    let total = 0;
    compras.map((item) => {
      total += item.total_buy;
    });
    setTotalBuy(total);
  });

  return (
    <Col
      lg="4"
      md="6"
      sm="8"
      xs="8"
      className="mt-2 mb-5"
      style={{ width: "65rem", height: "auto" }}
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
              <>
                <h6 tag="h5" style={{ textAlign: "center" }}>
                  {"Fecha y Hora: " + compras[0].date}
                </h6>

                <h6 tag="h5" style={{ textAlign: "center" }}>
                  {"Cliente: " + compras[0].user}
                </h6>
              </>
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
                  <h6 tag="h5">{"Cantidad: " + compra.ammount}</h6>
                </Col>

                <Col
                  lg="2"
                  md="2"
                  sm="12"
                  xs="12"
                  className="d-flex align-items-center justify-content-center"
                >
                  <h6 tag="h5">{"$" + compra.total_buy}</h6>
                </Col>
              </Row>
            );
          })}

          <Row style={{ paddingTop: "3%" }}>
            <Col xs={9}>
              <h6>{"Total: $ " + totalBuy}</h6>
            </Col>
            <Col xs={3}>
              <FormGroup>
                <Label for="ofert">Estado de compra</Label>
                <Input
                  id="id_ofert"
                  name="id_ofert"
                  type="select"
                  onChange={(e) => {
                    console.log(e.target.value);
                    let compras_ids = [];
                    compras.map((compra) => {
                      compras_ids.push(compra.id_buy);
                    });
                    var request = {
                      ids_compras: JSON.stringify(compras_ids),
                      status_compra: e.target.value,
                    };
                    axios
                      .put(baseAddStatus + compras[0].id_user, request)
                      .then((response) => {
                        console.log(response.data);
                      });
                  }}
                  disabled={
                    compras[0].status ===
                    estatus[estatus.length - 1].status_name
                  }
                >
                  {estatus?.map((status) => {
                    return (
                      <option
                        value={status.id_status}
                        label={status.status_name}
                        selected={compras[0].status === status.status_name}
                      ></option>
                    );
                  })}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardCompras;
