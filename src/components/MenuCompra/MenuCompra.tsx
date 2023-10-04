import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import "./MenuCompra.css";

const MenuCompra = () => {
  return (
    <Container>
      <Row>
        <h1>Menú</h1>
      </Row>
      <Row>
        <Col>
          <p>Nuestro servicio a domicilio es de 13:00 a 23:00</p>
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Col>
            <h2>Entradas</h2>
          </Col>

          <Col>
            <Card style={{ width: "32rem" }}>
              <Card.Body>
                <Row>
                  <Col xs={3}>
                    <img
                      src="https://rockyspizzeria.mx/wp-content/uploads/2021/02/dedos.jpg"
                      style={{ height: "140px", width: "110px" }}
                    />
                  </Col>

                  <Col xs={9}>
                    <Row>
                      <Col xs={9}>
                        <Card.Title>Dedos de Queso</Card.Title>
                      </Col>
                      <Col xs={3}>
                        <p>$145.00</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <div style={{ width: "60px" }}>
                          <Form.Select aria-label="Floating label select example">
                            <option>1</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select>
                        </div>
                      </Col>

                      <Col>
                        <Button variant="warning">Añadir al carrito</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "32rem" }}>
              <Card.Body>
                <Row>
                  <Col xs={3}>
                    <img
                      src="https://rockyspizzeria.mx/wp-content/uploads/2021/02/dedos.jpg"
                      style={{ height: "140px", width: "110px" }}
                    />
                  </Col>

                  <Col xs={9}>
                    <Row>
                      <Col xs={9}>
                        <Card.Title>Dedos de Queso</Card.Title>
                      </Col>
                      <Col xs={3}>
                        <p>$145.00</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <div style={{ width: "60px" }}>
                          <Form.Select aria-label="Floating label select example">
                            <option>1</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select>
                        </div>
                      </Col>

                      <Col>
                        <Button variant="warning">Añadir al carrito</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "32rem" }}>
              <Card.Body>
                <Row>
                  <Col xs={3}>
                    <img
                      src="https://rockyspizzeria.mx/wp-content/uploads/2021/02/dedos.jpg"
                      style={{ height: "140px", width: "110px" }}
                    />
                  </Col>

                  <Col xs={9}>
                    <Row>
                      <Col xs={9}>
                        <Card.Title>Dedos de Queso</Card.Title>
                      </Col>
                      <Col xs={3}>
                        <p>$145.00</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <div style={{ width: "60px" }}>
                          <Form.Select aria-label="Floating label select example">
                            <option>1</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select>
                        </div>
                      </Col>

                      <Col>
                        <Button variant="warning">Añadir al carrito</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Col>

        <Col xs={3}>
          <Row>
            <Col xs={12}>
              <p>ORDER</p>
            </Col>

            <Col xs={12}>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col xs={12}>
                    <Nav variant="pills" className="flex-column side-nav">
                      <Nav.Item>
                        <Nav.Link eventKey="entradas">Entradas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="bebidas">Bebidas</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="pastas">Pastas</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="pizzas-clasicas">
                          Pizzas Clasicas
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="pizzas-especiales">
                          Pizzas Espaciales
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="pizzas-gourmet">
                          Pizzas Gourmet
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="calzones">Calzones</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="ensaladas">Ensaladas</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="postres">Postres</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuCompra;
