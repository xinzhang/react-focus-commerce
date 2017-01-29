import React from 'react';

class AccountSidebar extends React.Component {
    render() {
      return (
        <div className="column-block">
          <div className="columnblock-title">Account</div>
          <div className="account-block">
            <div className="list-group">
              <a className="list-group-item" href="/account/login">Login</a>
              <a className="list-group-item" href="/account/register">Register</a>
              <a className="list-group-item" href="/account/forgotPassword">Forgotten Password</a>
              <a className="list-group-item" href="#">My Account</a>
              <a className="list-group-item" href="#">Address Book</a>
              <a className="list-group-item" href="#">Wish List</a>
              <a className="list-group-item" href="#">Order History</a>
              <a className="list-group-item" href="download">Downloads</a>
              <a className="list-group-item" href="#">Reward Points</a>
              <a className="list-group-item" href="#">Returns</a>
              <a className="list-group-item" href="#">Transactions</a>
              <a className="list-group-item" href="#">Newsletter</a>
              <a className="list-group-item last" href="#">Recurring payments</a>
            </div>
          </div>
        </div>
      );
    }
}

export default AccountSidebar;
