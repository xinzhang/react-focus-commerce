import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';
import CountryList from '../common/CountryList';
import PaymentZoneList from '../common/PaymentZoneList';

class CheckoutStep3 extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        shipping_address: "existing"
      };

      this.onAddressChanged = this.onAddressChanged.bind(this);
      this.nextPanel = this.nextPanel.bind(this);
    }

    onAddressChanged(e) {
      console.log(e);
      this.setState({
        shipping_address: e.currentTarget.value
      })
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
                    <option selected="selected" value="4">22 Fizroy St, New town, NSW</option>
                  </select>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="new" checked={this.state.shipping_address === 'new'} name="payment_address" data-id="payment-new" onChange={this.onAddressChanged} />
                    I want to use a new address</label>
                </div>
                <br />
                {this.state.payment_address === "new" &&
                <div id="payment-new" >
                  <div className="form-group required">
                    <label htmlFor="input-shipping-firstname" className="col-sm-2 control-label">First Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-shipping-firstname" placeholder="First Name" value="" name="firstname" />
                    </div>
                  </div>
                  <div className="form-group required">
                    <label htmlFor="input-shipping-lastname" className="col-sm-2 control-label">Last Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-shipping-lastname" placeholder="Last Name" value="" name="lastname" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-shipping-company" className="col-sm-2 control-label">Company</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-shipping-company" placeholder="Company" value="" name="company" />
                    </div>
                  </div>
                  <div className="form-group required">
                    <label htmlFor="input-shipping-address-1" className="col-sm-2 control-label">Address 1</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-shipping-address-1" placeholder="Address 1" value="" name="address_1" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-shipping-address-2" className="col-sm-2 control-label">Address 2</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-shipping-address-2" placeholder="Address 2" value="" name="address_2" />
                    </div>
                  </div>
                  <div className="form-group required">
                    <label htmlFor="input-shipping-suburb" className="col-sm-2 control-label">Suburb</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-shipping-suburb" placeholder="Suburb" value="" name="Suburb" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-shipping-postcode" className="col-sm-2 control-label">Post Code</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-shipping-postcode" placeholder="Post Code" value="" name="postcode" />
                    </div>
                  </div>
                  <div className="form-group required">
                    <label htmlFor="input-shipping-country" className="col-sm-2 control-label">Country</label>
                    <div className="col-sm-10">
                      <CountryList />
                    </div>
                  </div>
                  <div className="form-group required">
                    <label htmlFor="input-shipping-state" className="col-sm-2 control-label">State</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-shipping-state" placeholder="State" value="" name="State" />
                    </div>
                  </div>
                </div>
                }
                <p><strong>Add Comments About Your Order</strong></p>
                <p>
                  <textarea className="form-control" rows="8" name="comment"></textarea>
                </p>
                <div className="buttons clearfix">
                  <div className="pull-right">
                    <input type="button" className="btn btn-primary" data-loading-text="Loading..." id="button-payment-address" value="Continue" onClick={this.nextPanel} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
}

export default CheckoutStep3;
