import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orderActions from '../../actions/orderActions';

class CheckoutCompletedPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
      return (
        <div>
          <h1>You Checkout has been succeed.</h1>
          <h3>Here is your order number: <strong>{this.props.newOrderStatus.order_number}</strong></h3>
        </div>
      );
    }
}


function mapStateToProps(state, ownProps) {
  return {
    newOrderStatus: state.newOrderStatus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(orderActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) ( CheckoutCompletedPage );
