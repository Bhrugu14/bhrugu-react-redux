import React from "react";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import "antd/lib/style/themes/default.less";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.less";
import MainRoute from "./route/MainRoute";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ConfigProvider>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
          <MainRoute />
        </ConfigProvider>
      </Provider>
    </div>
  );
}

export default App;
