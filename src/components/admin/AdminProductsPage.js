import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AdminProducts from './AdminProducts';
import * as adminActions from '../../actions/adminActions';

import CategoryCard from '../category/CategoryCard';

class AdminProductsPage extends React.Component {
    componentDidMount() {
      this.props.actions.getAdminProducts();
    }

    render() {
      return (
        <div className="row">
          <div className="col-sm-3 hidden-xs column-left" id="column-left">
            <CategoryCard />
          </div>
          <div className="col-sm-9" id="content">
              <button type="submit" className="btn btn-primary"><i className="fa fa-plus-square"></i> New Product</button>
              <br/>
              <AdminProducts products={this.props.products} />
          </div>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {

  let products = [];
  if (state.admin_products.length > 0) {
    products = Object.assign([], [...state.admin_products]);
  }

  return {
    products: products
  }
  
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(adminActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductsPage);
