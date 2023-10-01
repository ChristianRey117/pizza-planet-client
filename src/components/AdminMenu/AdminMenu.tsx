import Header from "../Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AdminMenu = () => {
  return (
    <div>
      <Header></Header>
      <h1 style={{ color: "yellow" }}>Menú del administrador</h1>

      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://http2.mlstatic.com/storage/sc-seller-journey-backoffice/images-assets/234940675890-Sucursales--una-herramienta-para-mejorar-la-gesti-n-de-tus-puntos-de-venta.png"
              />
              <Card.Body>
                <Card.Title>Sucursales</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Ir a sucursales</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://http2.mlstatic.com/storage/sc-seller-journey-backoffice/images-assets/234940675890-Sucursales--una-herramienta-para-mejorar-la-gesti-n-de-tus-puntos-de-venta.png"
              />
              <Card.Body>
                <Card.Title>Inventario</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Ir a sucursales</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://http2.mlstatic.com/storage/sc-seller-journey-backoffice/images-assets/234940675890-Sucursales--una-herramienta-para-mejorar-la-gesti-n-de-tus-puntos-de-venta.png"
              />
              <Card.Body>
                <Card.Title>Productos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Ir a sucursales</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://http2.mlstatic.com/storage/sc-seller-journey-backoffice/images-assets/234940675890-Sucursales--una-herramienta-para-mejorar-la-gesti-n-de-tus-puntos-de-venta.png"
              />
              <Card.Body>
                <Card.Title>Ofertas</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Ir a sucursales</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://http2.mlstatic.com/storage/sc-seller-journey-backoffice/images-assets/234940675890-Sucursales--una-herramienta-para-mejorar-la-gesti-n-de-tus-puntos-de-venta.png"
              />
              <Card.Body>
                <Card.Title>Proveedores</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Ir a sucursales</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://http2.mlstatic.com/storage/sc-seller-journey-backoffice/images-assets/234940675890-Sucursales--una-herramienta-para-mejorar-la-gesti-n-de-tus-puntos-de-venta.png"
              />
              <Card.Body>
                <Card.Title>Compras</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Ir a sucursales</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default AdminMenu;
