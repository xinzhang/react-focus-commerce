import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartActions';

class CartTotal extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let subTotal = 0;
    let taxTotal = 0;
    let allTotal = 0;

    let len = this.props.cart.length;

    for (let i=0; i<this.props.cart.length; i++){
      let item = this.props.cart[i];
      subTotal += (item.qty * item.price);
      taxTotal += (item.qty * item.tax);
      allTotal += (item.qty * item.total);
    }

    return (
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="text-right"><strong>Sub-Total:</strong></td>
            <td className="text-right">${subTotal}</td>
          </tr>
          <tr>
            <td className="text-right"><strong>Tax Total</strong></td>
            <td className="text-right">${taxTotal}</td>
          </tr>
          <tr>
            <td className="text-right"><strong>Total</strong></td>
            <td className="text-right">${allTotal}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default CartTotal;
