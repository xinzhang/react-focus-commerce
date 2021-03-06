import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orderActions from '../../actions/orderActions';

import $ from 'jquery';

import CheckoutStep1 from './CheckoutStep1';
import CheckoutStep2 from './CheckoutStep2';
import CheckoutStep3 from './CheckoutStep3';
import CheckoutStep4 from './CheckoutStep4';
import CheckoutStep5 from './CheckoutStep5';

class CheckoutPage extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

    constructor(props, context) {
        super(props, context);

        this.state = {
          currentStep: 1,
          order:{}
        };

        this.updateStep = this.updateStep.bind(this);
        this.updateBillAddress = this.updateBillAddress.bind(this);
        this.updateShippingAddress = this.updateShippingAddress.bind(this);
        this.updateOrderPayment = this.updateOrderPayment.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
    }

    updateBillAddress(billAddr){

      let order = Object.assign({}, this.state.order, {bill_address: billAddr})

      this.setState({
        order: order
      })
    }

    updateShippingAddress(orderAddr) {
      let order = Object.assign({}, this.state.order, orderAddr)
      console.log('checkoutpage update shipping address', order)
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
      order.userId = this.props.account._id;

      this.setState({
        order: order
      }, function() {
        console.log('submit order', this.state.order);
        this.props.actions.submitOrder(this.state.order);
      });
    }

    updateStep(step) {
      console.log('parent updatestep triggered');

      this.setState({
        currentStep : step
      })

    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.newOrderStatus.status === "submitted") {
          this.context.router.push('/products/checkoutCompleted');
        }
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


function mapStateToProps(state, ownProps) {
  return {
    account: state.account,
    newOrderStatus: state.newOrderStatus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(orderActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CheckoutPage );
