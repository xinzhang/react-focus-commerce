import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';

import ProductItem from './ProductItem';

class LatestProductCard extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.props.actions.loadLatestProducts();
  }

    render() {
      return (
        <div>
          <h3 className="productblock-title">Latest</h3>
          <div className="row latest-grid product-grid">
          {this.props.products.map(item =>
              <ProductItem product={item} key={item.id} />
          )}
          </div>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.latestProducts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestProductCard);
