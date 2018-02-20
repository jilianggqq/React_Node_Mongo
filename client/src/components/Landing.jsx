import React from "react";
import { connect } from "react-redux";

class Landing extends React.Component {
  getIdleMsg() {
    // console.log(this.props.idle);
    console.log("this.props of Landing:", this.props);
    return this.props.idle.msg;
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.getIdleMsg()}!</h1>
        Collect feedback from your users.
      </div>
    );
  }
}

function mapStateToProps({ idle }) {
  return { idle };
}

export default connect(mapStateToProps)(Landing);
