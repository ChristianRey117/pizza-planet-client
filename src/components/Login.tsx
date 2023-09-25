import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "../components/Login.css";

const Login = () => {
  return (
    <div className="row ">
      <div className="col-sm-5 col-md-4 FondoIzquierda">
        <Form className="FormCenter">
          <Form.Group className="mb-6" controlId="formGroupEmail">
            <center>
              <h3>Iniciar Sesión</h3>
            </center>
            <br></br>
            <Form.Label className="text-start">Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Correo" />
          </Form.Group>
          <Form.Group className="mb-6" controlId="formGroupPassword">
            <Form.Label className="text-start">Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
            <br></br>
            <center>
              <button type="button" className="btn button-session">
                Iniciar Sesión
              </button>
            </center>
          </Form.Group>
          <br></br>
          <center>
            <h5>¿Aún no estás registrado?</h5>
            <button type="button" className="btn button-session">
              CLICK AQUI
            </button>
          </center>
        </Form>
      </div>
      <div className="col-sm-5 offset-sm-2 col-md-8 offset-md-0 FondoDerecha"></div>
    </div>
  );
};

export default Login;
