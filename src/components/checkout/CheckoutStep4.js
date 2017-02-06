import React from 'react';

class CheckoutStep4 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.nextPanel = this.nextPanel.bind(this);
  }

  nextPanel() {
    this.props.updateStep(5);
  }

    render() {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title"><a className="accordion-toggle collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapse-payment-method" aria-expanded={this.props.step == 4}>Step 4: Payment Method <i className="fa fa-caret-down"></i></a></h4>
          </div>
          <div id="collapse-payment-method" className="panel-collapse collapse" aria-expanded="false">
            <div className="panel-body">
              <p>Please select the preferred payment method to use on this order.</p>
              <div className="radio">
                <label>
                  <input type="radio" checked="checked" value="cod" name="payment_method" />
                  Cash On Delivery </label>
              </div>
              <p><strong>Add Comments About Your Order</strong></p>
              <p>
                <textarea className="form-control" rows="8" name="comment"></textarea>
              </p>
              <div className="buttons">
                <div className="pull-right">I have read and agree to the <a className="agree" href="#"><b>Terms &amp; Conditions</b></a>
                  <input type="checkbox" value="1" name="agree" />
                  &nbsp;
                  <input type="button" className="btn btn-primary" data-loading-text="Loading..." id="button-payment-method" value="Continue" onClick={this.nextPanel} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default CheckoutStep4;
