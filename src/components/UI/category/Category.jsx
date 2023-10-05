import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../../../assets/images/promo1.1.png";
import categoryImg02 from "../../../assets/images/promo2.1.png";
import categoryImg03 from "../../../assets/images/promo3.1.png";
import "../../../styles/category.css";

const categoryData = [
  {
    display: "Fastfood",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },
  {
    display: "Asian food",
    imgUrl: categoryImg03,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item) => {
          return (
            <Col lg="4" md="4" sm="6" xs="6" className="mb-4">
              <div className="category__item d-flex align-items-center gap-3">
                <Row>
                  <Col lg="12">
                    <div className="category__img">
                      <img
                        src={item.imgUrl}
                        alt="category__item"
                        style={{ width: "200px" }}
                      />
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className="align-items-center">
                      <h6>{item.display}</h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Category;
