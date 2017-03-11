import React from 'react';
import LoginComponent from './LoginComponent';

class CheckoutStep1 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.nextPanel = this.nextPanel.bind(this);
  }

  nextPanel() {
    this.props.updateStep(2);
  }

    render() {

      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title"><a className="accordion-toggle collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapse-checkout-option" aria-expanded={this.props.step == 1}>Step 1: Checkout Options <i className="fa fa-caret-down"></i></a></h4>
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
                  <input type="button" className="btn btn-primary" data-loading-text="Loading..." id="button-account" value="Continue" onClick={this.nextPanel} />
                </div>

                <div className="col-sm-6">
                  <LoginComponent />
                </div>

              </div>
            </div>
          </div>
        </div>

      );
    }
}

export default CheckoutStep1;
