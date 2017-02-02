import React from 'react';

class CartDropdown extends React.Component {

  constructor(props, context) {
    super(props, context);
    //this.deleteCartItem = this.deleteCartItem.bind(this);
  }

  deleteCartItem(id) {
    this.props.deleteCartItem(id);
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
      <div id="cart" className="btn-group btn-block">
          <button type="button" className="btn btn-inverse btn-block btn-lg dropdown-toggle cart-dropdown-button">
            <span id="cart-total">{this.props.cart.length} item(s) - ${allTotal}</span><i className="fa fa-caret-down"></i>
          </button>
          <ul className="dropdown-menu pull-right cart-dropdown-menu">
              <li>
                  <table className="table table-striped">
                      <tbody>
                          {this.props.cart.map(item =>
                              <tr key={item.prod_id}>
                                  <td className="text-center"><a href="#">
                                    <img className="img-thumbnail" title={item.name} alt={item.name} src={item.prod_pic} />
                                  </a></td>
                                  <td className="text-left"><a href="#">{item.name}</a></td>
                                  <td className="text-right">x {item.qty}</td>
                                  <td className="text-right">${item.price}</td>
                                  <td className="text-center">
                                    <button className="btn btn-danger btn-xs" title="Remove" type="button" onClick={() => this.deleteCartItem(item.prod_id)}>
                                      <i className="fa fa-times"></i>
                                    </button>
                                  </td>
                              </tr>
                            )
                          }
                      </tbody>
                  </table>
              </li>
              <li>
                  <div>
                      <table className="table table-bordered">
                          <tbody>
                              <tr>
                                  <td className="text-right"><strong>Sub-Total</strong></td>
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
                      <p className="text-right"> <span className="btn-viewcart"><a href="cart.html"><strong><i className="fa fa-shopping-cart"></i> View Cart</strong></a></span> <span className="btn-checkout"><a href="checkout.html"><strong><i className="fa fa-share"></i> Checkout</strong></a></span> </p>
                  </div>
              </li>
          </ul>
      </div>
    )
  }
}

export default CartDropdown;
