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
    var changeTracking = [];
    data.map(x => {
      if (x._id) {
          let a = this.props.brands.find(y => y._id=== x._id)
          if (a==undefined || a.name !==x.name) {
            changeTracking.push(x);
          }
      } else {
        changeTracking.push(x)
      }
    })
    this.props.actions.updateAdminBrands(changeTracking);
  }

    render() {
      return (
        <AdminBrandEditor brands={this.props.brands} onSave={this.save}/>
      );
    }

}

function mapStateToProps(state, ownProps) {
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
