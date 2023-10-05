import "../styles/sucursales.css";
import "../styles/home.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import sucursal1 from "../assets/images/Sucursal1.jpeg";
import sucursal2 from "../assets/images/Sucursal2.jpeg";
import sucursal3 from "../assets/images/Sucursal3.jpeg";

const sucursalesData = [
  {
    title: "Luna",
    imgUrl: sucursal1,
    address: "Calle 50 centro",
  },
  {
    title: "Jupiter",
    imgUrl: sucursal2,
    address: "Calle 60 centro",
  },
  {
    title: "Marte",
    imgUrl: sucursal3,
    address: "Poligo 120",
  },
];

const Sucursales = () => {
  return (
    <Helmet title="Sucursales">
      <CommonSection title="Sucursales" />

      <Container>
        <Row>
          {sucursalesData.map((item, index) => {
            return (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    className="w-100 mb-3"
                    src={item.imgUrl}
                    alt="feature-img"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.address}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Helmet>
  );
};

export default Sucursales;
