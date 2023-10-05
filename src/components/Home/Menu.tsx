const Menu = () => {
  return (
    <div style={{ marginTop: "7%" }}>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-8 menu-background">
            <h3 style={{ color: "yellow" }}>MENÚ</h3>

            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col-4">
                  <button>Entradas</button>
                </div>
                <div className="col-4">
                  <button>Pizzas</button>
                </div>
                <div className="col-4">
                  <button>Bebidas</button>
                </div>

                <div className="col-12">
                  <img
                    style={{ height: "400px" }}
                    src="https://marketplace.canva.com/EAEfNjcKK9Q/1/0/1131w/canva-simple-food-menu-2_2u7yeZ_VM.jpg"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col align-self-end">
                  <button>Ver todo</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <img
              src="https://img.freepik.com/foto-gratis/apetitosa-rebanada-pizza-plana-generativa-ai_169016-28936.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
