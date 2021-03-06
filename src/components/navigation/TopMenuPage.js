import React from 'react';
import {connect} from 'react-redux';
import AdminTopMenu from './AdminTopMenu';
import UserTopMenu from './UserTopMenu';

class TopMenuPage extends React.Component {
    render() {

      return (
        <div>
          { this.props.account.role === 'admin' && this.props.account.status==='authenticated' &&
            <AdminTopMenu />
          }
          { this.props.account.role !== 'admin' &&
            <UserTopMenu categories={this.props.categories}/>
          }
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
  return {
    account: state.account,
    categories: state.categories,
  }
}

export default connect(mapStateToProps)(TopMenuPage);
