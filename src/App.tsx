import { useState } from "react";
import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import Header from "./components/Header";
import Inventario from "./components/Inventario/Inventario";
import AddInventario from "./components/Inventario/AddInventario";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      {/* <AddInventario></AddInventario> */}
      <Inventario></Inventario>
    </div>
  );
}

export default App;
