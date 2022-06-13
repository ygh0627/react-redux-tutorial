import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./modules";
import App from "./App";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
