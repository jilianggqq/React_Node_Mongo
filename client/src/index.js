// this is a css file. we have to use extension.
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// just for test REST apis in the browser.
import axios from "axios";
window.axios = axios;

// react creators are where we somehow initiate change inside of the redux side of our application.

// we will use createStore help to create instance of our redux store.
// 1st param is all the different producers that we have inside of our application.
// 2ed param is initial state of our application.
const store = createStore(reducers, {}, compose(applyMiddleware(reduxThunk)));

// 2 arguments.
ReactDOM.render(
  // Provider is a react component that read changes from our redux store.
  // anytime the store has some change, the Provider will inform all of its chirdren components.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
