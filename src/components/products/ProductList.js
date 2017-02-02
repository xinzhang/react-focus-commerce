import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ListFilter from './ListFilter';
import ListPager from './ListPager';
import ProductCard from './ProductCard';
import CategoryBanner from '../category/CategoryBanner';

class ProductList extends React.Component {

    render() {
      return (
        <div className="row">
          <CategoryBanner />
          <ListFilter />
          <br />
          <div className="grid-list-wrapper">
            {this.props.products.map(item =>
              <div className="product-layout product-grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
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
  return {
    products: state.products,
    pageno: state.pageno,
  }
}

export default connect(mapStateToProps)(ProductList);
