import { useState } from "react";
import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import Sucursal from "./components/Sucursal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Sucursal></Sucursal>
    </div>
  );
}

export default App;
