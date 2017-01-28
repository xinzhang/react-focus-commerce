import React from 'react';

class CartDropdown extends React.Component {
  render() {
    return (
      <div id="cart" className="btn-group btn-block">
          <button type="button" className="btn btn-inverse btn-block btn-lg dropdown-toggle cart-dropdown-button">
            <span id="cart-total">1 item(s) - $254.00</span><i className="fa fa-caret-down"></i>
          </button>
          <ul className="dropdown-menu pull-right cart-dropdown-menu">
              <li>
                  <table className="table table-striped">
                      <tbody>
                          <tr>
                              <td className="text-center"><a href="#">
                                <img className="img-thumbnail" title="iPhone" alt="iPhone" src="image/product/7product50x59.jpg" />
                              </a></td>
                              <td className="text-left"><a href="#">iPhone</a></td>
                              <td className="text-right">x 1</td>
                              <td className="text-right">$254.00</td>
                              <td className="text-center">
                                <button className="btn btn-danger btn-xs" title="Remove" type="button"><i className="fa fa-times"></i></button>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </li>
              <li>
                  <div>
                      <table className="table table-bordered">
                          <tbody>
                              <tr>
                                  <td className="text-right"><strong>Sub-Total</strong></td>
                                  <td className="text-right">$210.00</td>
                              </tr>
                              <tr>
                                  <td className="text-right"><strong>Eco Tax (-2.00)</strong></td>
                                  <td className="text-right">$2.00</td>
                              </tr>
                              <tr>
                                  <td className="text-right"><strong>VAT (20%)</strong></td>
                                  <td className="text-right">$42.00</td>
                              </tr>
                              <tr>
                                  <td className="text-right"><strong>Total</strong></td>
                                  <td className="text-right">$254.00</td>
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
