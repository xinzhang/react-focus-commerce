import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';

import ProductItem from './ProductItem';

class SpecialProductCard extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.props.actions.loadSpecialProducts();
    }

    render() {
      return (
        <div>
          <h3 className="productblock-title">Specials</h3>
          <div className="row special-grid product-grid">
          {this.props.products.map(item =>
              <ProductItem product={item} key={item._id} />
          )}
          </div>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.specialProducts.slice(0, 3)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialProductCard);
