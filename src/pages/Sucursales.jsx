import React from "react";
import { Container, Row, Col } from "reactstrap";
import imageSuc1 from "../assets/images/PizzaPlaneta1.jpg";
import imageSuc2 from "../assets/images/PizzaPlaneta2.jpg";
import imageSuc3 from "../assets/images/PizzaPlaneta3.jpg";
import "../styles/category.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const sucursalesData =[{
    nameSuc: "Jupiter",
    imgUrl: imageSuc1,
    address:'Francisco Montejo 190'
},
{
    nameSuc: "Luna",
    imgUrl: imageSuc2,
    address:'City Center 100'
},
{
    nameSuc: "Marte",
    imgUrl: imageSuc3,
    address:'Chuburna Norte 902'
}]

const Sucursales = () => {
    return (
      <Helmet title='Sucursales'>
        <CommonSection title='Sucursales'/>
        <Container>

        <section>
            <Row>
                <Col lg='12'>
                    <h1>Nuestras Sucursales</h1>
                </Col>
            </Row>
        </section>
        
        <section>
        <Row>
          {sucursalesData.map((item) => {
            return (
              <Col lg="4" md="4" sm="6" xs="6" className="mb-4">
                <div className="category__item d-flex align-items-center gap-3">
                 
                  <Row>
                    <Col lg="12">
                      <div className="category__img" style={{textAlign:'center'}}>
                        <img
                          src={item.imgUrl}
                          alt="category__item"
                          
                        />
                      </div>
                    </Col>
                    <Col lg="12" style={{marginTop:'10px'}}>
                      <div className="align-items-center" style={{textAlign:'center'}}>
                        <h3>{item.nameSuc}</h3>
                        <h5>{item.address}</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            );
          })}
        </Row>
        </section>
      </Container>
      </Helmet>
    );
  };
  
  export default Sucursales;