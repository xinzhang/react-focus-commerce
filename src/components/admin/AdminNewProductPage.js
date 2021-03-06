import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AdminProducts from './AdminProducts';
import AdminNewProduct from './AdminNewProduct';

import * as adminActions from '../../actions/adminActions';
import CategoryCard from '../category/CategoryCard';

class AdminNewProductPage extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

    componentDidMount() {
      console.log('component did mount');
      console.log(this.props.params);

      const prodId = this.props.params.id;
      if (prodId && this.props.product.id === -1 ) {
        console.log('load admin products');
        this.props.actions.getAdminProducts();
      }
    }

    constructor(props) {
      super(props);

      this.submitProduct = this.submitProduct.bind(this);
      this.goBack = this.goBack.bind(this);
    }

    submitProduct(prod) {
      console.log('AdminNewProductPage submitProduct');
      console.log(prod);

      if (prod._id == undefined) {
        this.props.actions.addAdminProduct(prod);
      }
      else {
        this.props.actions.updateAdminProduct(prod);
      }

      this.context.router.push('/admin/products');
    }

    goBack() {
      this.context.router.push('/admin/products');
    }

    render() {
      return (
        <div className="row">
          <div className="col-sm-3 hidden-xs column-left" id="column-left">
            <CategoryCard />
          </div>
          <div className="col-sm-9" id="content">
            <AdminNewProduct account={this.props.account}
              submit={this.submitProduct}
              product={this.props.product}
              categories={this.props.categories}
              brands={this.props.brands}
              goBack={this.goBack}/>
          </div>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {

  let prod = {
      id: -1,
      name: '',
      pic_url:'',
      desc:'',
      price:'',
      tax:'',
      rating: 0,
      category:'',
      subcategory: '',
      pic_small_url:'',
      slider_pic_small_url:[],
      slider_pic_small_ids:[],
      slider_pic_large_url:[],
      slider_pic_large_ids:[]

  }
  const prodId = ownProps.params.id;
  if (prodId && state.admin_products.length > 0 ) {
    prod = Object.assign({}, state.admin_products.find(p => p._id == prodId));
  }

  console.log('admin new product page mapStateToProps');
  console.log(prod);

  return {
    account: state.account,
    categories: state.categories,
    brands: state.brands,
    product: prod
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(adminActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminNewProductPage);
