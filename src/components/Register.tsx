import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "../components/Login.css";

const Register = () => {
  return (
    <div className="row ">
      <div className="col-sm-5 col-md-4 FondoIzquierdaR">
        <Form className="FormCenterR">
          <Form.Group className="mb-6" controlId="formGroupEmail">
            <center>
              <h3>Registrarse</h3>
            </center>
            <br></br>
            <Form.Group className="mb-6" controlId="formGroupName">
              <Form.Label className="text-start">Nombre:</Form.Label>
              <Form.Control type="name" placeholder="Nombre" />
            </Form.Group>
            <br></br>
            <Form.Group className="mb-6" controlId="formGroupName">
              <Form.Label className="text-start">Apellido:</Form.Label>
              <Form.Control type="name" placeholder="Apellido" />
            </Form.Group>
            <br></br>
            <Form.Label className="text-start">Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Correo" />
            <br></br>
            <Form.Label className="text-start">
              Confirmar Correo Electrónico
            </Form.Label>
            <Form.Control type="email" placeholder="Correo" />
            <br></br>
            <Form.Group className="mb-6" controlId="formGroupPassword">
              <Form.Label className="text-start">Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
              <br></br>
              <Form.Group className="mb-6" controlId="formGroupPassword">
                <Form.Label className="text-start">Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <br></br>

              <Form.Group className="mb-6" controlId="formGroupNumber">
                <Form.Label className="text-start">
                  Número de teléfono:
                </Form.Label>
                <Form.Control type="number" placeholder="Número" />
              </Form.Group>
            </Form.Group>
          </Form.Group>
          <br></br>
          <center>
            <button
              type="button"
              className="btn btn-outline-warning rounded-pill"
            >
              REGISTRARSE
            </button>
          </center>
        </Form>
      </div>
      <div className="col-sm-5 offset-sm-2 col-md-8 offset-md-0 FondoDerechaR"></div>
    </div>
  );
};

export default Register;
