import Header from "../Header/Header";
import Container from "react-bootstrap/Container";
import OfertsHome from "./Oferts-Home";
import Menu from "./Menu";

const Home = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="image-home">
            <div className="div-start-home">
              <div className="text-start-home">
                <h1>ÑAM ÑAM</h1>
                <p>
                  lorem sdaoip eiaodsadm ajsdiwqoureas dkd daskldjakdajs
                  lreopais po
                </p>

                <button>Ordena Ahora</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <OfertsHome></OfertsHome>
      </div>

      <div>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default Home;
