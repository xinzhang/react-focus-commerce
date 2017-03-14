import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';

class SettingsPage extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
    }

    //this.login = this.login.bind(this);
  }

  render() {
    return (
      <div>Welcome</div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    x: state.x
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(accountActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( SettingsPage );
