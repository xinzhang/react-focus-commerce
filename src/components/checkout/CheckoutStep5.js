import React from 'react';
import {connect} from 'react-redux';

class CheckoutStep5 extends React.Component {
    constructor(props) {
      super(props)

      this.submitOrder = this.submitOrder.bind(this);
    }

    submitOrder(){
      this.props.submitOrder(this.props.cart);
    }

    render() {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title"><a className="accordion-toggle" data-parent="#accordion" data-toggle="collapse" href="#collapse-checkout-confirm" aria-expanded="false">Step 5: Confirm Order <i className="fa fa-caret-down"></i></a></h4>
          </div>
          <div id="collapse-checkout-confirm" className="panel-collapse collapse in" aria-expanded="true">
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <td className="text-left">Product Name</td>
                      <td className="text-left">Model</td>
                      <td className="text-right">Quantity</td>
                      <td className="text-right">Unit Price</td>
                      <td className="text-right">Total</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left"><a href="http://localhost/opc001/index.php?route=product/product&amp;product_id=46">Sony VAIO</a></td>
                      <td className="text-left">Product 19</td>
                      <td className="text-right">1</td>
                      <td className="text-right">$1,000.00</td>
                      <td className="text-right">$1,000.00</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="text-right" colSpan="4"><strong>Sub-Total:</strong></td>
                      <td className="text-right">$1,000.00</td>
                    </tr>
                    <tr>
                      <td className="text-right" colSpan="4"><strong>Flat Shipping Rate:</strong></td>
                      <td className="text-right">$5.00</td>
                    </tr>
                    <tr>
                      <td className="text-right" colSpan="4"><strong>Total:</strong></td>
                      <td className="text-right">$1,005.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="buttons">
                <div className="pull-right">
                  <input type="button" data-loading-text="Loading..." className="btn btn-primary"
                    id="button-confirm" value="Confirm Order" onClick={this.submitOrder} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}


function mapStateToProps(state, ownProps) {
  return {
    account: state.account,
    cart: state.cart
  }
}

export default connect(mapStateToProps)( CheckoutStep5 );
