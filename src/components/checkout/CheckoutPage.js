import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import $ from 'jquery';

import CheckoutStep1 from './CheckoutStep1';
import CheckoutStep2 from './CheckoutStep2';
import CheckoutStep3 from './CheckoutStep3';
import CheckoutStep4 from './CheckoutStep4';
import CheckoutStep5 from './CheckoutStep5';

class CheckoutPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          currentStep: 1,
          order:{}
        };

        this.updateStep = this.updateStep.bind(this);
        this.updateBillAddress = this.updateBillAddress.bind(this);
        this.updateOrderAddress = this.updateOrderAddress.bind(this);
        this.updateOrderPayment = this.updateOrderPayment.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
    }

    updateBillAddress(billAddr){

      let order = Object.assign({}, this.state.order, {bill_address: billAddr})

      this.setState({
        order: order
      })
    }

    updateOrderAddress(orderAddr) {
      let order = Object.assign({}, this.state.order, {delivery_address: orderAddr})

      this.setState({
        order: order
      })
    }

    updateOrderPayment(orderPayment){
      let order = Object.assign({}, this.state.order, {payment: orderPayment})

      this.setState({
        order: order
      })
    }

    submitOrder(cart) {

      let order = Object.assign({}, this.state.order, {cart: cart})
      this.setState({
        order: order
      }, function() {
        console.log('submit order', this.state.order);
      })
    }

    updateStep(step) {
      console.log('parent updatestep triggered');
      if (step === 2) {
        console.log('step2');
        $('#collapse-payment-address').collapse('toggle');
      }
      else if (step === 3) {
        console.log('step2');
        $('#collapse-shipping-address').collapse('toggle');
      }
      else if (step === 4) {
        console.log('step2');
        $('#collapse-payment-method').collapse('toggle');
      }
      else if (step === 5) {
        $('#collapse-checkout-confirm').collapse('toggle');
      }

      this.setState({
        currentStep : step
      })

    }

    render() {
      return (
        <div>
          <h1>Checkout</h1>
          <div id="accordion" className="panel-group">
            <CheckoutStep1 step={this.state.currentStep} updateStep={this.updateStep} />
            <CheckoutStep2 step={this.state.currentStep} updateStep={this.updateStep} updateOrder={this.updateBillAddress}/>
            <CheckoutStep3 step={this.state.currentStep} updateStep={this.updateStep} updateOrder={this.updateOrderAddress}/>
            <CheckoutStep4 step={this.state.currentStep} updateStep={this.updateStep} updateOrder={this.updateOrderPayment}/>
            <CheckoutStep5 step={this.state.currentStep} order={this.state.order} submitOrder={this.submitOrder}/>
          </div>
        </div>
      );
    }
}

export default CheckoutPage;
