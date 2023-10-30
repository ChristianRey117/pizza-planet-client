import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../../../assets/images/promo1.1.png";
import categoryImg02 from "../../../assets/images/promo2.1.png";
import categoryImg03 from "../../../assets/images/promo3.2.png";
import "../../../styles/category.css";

const categoryData = [
  {
    display: "Combo Alienígena",
    imgUrl: categoryImg01,
    describe: "Pizza Mediana + Papas Fritas",
  },
  {
    display: "Combo Astronauta",
    imgUrl: categoryImg02,
    describe: "Pizza Individual + Refresco de 1.25L",
  },
  {
    display: "Combo Galáctico",
    imgUrl: categoryImg03,
    describe: "2 Pizzas grandes",
  },
];

const Category = () => {
  return (
    // <Container>
    //   <Row>
    //     {categoryData.map((item) => {
    //       return (
    //         <Col lg="4" md="4" sm="6" xs="6" className="mb-4">
    //           <div className="category__item d-flex align-items-center gap-3">
    //             <Row>
    //               <Col lg="12">
    //                 <div
    //                   className="category__img"
    //                   style={{ textAlign: "center" }}
    //                 >
    //                   <img src={item.imgUrl} alt="category__item" />
    //                 </div>
    //               </Col>
    //               <Col lg="12" style={{ marginTop: "10px" }}>
    //                 <div
    //                   className="align-items-center"
    //                   style={{ textAlign: "center" }}
    //                 >
    //                   <h4>{item.display}</h4>
    //                   <h5>{item.describe}</h5>
    //                 </div>
    //               </Col>
    //             </Row>
    //           </div>
    //         </Col>
    //       );
    //     })}
    //   </Row>
    // </Container>
    <Container>
      <Row>
        {categoryData.map((item) => {
          return (
            <Col lg="4" md="4" sm="6" xs="6" className="mb-4">
              <div className="category__item">
                <div className="category__img text-center">
                  <img src={item.imgUrl} alt="category__item" />
                </div>
                <div className="text-center">
                  <h4>{item.display}</h4>
                  <h5>{item.describe}</h5>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Category;
