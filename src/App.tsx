import { useState } from "react";
import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import Header from "./components/Header";
import Product from "./components/Product/Product";
import AddProduct from "./components/Product/AddProduct";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>

      {/* <AddProduct></AddProduct> */}
      <Product></Product>
    </div>
  );
}

export default App;
