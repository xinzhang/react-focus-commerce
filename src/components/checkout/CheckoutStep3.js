import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';
import CountryList from '../common/CountryList';
import PaymentZoneList from '../common/PaymentZoneList';

import PaymentAddress from './PaymentAddress';

class CheckoutStep3 extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        shipping_address: "existing"
      };

      this.onAddressChanged = this.onAddressChanged.bind(this);
      this.nextPanel = this.nextPanel.bind(this);
      this.updateAddress = this.updateAddress.bind(this);
    }

    updateAddress(addr) {
      console.log(addr);
      this.setState({
        shipping: addr
      }, function() {
        this.props.updateOrder(this.state);
      });
    }

    onAddressChanged(e) {
      this.setState({
        shipping_address: e.currentTarget.value
      }, function(){
        if (e.currentTarget.value == "existing" && this.props.account.address) {
          //update the order
          let orderAddr = Object.assign({}, this.props.account.address);
          orderAddr.firstname = this.props.account.firstname;
          orderAddr.lastname = this.props.account.lastname;
          this.props.updateOrder(orderAddr);
        }
      })
    }

    onOrderShippingCommentChanged(e) {
      this.setState({
        shipping_comment: e.target.value
      }, function() {
        this.props.updateOrder(this.state);
      });
    }

    nextPanel() {
      this.props.updateStep(4);
    }

    render() {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title"><a id="#checkoutStep3" className="accordion-toggle collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapse-shipping-address" aria-expanded={this.props.step == 3}>Step 3: Shipping Details <i className="fa fa-caret-down"></i></a></h4>
          </div>
          <div id="collapse-shipping-address" className="panel-collapse collapse zero-height" aria-expanded="false">
            <div className="panel-body">
              <form className="form-horizontal">
                <div className="radio">
                  <label>
                    <input type="radio" checked={this.state.shipping_address === 'existing'}  value="existing" name="payment_address" data-id="shipping-existing" onChange={this.onAddressChanged} />
                    I want to use an existing address</label>
                </div>

                <div id="shipping-existing">
                  <select className="form-control" name="address_id">
                    <option selected="selected" value="4">
                      {this.props.account.address.address1}, {this.props.account.address.suburb}, {this.props.account.address.postcode}
                    </option>
                  </select>
                </div>

                <div className="radio">
                  <label>
                    <input type="radio" value="new" checked={this.state.shipping_address === 'new'} name="payment_address" data-id="payment-new" onChange={this.onAddressChanged} />
                    I want to use a new address</label>
                </div>
                <br />
                {this.state.shipping_address === "new" &&
                  <PaymentAddress updated={this.updateAddress} />
                }
                <p><strong>Add Comments About Your Shipping</strong></p>
                <p>
                  <textarea className="form-control" rows="8" name="comment" defaultValue="" onChange="{this.onOrderShippingCommentChanged}"></textarea>
                </p>
                <div className="buttons clearfix">
                  <div className="pull-right">
                    <input type="button" className="btn btn-primary" data-loading-text="Loading..." id="button-payment-address"
                      data-parent="#accordion" data-toggle="collapse" href="#collapse-payment-method"
                      value="Continue" onClick={this.nextPanel} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
  return {
    account: state.account
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( CheckoutStep3 );
