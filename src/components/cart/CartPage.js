import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

import * as cartActions from '../../actions/cartActions';

import CartList from './CartList';
import CartTotal from './CartTotal';

class CartPage extends React.Component {

    render() {
      return (
        <div>
            <CartList cart={this.props.cart} />

            <div className="row">
              <div className="col-sm-4 col-sm-offset-8">
                <CartTotal cart={this.props.cart} />
              </div>
            </div>

            <div className="row">
              <div className="buttons">
                <div className="pull-left">
                  <Link to={'/'} className="btn btn-default">Continue Shopping</Link>
                </div>
                <div className="pull-right">
                  <Link to={'/products/checkout'} className="btn btn-default">Checkout</Link>
                </div>
              </div>
            </div>
        </div>
      );
    }
}

// ProductPage.propTypes = {
//   //product: PropTypes.Object.isRequired
// }

function mapStateToProps(state, ownProps) {
  console.log('cart page:');
  console.log(state);
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
