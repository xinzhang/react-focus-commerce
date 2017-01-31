import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import LeftPage from '../navigation/LeftPage';
import ProductDetail from '../products/detail/ProductDetail';

class ProductPage extends React.Component {
    render() {
      return (
        <div>
          <LeftPage />
          <div id="content" className="col-sm-9">
            <ProductDetail product={this.props.product}/>
          </div>
        </div>
      );
    }
}

// ProductPage.propTypes = {
//   //product: PropTypes.Object.isRequired
// }

function mapStateToProps(state, ownProps) {
  console.log('productpage state');
  console.log(state);

  const prodId = ownProps.params.id;
  let product = { id: -1, name:'', pic_url:'', desc:'', price:0.0 ,tax:0.0, rating:0.0};

  if (prodId && state.products.length > 0) {
      product = Object.assign({}, state.products.find(b => b.id == prodId));
  }

  console.log(product);
  return {
    product: product
  }
}

export default connect(mapStateToProps)(ProductPage);
