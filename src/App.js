import React from "react";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";

import store from "./redux/store";
import MainRoute from "./route/MainRoute";

import "antd/lib/style/themes/default.less";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import "./style.less";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ConfigProvider>
          <MainRoute />
        </ConfigProvider>
      </Provider>
    </div>
  );
}

export default App;
