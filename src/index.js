import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import Calculation from "./container/Calculation";
import * as serviceWorker from "./serviceWorker";
import Layout from "./components/Layout";

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <Calculation />
    </Layout>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
