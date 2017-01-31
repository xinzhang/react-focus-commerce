import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import LeftPage from '../navigation/LeftPage';
import ProductDetail from '../products/detail/ProductDetail';
import * as productActions from '../../actions/productActions';

class ProductPage extends React.Component {
    componentDidMount() {
      let prodId = this.props.params.id;
      this.props.actions.loadRelatedProducts(prodId);
    }

    render() {
      return (
        <div>
          <LeftPage />
          <div id="content" className="col-sm-9">
            <ProductDetail product={this.props.product} relatedProducts={this.props.relatedProducts}/>
          </div>
        </div>
      );
    }
}

// ProductPage.propTypes = {
//   //product: PropTypes.Object.isRequired
// }

function mapStateToProps(state, ownProps) {

  const prodId = ownProps.params.id;
  let product = { id: -1, name:'', pic_url:'', desc:'', price:0.0 ,tax:0.0, rating:0.0};
  let relatedProducts = [];

  if (prodId && state.products.length > 0) {
      product = Object.assign({}, state.products.find(b => b.id == prodId));
  }

  if (prodId && state.relatedProducts.length > 0) {
    relatedProducts = Object.assign([], [...state.relatedProducts]);
  }

  return {
    product: product,
    relatedProducts: relatedProducts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
