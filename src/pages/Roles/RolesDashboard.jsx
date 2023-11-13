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
import CardRoles from "../../components/Card/CardRoles/CardRoles";
import ENDPOINTS from "../../utils/constants";

const baseURL = ENDPOINTS.USUARIOS;
const baseTypeUsers = ENDPOINTS.TIPOSUSARIOS;

const RolesDashboard = () => {
  const navigate = useNavigate();

  const goToAdminDashboard = () => {
    navigate("/admin-menu", { replace: true });
  };

  const [usuarios, setUsuarios] = useState([]); // Usar un array vacío en lugar de [{}]

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsuarios(response.data);
    });

    axios.get(baseTypeUsers).then((response) => {
      setTypeUsers(response.data);
    });
  }, []);

  const [typeUsers, setTypeUsers] = useState([{}]); // Usar un array vacío en lugar de [{}]

  return (
    <div>
      <Helmet title="Roles">
        <CommonSection title="Roles Admistrador" />

        <section>
          <Row>
            <Col lg="12" style={{ textAlign: "center" }}>
              <h1>Roles Dashboard</h1>
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
                  color="secondary"
                  onClick={goToAdminDashboard}
                >
                  Regresar
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              {usuarios.map((item, index) => (
                <CardRoles
                  id_users={item.id_users}
                  user_name={item.user_name}
                  user_email={item.user_email}
                  typeU={item.typeU}
                  typeUsers={typeUsers}
                ></CardRoles>
              ))}
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default RolesDashboard;
