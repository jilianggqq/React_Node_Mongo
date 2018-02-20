import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    console.log("this.props of Header:", this.props);
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to={this.props.auth ? "/surveys" : "/"} className="left brand-logo">
              Peter Guan
            </Link>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}
// remember how do we hook up a Component to redux store?
// we always import connect helper with redux store, we define the map state to prop's function
// and then we pull off the litte pieces of state that we actually care about.
// gets calls with the entire state object outof the redux store.
// because we assigned in the reducers, authReducer's key is auth.
function mapStateToProps(state) {
  console.log("mapStateToProps starts, state:", state);
  return { auth: state.auth };
}
function mapStateToProps_prod({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
