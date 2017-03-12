import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartActions';

import CartDropdown from '../cart/CartDropdown';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  deleteCartItem(id) {
    this.props.actions.removeShoppingCart(id);
  }

  render() {
    return (
      <div className="container">
          <div className="header-inner">
              <div className="col-sm-4 col-xs-6 header-left">
                <div className="shipping">
                <div className="shipping-img"></div>
                    <div className="shipping-text">
                      <span className="shipping-detail"></span>
                    </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6 header-middle">
                  <div className="header-middle-top">
                      <div id="logo">
                        <Link to={'/'}>
                          <img src="/image/logo.png" title="E-Commerce" alt="E-Commerce" className="img-responsive" />
                        </Link>
                      </div>
                  </div>
              </div>

                  { this.props.account.role === 'admin' && this.props.account.status==='authenticated' &&
                    <div className="col-sm-4 col-xs-6 header-right"><span>Admin</span></div>
                  }
                  { this.props.account.role !== 'admin' &&
                  <div className="col-sm-4 col-xs-6 header-right">
                    <CartDropdown cart={this.props.cart} deleteCartItem={this.deleteCartItem.bind(this)} />

                    <div id="search" className="input-group">
                        <input type="text" name="search" value="" placeholder="Search" className="form-control input-lg" />
                        <span className="input-group-btn">
                        <button type="button" className="btn btn-default btn-lg"><i className="fa fa-search"></i></button>
                        </span> </div>
                  </div>
                }
          </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
    account: state.account
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
