import React from 'react';

import { Form } from 'formsy-react';
import MyInput from '../common/formsy/Input';

class ForgotPassword extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      canSubmit: false,
      formSubmitted:false
    }

    this.forgotPassword = this.forgotPassword.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }
  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  forgotPassword(data) {
    this.setSate({
      formSubmitted:true
    })
  }

    render() {
      return (
          <div className="row">
              <h1>Forgot Your Password?</h1>
              <p>Enter the e-mail address associated with your account. Click submit to have your password e-mailed to you</p>

              {!this.state.formSubmitted &&
              <Form onSubmit={this.forgotPassword} method="post" onValid={this.enableButton} onInvalid={this.disableButton}>
                <fieldset>
                  <legend>Your E-Mail Address</legend>
                  <div className="form-group required">
                    <label className="col-sm-2 control-label" for="input-email">E-Mail Address</label>
                    <div className="col-sm-10">
                      <MyInput type="text" className="form-control" id="input-email" placeholder="E-Mail Address" name="email" onChange={this.updateLoginData}
                          validations="isEmail" validationError="This is not a valid email" required />
                    </div>
                  </div>
                </fieldset>
                <div className="buttons clearfix">
                  <div className="pull-left"><a href="login" className="btn btn-default">Back</a></div>
                  <div className="pull-right">
                    <button type="submit" className="btn btn-primary" disabled={!this.state.canSubmit}>Submit</button>
                  </div>
                </div>
              </Form>
              }
              {this.state.formSubmitted &&
                <div> Please check your email to reset the password </div>
              }
          </div>
      );
    }
}

export default ForgotPassword;
