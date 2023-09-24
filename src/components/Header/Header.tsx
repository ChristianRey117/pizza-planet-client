import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBeer } from "react-icons/fa";

const Header = () => {
  return (
    <div className="row">
      <div className="col-12">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto"></Nav>

            <Nav>
              <Nav.Link href="#deets" style={{ color: "yellow" }}>
                Menú
              </Nav.Link>
              <Nav.Link href="#memes">Sucursales</Nav.Link>
              <Nav.Link href="#memes">Sobre nosotros</Nav.Link>
              <Nav.Link href="#memes">Tienda</Nav.Link>
              <Nav.Link href="#memes">Cuenta</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
