import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';

import { Form } from 'formsy-react';
import MyInput from '../common/formsy/Input';

class LoginComponent extends React.Component {

    constructor(props, context) {
      super(props, context);

      this.state = {
        account: {},
        canSubmit: false,
        showUser: false
      }

      this.login = this.login.bind(this);
      this.enableButton = this.enableButton.bind(this);
      this.disableButton = this.disableButton.bind(this);

    }

    login(data) {
      console.log(data);
      this.setState({account : {...this.state.account, ...data}}, function() {
        this.props.actions.login(this.state.account);
      });
   }

   checkIfLoginAready(account) {
     if (account.status === 'authenticated'
       && account.email !== ''
       && account.error_message === '') {
       console.log('authenticated');
       this.setState({showUser: true});
     }
   }

   componentWillMount() {
     this.checkIfLoginAready(this.props.account);
   }

  componentWillReceiveProps(nextProps) {
    this.checkIfLoginAready(nextProps.account);
  }

  enableButton() {
      this.setState({ canSubmit: true });
  }

    disableButton() {
      this.setState({ canSubmit: false });
    }

    render() {
      return (
          <div>
          <h2>Returning Customer</h2>
          <p>I am a returning customer</p>

          {this.props.account.error_message != '' &&
            <h3 className="validation-error">{this.props.account.error_message}</h3>
          }

          {!this.state.showUser  &&
            <Form onSubmit={this.login} method="post" onValid={this.enableButton} onInvalid={this.disableButton}>

              <div className="form-group">
                <label htmlFor="input-email" className="control-label">E-Mail (*)</label>
                <MyInput type="text" className="form-control" id="input-email"
                    placeholder="E-Mail Address" name="email"
                    validations="isEmail" validationError="This is not a valid email" required />
              </div>

              <div className="form-group">
                <label htmlFor="input-password" className="control-label">Password (*)</label>
                <MyInput type="password" className="form-control" id="input-password"
                  placeholder="Password" name="password" required />
                  <a href="/account/forgetpassword">Forgotten Password</a>
              </div>

              <button type="submit" className="btn btn-primary" disabled={!this.state.canSubmit}>Login</button>
            </Form>
          }

          {this.state.showUser  &&
            <h3>You have logged in as {this.props.account.email}. <br/> Your information such as addresses will be filled in automatically</h3>
          }
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

export default connect(mapStateToProps, mapDispatchToProps)( LoginComponent );
