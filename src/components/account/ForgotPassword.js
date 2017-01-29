import React from 'react';

class ForgotPassword extends React.Component {
    render() {
      return (
          <div className="row">
              <h1>Forgot Your Password?</h1>
              <p>Enter the e-mail address associated with your account. Click submit to have your password e-mailed to you</p>
              <form action="forgotten" method="post" encType="multipart/form-data" className="form-horizontal">
                <fieldset>
                  <legend>Your E-Mail Address</legend>
                  <div className="form-group required">
                    <label className="col-sm-2 control-label" for="input-email">E-Mail Address</label>
                    <div className="col-sm-10">
                      <input type="text" name="email" value="" placeholder="E-Mail Address" id="input-email" className="form-control" />
                    </div>
                  </div>
                </fieldset>
                <div className="buttons clearfix">
                  <div className="pull-left"><a href="login" className="btn btn-default">Back</a></div>
                  <div className="pull-right">
                    <input type="submit" value="Continue" className="btn btn-primary" />
                  </div>
                </div>
              </form>
            </div>
      );
    }
}

export default ForgotPassword;
