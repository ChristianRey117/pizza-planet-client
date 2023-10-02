import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Compras.css";
import Card from "react-bootstrap/Card";

const Compras = () => {
  return (
    <div className="centro">
      <div className="text-center">
        <div className="col-12 col-md-12 justify-content-center">
          <button
            type="button"
            className="btn btn-secondary rounded-pill tittle  btn-lg"
          >
            REGISTRO DE VENTAS
          </button>
        </div>
        <br />
        <div className="row align-items-start justify-content-center">
          <div className="col">
            <button type="button" className="btn btn-warning rounded-pill">
              Filtro
            </button>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <br />
        {["Warning"].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "40rem" }}
            className="mb-2"
          >
            <Card.Header>Hora: 16:00 pm Fecha:12/11/2023</Card.Header>
            <Card.Body>
              <div className="row align-items-start">
                <div className="col col-md-2">
                  <center>
                    <div className="App">
                      <i
                        style={{
                          borderRadius: "50%",
                          width: 50,
                          height: 50,
                          display: "block",
                          background: `url('https://images.ctfassets.net/n7hs0hadu6ro/1O0Be1dObiQBm17GQJHLj8/3fde720730f0b3616ecf5a82b928e7f9/pizza-a-domicilio-cerca-de-mi.jpg?w=1920&h=1281&fl=progressive&q=50&fm=jpg') red`,
                          backgroundPosition: "center",
                          backgroundSize: "auto 80px",
                        }}
                        className="Orden"
                      />
                    </div>
                  </center>
                </div>
                <div className="col-6 col-md-10">
                  <blockquote className="blockquote mb-0">
                    <p> Nombre de usuario: Fulanitox711 </p>
                  </blockquote>
                  <br />
                  <blockquote className="blockquote mb-0">
                    <p> Número de celular: 9991131082</p>
                  </blockquote>
                  <br />
                  <blockquote className="blockquote mb-0">
                    <p> Número de pedido: 32 Promo: 2</p>
                  </blockquote>
                  <br />
                  <blockquote className="blockquote mb-0">
                    <p>Ingredientes: Piña, Jamón</p>
                  </blockquote>
                  <br />
                  <blockquote className="blockquote mb-0">
                    <p>Dirección: Calle 77c x 42 y 43 Fraccionamiento Verce</p>
                  </blockquote>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
        <br />
        {["Warning"].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "40rem" }}
            className="mb-2"
          >
            <Card.Header>Hora: 16:00 pm Fecha:12/11/2023</Card.Header>
            <Card.Body>
              <div className="row align-items-start">
                <div className="col col-md-2">
                  <center>
                    <div className="App">
                      <i
                        style={{
                          borderRadius: "50%",
                          width: 50,
                          height: 50,
                          display: "block",
                          background: `url('https://images.ctfassets.net/n7hs0hadu6ro/1O0Be1dObiQBm17GQJHLj8/3fde720730f0b3616ecf5a82b928e7f9/pizza-a-domicilio-cerca-de-mi.jpg?w=1920&h=1281&fl=progressive&q=50&fm=jpg') red`,
                          backgroundPosition: "center",
                          backgroundSize: "auto 80px",
                        }}
                        className="Orden"
                      />
                    </div>
                  </center>
                </div>
                <div className="col-6 col-md-10">
                  <blockquote className="blockquote mb-0">
                    <p> Nombre de usuario: Fulanitox711 </p>
                  </blockquote>
                  <br />
                  <blockquote className="blockquote mb-0">
                    <p> Número de celular: 9991131082</p>
                  </blockquote>
                  <br />
                  <blockquote className="blockquote mb-0">
                    <p> Número de pedido: 32 Promo: 2</p>
                  </blockquote>
                  <br />
                  <blockquote className="blockquote mb-0">
                    <p>Ingredientes: Piña, Jamón</p>
                  </blockquote>
                  <br />
                  <blockquote className="blockquote mb-0">
                    <p>Dirección: Calle 77c x 42 y 43 Fraccionamiento Verce</p>
                  </blockquote>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Compras;
