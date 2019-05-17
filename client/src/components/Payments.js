import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { handleToken } from "../actions/index";

class Payments extends Component {
    render(){
        return (
            <StripeCheckout
                name="Emaily" //application name
                description="5 Euro for 5 credits"
                amount={500} // amount is in cents
                currency="EUR"
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Credits</button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);