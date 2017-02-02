import React from 'react';
import CartLine from './CartLine';

class CartList extends React.Component {
    render() {
      return (
        <div>
        <h1>Shopping Cart                &nbsp;(10.00kg) </h1>
        <form encType="multipart/form-data" method="post" action="#">
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
            </table>
          </div>
        </form>
        </div>
      );
    }
}

export default CartList;
