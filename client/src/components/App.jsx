import React, { Component } from "react";
// BrowserRouter is looking at current URL, and the changes a set of components that are visible on the screen at any given time.
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";

const Surveynew = () => <h2>Surveynew</h2>;

class App extends Component {
  componentDidMount() {
    // create action creator here.
    // this component will receive action creators from the redux side of our application.
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={Surveynew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
// we are going to hook up our app component to our redux store by using the connect helper from the react-redux library.
// 1st for the map state to prop's arguments or the map state to props function
// 2nd we pass all the different action creators we want to wire up.
// once we pass all of these different actions, they are assigned to the app component as props
export default connect(null, actions)(App);
