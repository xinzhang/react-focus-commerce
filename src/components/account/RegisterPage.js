import React from 'react';

class RegisterPage extends React.Component {
    render() {
      let hiddenStyle = {
        display:"none"
      };

      return (
        <div className="row">
            <h1>Register Account</h1>
            <p>If you already have an account with us, please login at the <a href="login">login page</a>.</p>
            <form className="form-horizontal" encType="multipart/form-data" method="post" action="register.html">
                <fieldset id="account">
                    <legend>Your Personal Details</legend>
                    <div style={hiddenStyle} className="form-group required">
                        <label className="col-sm-2 control-label">Customer Group</label>
                        <div className="col-sm-10">
                            <div className="radio">
                                <label>
                                    <input type="radio" checked="checked" value="1" name="customer_group_id" />
                                    Default</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-firstname" className="col-sm-2 control-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-firstname" placeholder="First Name" value="" name="firstname" />
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-lastname" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-lastname" placeholder="Last Name" value="" name="lastname" />
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-email" className="col-sm-2 control-label">E-Mail</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="input-email" placeholder="E-Mail" value="" name="email" />
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-telephone" className="col-sm-2 control-label">Telephone</label>
                        <div className="col-sm-10">
                            <input type="tel" className="form-control" id="input-telephone" placeholder="Telephone" value="" name="telephone" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-fax" className="col-sm-2 control-label">Fax</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-fax" placeholder="Fax" value="" name="fax" />
                        </div>
                    </div>
                </fieldset>

                <fieldset id="address">
                    <legend>Your Address</legend>
                    <div className="form-group">
                        <label htmlFor="input-company" className="col-sm-2 control-label">Company</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-company" placeholder="Company" value="" name="company" />
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-address-1" className="col-sm-2 control-label">Address 1</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-address-1" placeholder="Address 1" value="" name="address_1" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-address-2" className="col-sm-2 control-label">Address 2</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-address-2" placeholder="Address 2" value="" name="address_2" />
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-city" className="col-sm-2 control-label">City</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-city" placeholder="City" value="" name="city" />
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-postcode" className="col-sm-2 control-label">Post Code</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-postcode" placeholder="Post Code" value="" name="postcode" />
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-country" className="col-sm-2 control-label">Country</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="input-country" name="country_id">
                                <option value=""> --- Please Select --- </option>
                                <option value="13">Australia</option>
                                <option value="30">Brazil</option>
                                <option value="38">Canada</option>
                                <option value="44">China</option>
                                <option value="96">Hong Kong</option>
                                <option value="129">Malaysia</option>
                                <option value="150">Netherlands</option>
                                <option value="193">South Africa</option>
                                <option selected="selected" value="222">United Kingdom</option>
                                <option value="223">United States</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-zone" className="col-sm-2 control-label">Region / State</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="input-zone" name="zone_id">
                                <option value=""> --- Please Select --- </option>
                                <option value="3513">Aberdeen</option>
                                <option value="3514">Aberdeenshire</option>
                                <option value="3515">Anglesey</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Your Password</legend>
                    <div className="form-group required">
                        <label htmlFor="input-password" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="input-password" placeholder="Password" value="" name="password" />
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-confirm" className="col-sm-2 control-label">Password Confirm</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="input-confirm" placeholder="Password Confirm" value="" name="confirm" />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Newsletter</legend>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Subscribe</label>
                        <div className="col-sm-10">
                            <label className="radio-inline">
                                <input type="radio" value="1" name="newsletter" />
                                Yes</label>
                            <label className="radio-inline">
                                <input type="radio" checked="checked" value="0" name="newsletter" />
                                No</label>
                        </div>
                    </div>
                </fieldset>
                <div className="buttons">
                    <div className="pull-right">I have read and agree to the <a className="agree" href="#"><b>Privacy Policy</b></a>
                        <input type="checkbox" value="1" name="agree" />
                        &nbsp;
                        <input type="submit" className="btn btn-primary" value="Continue" />
                    </div>
                </div>
            </form>
        </div>
      );
    }
}

export default RegisterPage;
