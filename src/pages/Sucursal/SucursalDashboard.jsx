import React, { useEffect, useState } from "react";
import axios from "axios";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
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
import imageSuc1 from "../../assets/images/PizzaPlaneta1.jpg";
import imageSuc2 from "../../assets/images/PizzaPlaneta2.jpg";
import imageSuc3 from "../../assets/images/PizzaPlaneta3.jpg";
import CardComponent from "../../components/Card/Card";

const baseURL = "http://localhost:5000/sucursales";
const baseUrlImage = "http://localhost:5000/images";

const cardPaneles = [
  {
    name: "Luna",
    describe: "Con 20 empleados de turno matutino y despertino",
    image: imageSuc1,
    path: "/sucursales-dashboard",
    buttonText: "Ir a Sucursal",
  },
  {
    name: "Jupiter",
    describe: "En este panel usted puede agregar, editar y eliminar sucursales",
    image: imageSuc2,
    path: "/sucursales-dashboard",
    buttonText: "Ir a Sucursal",
  },

  {
    name: "Marte",
    describe: "En este panel usted puede agregar, editar y eliminar sucursales",
    image: imageSuc3,
    path: "/sucursales-dashboard",
    buttonText: "Ir a Sucursal",
  },
];

const SucursalDashboard = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/sucursal-form", { replace: true });
  };

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  const [post, setPost] = React.useState([{}]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <Helmet title="Sucursal">
      <CommonSection title="Sucursal Adimistrador" />

      <section>
        <Row>
          <Col lg="12" style={{ textAlign: "center" }}>
            <h1>Sucursal Dashboard</h1>
          </Col>
        </Row>
      </section>

      <section
        style={{ paddingTop: "0px", paddingBottom: "0px", marginLeft: "50px" }}
      >
        <Container>
          <Row>
            <Col lg="1">
              <Button size="lg" color="secondary" onClick={goToAdminDashboard}>
                Regresar
              </Button>
            </Col>
            <Col lg="1">
              <Button size="lg" color="success" onClick={goTo}>
                Agregar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {post.map((item, index) => {
              // return (
              //   <Col
              //     lg="4"
              //     md="6"
              //     sm="6"
              //     key={index}
              //     className="mt-2 mb-5"
              //     style={{ width: "36rem", marginLeft: "35px" }}
              //   >
              //     <Card
              //       style={{
              //         width: "34rem",
              //       }}
              //     >
              //       <CardBody>
              //         <Row>
              //           <Col lg="6">
              //             <img
              //               alt="Sample"
              //               src={baseUrlImage + "/" + item.image}
              //               // src="https://picsum.photos/300/200"
              //               style={{ width: "180px" }}
              //             />
              //           </Col>

              //           <Col lg="6">
              //             <CardTitle tag="h5">{item.branch_name}</CardTitle>

              //             <CardText>{item.branch_direction}</CardText>
              //             <div style={{ position: "absolute", bottom: "15px" }}>
              //               <Row>
              //                 <Col lg="6">
              //                   <Button color="warning">
              //                     <Link
              //                       to={item.path}
              //                       style={{ color: "white" }}
              //                     >
              //                       Editar
              //                     </Link>
              //                   </Button>
              //                 </Col>
              //                 <Col lg="6">
              //                   <Button
              //                     color="danger"
              //                     onClick={deleteSucursal(item)}
              //                   >
              //                     Eliminar
              //                   </Button>
              //                 </Col>
              //               </Row>
              //             </div>
              //           </Col>
              //         </Row>
              //       </CardBody>
              //     </Card>
              //   </Col>
              // );

              <CardComponent
                branch_name={item.branch_name}
                branch_direction={item.branch_direction}
                id_branch={item.id_branch}
                image={item.image}
              ></CardComponent>;
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SucursalDashboard;
