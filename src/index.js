import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import IntlProviderWrapper from "./hoc/IntlProviderWrapper";

import { Provider } from "react-redux";
import reduxStore, { persistor } from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxStore}>
    <IntlProviderWrapper>
      <App persistor={persistor} />
    </IntlProviderWrapper>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
