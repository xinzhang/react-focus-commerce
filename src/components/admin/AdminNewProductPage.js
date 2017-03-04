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
    }

    constructor(props) {
      super(props);

      this.submitNewProduct = this.submitNewProduct.bind(this);
      this.submitUpdateProduct = this.submitUpdateProduct.bind(this);

      if (this.props.params.id) {
        this.props.actions.editAdminProduct(this.props.params.id);
      }
    }

    submitNewProduct(prod) {
      console.log('AdminNewProductPage submitNewProduct');
      console.log(prod);
      this.props.actions.addAdminProduct(prod);
      this.context.router.push('/admin/products');
    }

    render() {
      return (
        <div className="row">
          <div className="col-sm-3 hidden-xs column-left" id="column-left">
            <CategoryCard />
          </div>
          <div className="col-sm-9" id="content">
            { this.props.params.id === undefined &&
              <AdminNewProduct account={this.props.account} submit={this.submitNewProduct} />
            }
            { this.props.params.id &&
              <AdminNewProduct account={this.props.account} submit={this.submitUpdateProduct} />
            }
          </div>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {

  return {
    account: state.account
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(adminActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminNewProductPage);
