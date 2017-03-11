import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';

import CountryList from '../common/CountryList';
import PaymentZoneList from '../common/PaymentZoneList';

import $ from 'jquery';

class CheckoutStep2 extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        payment_address: "existing"
      };

      this.onAddressChanged = this.onAddressChanged.bind(this);
      this.nextPanel = this.nextPanel.bind(this);
    }

    onAddressChanged(e) {
      console.log(e);
      this.setState({
        payment_address: e.currentTarget.value
      })
    }

    nextPanel() {
      this.props.updateStep(3);
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title"><a id="#checkoutStep2" className="accordion-toggle collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapse-payment-address" aria-expanded={this.props.step == 2}>Step 2: Billing Details <i className="fa fa-caret-down"></i></a></h4>
          </div>
          <div id="collapse-payment-address" className="panel-collapse collapse zero-height" aria-expanded="false">
            <div className="panel-body">
              <form className="form-horizontal">
                <div className="radio">
                  <label>
                    <input type="radio" checked={this.state.payment_address === 'existing'}
                      value="existing" name="payment_address" data-id="payment-existing"
                      onChange={this.onAddressChanged} />
                    I want to use an existing address</label>
                </div>
                <div id="payment-existing">
                  <select className="form-control" name="address_id">
                    <option selected="selected" value="4">
                      {this.props.account.address.address1}, {this.props.account.address.suburb}, {this.props.account.address.postcode}
                    </option>
                  </select>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="new" checked={this.state.payment_address === 'new'} name="payment_address" data-id="payment-new" onChange={this.onAddressChanged} />
                    I want to use a new address</label>
                </div>
                <br />
                {this.state.payment_address === "new" &&
                <div id="payment-new" >
                  <div className="form-group required">
                    <label htmlFor="input-payment-firstname" className="col-sm-2 control-label">First Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-payment-firstname" placeholder="First Name" value="" name="firstname" />
                    </div>
                  </div>
                  <div className="form-group required">
                    <label htmlFor="input-payment-lastname" className="col-sm-2 control-label">Last Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-payment-lastname" placeholder="Last Name" value="" name="lastname" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-payment-company" className="col-sm-2 control-label">Company</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-payment-company" placeholder="Company" value="" name="company" />
                    </div>
                  </div>
                  <div className="form-group required">
                    <label htmlFor="input-payment-address-1" className="col-sm-2 control-label">Address 1</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-payment-address-1" placeholder="Address 1" value="" name="address_1" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-payment-address-2" className="col-sm-2 control-label">Address 2</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-payment-address-2" placeholder="Address 2" value="" name="address_2" />
                    </div>
                  </div>
                  <div className="form-group required">
                    <label htmlFor="input-payment-suburb" className="col-sm-2 control-label">Suburb</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-payment-suburb" placeholder="Suburb" value="" name="Suburb" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-payment-postcode" className="col-sm-2 control-label">Post Code</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-payment-postcode" placeholder="Post Code" value="" name="postcode" />
                    </div>
                  </div>
                  <div className="form-group required">
                    <label htmlFor="input-payment-country" className="col-sm-2 control-label">Country</label>
                    <div className="col-sm-10">
                      <CountryList />
                    </div>
                  </div>
                  <div className="form-group required">
                    <label htmlFor="input-payment-state" className="col-sm-2 control-label">State</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-payment-state" placeholder="State" value="" name="State" />
                    </div>
                  </div>
                </div>
                }
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

export default connect(mapStateToProps, mapDispatchToProps)( CheckoutStep2 );
