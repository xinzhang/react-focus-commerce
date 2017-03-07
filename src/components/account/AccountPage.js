import React from 'react';

import AccountSidebar from './AccountSidebar';

class AccountPage extends React.Component {
    render() {
      return (
        <div className="row">
          <div className="col-sm-3 hidden-xs column-left" id="column-left">
            <AccountSidebar />
          </div>
          <div className="col-sm-9" id="content">
              {this.props.children}            
          </div>
        </div>
      );
    }
}

export default AccountPage;
