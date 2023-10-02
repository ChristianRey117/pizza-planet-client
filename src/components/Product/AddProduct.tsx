import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const AddProduct = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Agregar/Editar Productos</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pizza grande champiñones"
              />
            </Form.Group>

            <Row>
              <Col xs={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Precio</Form.Label>
                  <Form.Control type="tel" placeholder="290" />
                </Form.Group>
              </Col>

              <Col xs={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Tipo de oferta</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Ninguna</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Imagen del producto</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="outline-success">Agregar</Button>
          <Button variant="outline-warning">Editar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
