import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Product = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Productos</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="success">Agregar</Button>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Row>
                <Col xs={5}>
                  <img
                    src="https://media.gq.com.mx/photos/618eabeca387b93e5873a63a/4:3/w_2628,h_1971,c_limit/GettyImages-1209615781.jpg"
                    alt=""
                    style={{ height: "200px", width: "130px" }}
                  />
                </Col>
                <Col xs={7}>
                  <Card.Title>Titulo producto</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Row>
                    <Col>
                      <Button variant="warning">Editar</Button>{" "}
                      <Button variant="outline-danger">Eliminar</Button>{" "}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Row>
                <Col xs={5}>
                  <img
                    src="https://media.gq.com.mx/photos/618eabeca387b93e5873a63a/4:3/w_2628,h_1971,c_limit/GettyImages-1209615781.jpg"
                    alt=""
                    style={{ height: "200px", width: "130px" }}
                  />
                </Col>
                <Col xs={7}>
                  <Card.Title>Titulo producto</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Row>
                    <Col>
                      <Button variant="warning">Editar</Button>{" "}
                      <Button variant="outline-danger">Eliminar</Button>{" "}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Row>
                <Col xs={5}>
                  <img
                    src="https://media.gq.com.mx/photos/618eabeca387b93e5873a63a/4:3/w_2628,h_1971,c_limit/GettyImages-1209615781.jpg"
                    alt=""
                    style={{ height: "200px", width: "130px" }}
                  />
                </Col>
                <Col xs={7}>
                  <Card.Title>Titulo producto</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Row>
                    <Col>
                      <Button variant="warning">Editar</Button>{" "}
                      <Button variant="outline-danger">Eliminar</Button>{" "}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Row>
                <Col xs={5}>
                  <img
                    src="https://media.gq.com.mx/photos/618eabeca387b93e5873a63a/4:3/w_2628,h_1971,c_limit/GettyImages-1209615781.jpg"
                    alt=""
                    style={{ height: "200px", width: "130px" }}
                  />
                </Col>
                <Col xs={7}>
                  <Card.Title>Titulo producto</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Row>
                    <Col>
                      <Button variant="warning">Editar</Button>{" "}
                      <Button variant="outline-danger">Eliminar</Button>{" "}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Row>
                <Col xs={5}>
                  <img
                    src="https://media.gq.com.mx/photos/618eabeca387b93e5873a63a/4:3/w_2628,h_1971,c_limit/GettyImages-1209615781.jpg"
                    alt=""
                    style={{ height: "200px", width: "130px" }}
                  />
                </Col>
                <Col xs={7}>
                  <Card.Title>Titulo producto</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Row>
                    <Col>
                      <Button variant="warning">Editar</Button>{" "}
                      <Button variant="outline-danger">Eliminar</Button>{" "}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Row>
                <Col xs={5}>
                  <img
                    src="https://media.gq.com.mx/photos/618eabeca387b93e5873a63a/4:3/w_2628,h_1971,c_limit/GettyImages-1209615781.jpg"
                    alt=""
                    style={{ height: "200px", width: "130px" }}
                  />
                </Col>
                <Col xs={7}>
                  <Card.Title>Titulo producto</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Row>
                    <Col>
                      <Button variant="warning">Editar</Button>{" "}
                      <Button variant="outline-danger">Eliminar</Button>{" "}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
