import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Sucursal.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const Sucursal = () => {
  return (
    <>
      <div className="Fondo"></div>
      <br></br>
      <Form.Label>Nombre Sucursal:</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Nombre Sucursal"
          aria-label="Sucursalname"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Label>Dirección:</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Dirección Sucursal"
          aria-label="Sucursaldireccion"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Label htmlFor="basic-url">Descripción:</Form.Label>
      <InputGroup>
        <InputGroup.Text>Sucursal</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      <button
        type="submit"
        id="kt_login_signin_form_submit_button"
        className="btn btn-outline-warning fs-6 px-8 py-4 my-3 me-3"
      >
        <span className="indicator-label">Registrar</span>
      </button>
      <button
        type="submit"
        id="kt_login_signin_form_submit_button"
        className="btn btn-outline-warning fs-6 px-8 py-4 my-3 me-3"
      >
        <span className="indicator-label">Editar</span>
      </button>
    </>
  );
};

export default Sucursal;
