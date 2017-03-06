import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adminActions from '../../actions/adminActions';


import AdminBrandEditor from './AdminBrandEditor';

class AdminBrandsPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        brands:[]
      }
      this.save = this.save.bind(this);
  }

  save(data) {
    this.props.actions.updateAdminBrands(data);
  }
    render() {

      return (
        <div className="row">
          <div className="col-sm-5 hidden-xs column-left" id="column-left">

          </div>
          <div className="col-sm-7" id="content">
            <AdminBrandEditor brands={this.state.brands} onSave={this.save}/>
          </div>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
  console.log('adminbrands');
  console.log(state);

  let brands = [];
  if (state.brands.length > 0) {
    brands = Object.assign([], [...state.brands]);
  }

  return {
    brands: brands
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(adminActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminBrandsPage);
