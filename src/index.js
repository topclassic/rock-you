import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import Calculation from "./container/Calculation";
import * as serviceWorker from "./serviceWorker";
import Layout from "./components/Layout";

ReactDOM.render(
  <Layout>
    <Calculation />
  </Layout>,
  document.getElementById("root")
);

serviceWorker.unregister();
