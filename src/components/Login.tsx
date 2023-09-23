import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5 col-md-6">
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </div>
        <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
          .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
        </div>
      </div>
    </div>
  );
};

export default Login;
