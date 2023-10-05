import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../assets/images/promo1.1.png";
import categoryImg02 from "../assets/images/promo2.1.png";
import categoryImg03 from "../assets/images/promo3.1.png";
import "../styles/category.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const sucursalesData =[{
    nameSuc: "Luna",
    imgUrl: categoryImg01,
    address:'Francisco Montejo 190'
},
{
    nameSuc: "Jupiter",
    imgUrl: categoryImg01,
    address:'City Center 100'
},
{
    nameSuc: "Marte",
    imgUrl: categoryImg01,
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
                      <div className="category__img">
                        <img
                          src={item.imgUrl}
                          alt="category__item"
                          
                        />
                      </div>
                    </Col>
                    <Col lg="12" style={{marginTop:'10px'}}>
                      <div className="align-items-center" style={{textAlign:'center'}}>
                        <h4>{item.display}</h4>
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