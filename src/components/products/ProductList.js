import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/productActions';

import ListFilter from './ListFilter';
import ListPager from './ListPager';
import ProductCard from './ProductCard';
import CategoryBanner from '../category/CategoryBanner';

class ProductList extends React.Component {

    constructor(props) {
      super(props);

      let title = this.props.params.category;
      if (title !== '') {
        console.log('load category', title);
        this.props.actions.loadProductsByCategory(title);
      }
    }

    componentWillReceiveProps(nextProps){

      let currentTitle = this.props.params.category
      let nextTitle = nextProps.params.category;

      if (currentTitle !== nextTitle) {
        console.log("previous:", currentTitle, " next:", nextTitle, " reload.");
        this.props.actions.loadProductsByCategory(nextTitle);
      }
    }

    render() {
      let title = this.props.params.category;

      return (
        <div className="row">
          <CategoryBanner title={title}/>
          <ListFilter />
          <br />
          <div className="grid-list-wrapper">
            {this.props.products.map(item =>
              <div key={item._id} className="product-layout product-grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ProductCard product={item} key={item._id} />
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
