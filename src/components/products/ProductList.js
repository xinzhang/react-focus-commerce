import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import ListFilter from './ListFilter';
import ListPager from './ListPager';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
    render() {
      return (
        <div className="row">
        <ListFilter />
        <br />
        <div className="grid-list-wrapper">
        {this.props.products.map(item =>
          <div className="product-layout product-list col-xs-12">
            <ProductCard product={item} key={item.id} />
          </div>
        )}
        </div>
        <ListPager />
        </div>
      );
    }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  console.log('proeuctlist state');
  console.log(state);
  return {
    products: state.products,
    pageno: state.pageno,
  }
}

export default connect(mapStateToProps)(ProductList);
