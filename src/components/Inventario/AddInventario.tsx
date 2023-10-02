import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddInventario = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1> Agregar/Editar Inventario</h1>
        </Col>
      </Row>

      <Row>
        <Form>
          <Form.Group className="mb-3" controlId="AddInventario.ControlProduct">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control type="text" placeholder="Nombre del producto" />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="AddInventario.ControlDescryption"
          >
            <Form.Label>Descripcion del producto</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Imagen del producto</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form>
      </Row>

      <Row>
        <Col>
          <Button variant="success">Agregar</Button>
          <Button variant="warning">Editar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddInventario;
