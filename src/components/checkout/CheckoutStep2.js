import React from 'react';
import CountryList from '../common/CountryList';
import PaymentZoneList from '../common/PaymentZoneList';

class CheckoutStep2 extends React.Component {
    render() {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title"><a className="accordion-toggle collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapse-payment-address" aria-expanded="false">Step 2: Billing Details <i className="fa fa-caret-down"></i></a></h4>
          </div>
          <div id="collapse-payment-address" className="panel-collapse collapse zero-height" aria-expanded="false">
            <div className="panel-body">
              <form className="form-horizontal">
                <div className="radio">
                  <label>
                    <input type="radio" checked="checked" value="existing" name="payment_address" data-id="payment-existing" />
                    I want to use an existing address</label>
                </div>
                <div id="payment-existing">
                  <select className="form-control" name="address_id">
                    <option selected="selected" value="4">22 Fizroy St, New town, NSW</option>
                  </select>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="new" name="payment_address" data-id="payment-new" />
                    I want to use a new address</label>
                </div>
                <br />
                <div id="payment-new"  className="none-display">
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
                    <label htmlFor="input-payment-city" className="col-sm-2 control-label">City</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-payment-city" placeholder="City" value="" name="city" />
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
                    <label htmlFor="input-payment-zone" className="col-sm-2 control-label">Region / State</label>
                    <div className="col-sm-10">
                      <PaymentZoneList />
                    </div>
                  </div>
                </div>
                <div className="buttons clearfix">
                  <div className="pull-right">
                    <input type="button" className="btn btn-primary" data-loading-text="Loading..." id="button-payment-address" value="Continue" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
}

export default CheckoutStep2;
