// this is a css file. we have to use extension.
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";

// we will use createStore help to create instance of our redux store.
// 1st param is all the different producers that we have inside of our application.
// 2ed param is initial state of our application.
const store = createStore(reducers, {}, applyMiddleware());

// 2 arguments.
ReactDOM.render(
  // Provider is a react component that read changes from our redux store.
  // anytime the store has some change, the Provider will inform all of its chirdren components.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
