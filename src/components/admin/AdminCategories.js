import React, {PropTypes} from 'react';
import Tree from 'react-ui-tree';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adminActions from '../../actions/adminActions';

import CategoriesEdit from '../common/CategoriesEdit';

class AdminCategoriesPage extends React.Component {
    constructor(props) {
      super(props);
      this.submit = this.submit.bind(this);
    }

    submit(categories) {
      this.props.actions.updateAdminCategories(categories);
    }

    render() {
      return (
          <CategoriesEdit categories={this.props.categories} submit={this.submit}/>
      );
    }
}

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(adminActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCategoriesPage);
