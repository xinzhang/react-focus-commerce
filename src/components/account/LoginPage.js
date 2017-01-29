import React from 'react';

class LoginPage extends React.Component {
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
                  <label for="input-email" className="control-label">E-Mail Address</label>
                  <input type="text" className="form-control" id="input-email" placeholder="E-Mail Address" value="" name="email" />
                </div>
                <div className="form-group">
                  <label for="input-password" className="control-label">Password</label>
                  <input type="password" className="form-control" id="input-password" placeholder="Password" value="" name="password" />
                  <a href="/account/forgetpassword">Forgotten Password</a>
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
              </form>
            </div>
          </div>

        </div>
      );
    }
}

export default LoginPage;
