import { useState } from "react";
import * as React from "react";
import "./components/Compras.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Compras from "./components/Compras";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Compras></Compras>
    </div>
  );
}

export default App;
