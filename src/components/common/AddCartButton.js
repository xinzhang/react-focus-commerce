import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartActions';

class AddCartButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.addCartItem = this.addCartItem.bind(this);
  }

  addCartItem() {
    console.log('add cart button cardcartItem');

    let prod = this.props.product;

    let cartItem = {
      prod_id: prod.id,
      prod_pic:'/image/product/7product50x59.jpg',
      name: prod.name,
      qty: 1,
      price: prod.price,
      tax: prod.tax,
      total: (prod.price + prod.tax)
    }

    this.props.actions.addShoppingCart(cartItem);
  }

  render() {
    return (
      <button type="button" className="addtocart-btn" onClick={()=>this.addCartItem()}>Add to Cart</button>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddCartButton);
