import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import StripeCheckout from "react-stripe-checkout";

class Payments extends React.Component {
  render() {
    return (
      // ...
      <StripeCheckout
        name="Peter Guan"
        description="$5 for 5 credits"
        amount={500}
        token={this.props.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add 5 Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
