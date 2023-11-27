import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { AxiosInterceptor } from "./interceptos/axios.interceptor";
import {Spinner} from "reactstrap"
AxiosInterceptor();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <div id="loader" >
        <Spinner id='spinner'style={{width:'8rem', height:'8rem', display: 'none'}}></Spinner>
      </div>
      <App />
    </Provider>
  </Router>
);
