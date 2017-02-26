import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';

import { Form } from 'formsy-react';
import MyInput from '../common/formsy/Input';

class LoginPage extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      account: Object.assign({}, this.props.account),
      canSubmit: false
    }

    this.login = this.login.bind(this);
    this.updateLoginData = this.updateLoginData.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  login(data) {
      this.setState({account : {...this.state.account, ...data}}, function() {
        this.props.actions.login(this.state.account);
      });
  }

  componentWillReceiveProps(nextProps) {
    //if login correct, then redirect
    console.log(nextProps.account);
    if (nextProps.account.status === 'authenticated' && nextProps.account.email !== '' && nextProps.account.role==='user' && nextProps.account.error_message === '') {
      this.context.router.push('/');
    }
    else if (nextProps.account.status === 'authenticated' && nextProps.account.email !== '' && nextProps.account.role==='admin' && nextProps.account.error_message === '') {
      this.context.router.push('/admin');
    }
  }


  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  updateLoginData(event) {
      console.log('updatelogindata');
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
            {this.props.account.error_message != '' &&
              <h3 className="validation-error">{this.props.account.error_message}</h3>
            }
            <Form onSubmit={this.login} method="post" onValid={this.enableButton} onInvalid={this.disableButton}>
              <div className="form-group">
                <label htmlFor="input-email" className="control-label">E-Mail Address (*)</label>
                <MyInput type="text" className="form-control" id="input-email" placeholder="E-Mail Address" name="email" onChange={this.updateLoginData}
                  validations="isEmail" validationError="This is not a valid email" required />
              </div>
              <div className="form-group">
                <label htmlFor="input-password" className="control-label">Password (*)</label>
                <MyInput type="password" className="form-control" id="input-password" placeholder="Password" name="password" onChange={this.updateLoginData} required />
                <a href="/account/forgetpassword">Forgotten Password</a>
              </div>
              <button type="submit" className="btn btn-primary" disabled={!this.state.canSubmit}>Login</button>
            </Form>
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
