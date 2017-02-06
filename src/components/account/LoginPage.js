import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      account: Object.assign({}, this.props.account)
    }

    this.login = this.login.bind(this);
    this.updateLoginData = this.updateLoginData.bind(this);

  }

  login(event) {
      event.preventDefault();      
      this.props.actions.login(this.state.account);
  }

  updateLoginData(event) {
      const field = event.target.name;
      const acct = this.state.account;
      acct[field] = event.target.value;

      return this.setState({account: acct});
  }

    render() {
      return (
        <div className="row">
          <div className="col-sm-6">
            <div className="well">
              <h2>New Customer</h2>
              <p><strong>Register Account</strong></p>
              <p>By creating an account you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.</p>
              <a className="btn btn-primary" href="/account/register">Continue</a>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="well">
              <h2>Returning Customer</h2>
              <p><strong>I am a returning customer</strong></p>
              <form encType="multipart/form-data" method="post" action="login.html">
                <div className="form-group">
                  <label htmlFor="input-email" className="control-label">E-Mail Address</label>
                  <input type="text" className="form-control" id="input-email" placeholder="E-Mail Address" name="email" onChange={this.updateLoginData} />
                </div>
                <div className="form-group">
                  <label htmlFor="input-password" className="control-label">Password</label>
                  <input type="password" className="form-control" id="input-password" placeholder="Password" name="password" onChange={this.updateLoginData} />
                  <a href="/account/forgetpassword">Forgotten Password</a>
                </div>
                <input type="submit" className="btn btn-primary" value="Login" onClick={this.login}/>
              </form>
            </div>
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
    actions: bindActionCreators(accountActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( LoginPage );
