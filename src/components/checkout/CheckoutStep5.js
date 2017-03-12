import React from 'react';
import {connect} from 'react-redux';

import CartLine from '../cart/CartLine';

class CheckoutStep5 extends React.Component {
    constructor(props) {
      super(props)

      this.submitOrder = this.submitOrder.bind(this);
    }

    submitOrder(){
      this.props.submitOrder(this.props.cart);
    }

    render() {

      let subTotal = 0;
      let allTotal = 0;

      let len = this.props.cart.length;

      for (let i=0; i<this.props.cart.length; i++){
        let item = this.props.cart[i];
        subTotal += (item.qty * item.price);
        allTotal += (item.qty * item.total);
      }

      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title"><a className="accordion-toggle" data-parent="#accordion" data-toggle="collapse" href="#collapse-checkout-confirm" aria-expanded="false">Step 5: Confirm Order <i className="fa fa-caret-down"></i></a></h4>
          </div>
          <div id="collapse-checkout-confirm" className="panel-collapse collapse in" aria-expanded="true">
            <div className="panel-body">
              <div className="table-responsive">

                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <td className="text-center">Image</td>
                      <td className="text-left">Product Name</td>
                      <td className="text-left">Model</td>
                      <td className="text-left">Quantity</td>
                      <td className="text-right">Unit Price</td>
                      <td className="text-right">Total</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cart.map(item =>
                          <CartLine cartItem={item} key={item.prod_id}/>
                    )}
                  </tbody>
                  <tfoot>
                      <tr>
                        <td className="text-right" colSpan="5"><strong>Sub-Total:</strong></td>
                        <td className="text-right">${subTotal}</td>
                      </tr>
                      <tr>
                        <td className="text-right" colSpan="5"><strong>Flat Shipping Rate:</strong></td>
                        <td className="text-right">$5.00</td>
                      </tr>
                      <tr>
                        <td className="text-right" colSpan="5"><strong>Total:</strong></td>
                        <td className="text-right">${allTotal}</td>
                      </tr>
                    </tfoot>
                </table>
              </div>

              <div className="buttons">
                <div className="pull-right">
                  <input type="button" className="btn btn-primary" data-loading-text="Loading..." id="button-order-submit"
                      value="Submit" onClick={this.submitOrder} />
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
