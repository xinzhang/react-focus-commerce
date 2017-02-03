import React from 'react';

class CheckoutStep1 extends React.Component {
    render() {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title"><a className="accordion-toggle collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapse-checkout-option" aria-expanded="false">Step 1: Checkout Options <i className="fa fa-caret-down"></i></a></h4>
          </div>
          <div id="collapse-checkout-option" className="panel-collapse collapse zero-height" aria-expanded="false">
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-6">
                  <h2>New Customer</h2>
                  <p>Checkout Options:</p>
                  <div className="radio">
                    <label>
                      <input type="radio" checked="checked" value="register" name="account" />
                      Register Account</label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="guest" name="account" />
                      Guest Checkout</label>
                  </div>
                  <p>By creating an account you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.</p>
                  <input type="button" className="btn btn-primary" data-loading-text="Loading..." id="button-account" value="Continue" />
                </div>
                <div className="col-sm-6">
                  <h2>Returning Customer</h2>
                  <p>I am a returning customer</p>
                  <div className="form-group">
                    <label htmlFor="input-email" className="control-label">E-Mail</label>
                    <input type="text" className="form-control" id="input-email" placeholder="E-Mail" value="" name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-password" className="control-label">Password</label>
                    <input type="password" className="form-control" id="input-password" placeholder="Password" value="" name="password" />
                    <a href="http://localhost/opc001/index.php?route=account/forgotten">Forgotten Password</a></div>
                  <input type="button" className="btn btn-primary" data-loading-text="Loading..." id="button-login" value="Login" />
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    }
}

export default CheckoutStep1;
