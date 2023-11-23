import React, { useState, useEffect } from "react";

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
  Input,
} from "reactstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import imageSuc1 from "../../assets/images/product_01.1.jpg";
// import imageSuc2 from "../../assets/images/product_01.3.jpg";
// import imageSuc3 from "../../assets/images/product_04.jpg";
// import imageSuc4 from "../../assets/images/product_08.jpg";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import axios from "axios";
import CardCompras from "../../components/Card/CardCompras/CardCompras";

const baseURL = "http://localhost:5000/compras/usuarios";
const baseUrlImage = "http://localhost:5000/images";
const baseStatus = "http://localhost:5000/compras/estatus";

const ComprasDashboard = () => {
  const [startDate, setStartDate] = useState(""); // Estado para almacenar la fecha seleccionada
  const navigate = useNavigate();

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  const [ventas, setVentas] = useState([]); // Usar un array vacío en lugar de [{}]
  const [estatus, setEstatus] = useState([{}]); // Usar un array vacío en lugar de [{}]

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setVentas(response.data);
    });

    axios.get(baseStatus).then((response) => {
      setEstatus(response.data);
    });
  }, []);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value; // Formato de fecha: "YYYY-MM-DD"
    const [year, month, day] = selectedDate.split("-");
    const formattedDate = `${day}-${month}-${year.slice(2)}`; // Convertir a "DD-MM-YY"
    console.log("Fecha seleccionada", selectedDate);
    setStartDate(formattedDate);
  };

  return (
    <div>
      <Helmet title="Compras">
        <CommonSection title="Compras Admistrador" />

        <section>
          <Row>
            <Col lg="12" style={{ textAlign: "center" }}>
              <h1>Compras Dashboard</h1>
            </Col>
          </Row>
        </section>

        <section
          style={{
            paddingTop: "0px",
            paddingBottom: "0px",
            marginLeft: "50px",
          }}
        >
          <Container>
            <Row>
              <Col className="col-2 col-md-2 col-sm-2 mb-2">
                <Button
                  size="lg"
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={goToAdminDashboard}
                >
                  Regresar
                </Button>
              </Col>
              <Col className="col-2 col-md-2 col-sm-2 mb-2">
                <Input
                  size="lg"
                  type="date"
                  placeholder={startDate}
                  onChange={handleDateChange}
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              {ventas
                .filter((item) => {
                  if (!startDate) {
                    return true;
                  } else {
                    let dateItem = item[0].date.split(" ")[0];
                    dateItem = dateItem.split("/");
                    dateItem =
                      dateItem[0] +
                      "-" +
                      dateItem[1] +
                      "-" +
                      dateItem[2][2] +
                      dateItem[2][3];
                    console.log("fecha con input--->", dateItem);
                    return dateItem === startDate;
                  }
                })
                .map((item, index) => (
                  <CardCompras compras={item} estatus={estatus}></CardCompras>
                ))}
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default ComprasDashboard;
