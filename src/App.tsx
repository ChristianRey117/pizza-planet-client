import { useState } from "react";
import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return <Home />;
}

export default App;
