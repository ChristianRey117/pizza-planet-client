import { useState } from "react";
import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import MenuCompra from "./components/MenuCompra/MenuCompra";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      {/* <Login></Login> */}
      <MenuCompra></MenuCompra>
    </div>
  );
}

export default App;
