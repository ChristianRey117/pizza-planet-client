import React, { useState } from "react";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
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
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import imageSuc1 from "../assets/images/sucursales.jpg";
import imageSuc2 from "../assets/images/ofertas.jpg";
import imageSuc3 from "../assets/images/provedores.jpg";
import imageSuc4 from "../assets/images/productos.jpg";
import imageSuc5 from "../assets/images/inventario.jpg";
import imageSuc6 from "../assets/images/compras.jpg";
import imageSuc7 from "../assets/images/categorias.jpg";
import imageSuc8 from "../assets/images/vecindario.jpg";
import imageSuc9 from "../assets/images/roles.jpg";
import imageSuc10 from "../assets/images/estadisticas.jpg";

const AdminMenu = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("datosUser");
    window.location.reload(false);
  };

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("datosUser"));
    let cards = [
      {
        title: "Sucursales",
        describe:
          "En este panel usted puede agregar, editar y eliminar sucursales",
        image: imageSuc1,
        path: "/sucursales-dashboard",
        buttonText: "Ir a Sucursal",
      },
      {
        title: "Ofertas",
        describe:
          "En este panel usted puede agregar, editar y eliminar ofertas",
        image: imageSuc2,
        path: "/ofertas-dashboard",
        buttonText: "Ir a Ofertas",
      },

      {
        title: "Proveedores",
        describe:
          "En este panel usted puede agregar, editar y eliminar proveedores",
        image: imageSuc3,
        path: "/proveedores-dashboard",
        buttonText: "Ir a Proveedores",
      },

      {
        title: "Productos",
        describe:
          "En este panel usted puede agregar, editar y eliminar productos",
        image: imageSuc4,
        path: "/product-dashboard",
        buttonText: "Ir a Productos",
      },

      {
        title: "Inventario",
        describe:
          "En este panel usted puede ver los productos de su inventario",
        image: imageSuc5,
        path: "/inventario-dashboard",
        buttonText: "Ir a Inventario",
      },
      {
        title: "Compras",
        describe: "En este panel usted puede ver las compras de los usuarios",
        image: imageSuc6,
        path: "/compras-dashboard",
        buttonText: "Ir a Compras",
      },

      {
        title: "Categorias",
        describe:
          "En este panel usted puede ver las categorias de los productos",
        image: imageSuc7,
        path: "/categorias-dashboard",
        buttonText: "Ir a Categorias",
      },
      {
        title: "Vecindarios",
        describe: "En este panel usted puede ver los vecindarios",
        image: imageSuc8,
        path: "/vecindarios-dashboard",
        buttonText: "Ir a Vecindarios",
      },
      {
        title: "Estadisticas",
        describe: "En este panel usted puede ver las estadisticas",
        image: imageSuc10,
        path: "/estadisticas-dashboard",
        buttonText: "Ir a Estadisticas",
      },
    ];

    if (user.tipo_usuario === 3) {
      cards.push({
        title: "Roles",
        describe: "En este panel usted puede asignar roles a los usuarios",
        image: imageSuc9,
        path: "/roles-dashboard",
        buttonText: "Ir a Roles",
      });
    }

    setCardPaneles(cards);
  }, []);

  const [typeUser, setTypeUser] = useState(1);
  const [cardPaneles, setCardPaneles] = useState([{}]);

  return (
    <Helmet title="Menu del Administrador">
      <CommonSection title="Menu del Administrador" />

      <section style={{ padding: "25px" }}>
        <Row>
          <Col lg="12" style={{ textAlign: "center" }}>
            <h1>Dashboard</h1>
          </Col>
          <Col>
            <Button
              color="danger"
              style={{ position: "absolute", right: "10%" }}
              onClick={logOut}
            >
              Salir
            </Button>
          </Col>
        </Row>
      </section>

      <section>
        <Row>
          {cardPaneles.map((item, index) => {
            return (
              <Col
                lg="4"
                md="6"
                sm="6"
                key={index}
                className="mt-2 mb-5"
                style={{ width: "19rem", marginLeft: "45px" }}
              >
                <Card
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src={item.image} />
                  <CardBody>
                    <CardTitle tag="h5">{item.title}</CardTitle>

                    <CardText>{item.describe}</CardText>
                    <Button className="Warning">
                      <Link to={item.path} style={{ color: "white" }}>
                        {item.buttonText}
                      </Link>
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </section>
    </Helmet>
  );
};

export default AdminMenu;
