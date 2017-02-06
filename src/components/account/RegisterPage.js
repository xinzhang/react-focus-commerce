import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';

class RegisterPage extends React.Component {

    constructor(props, context) {
      super(props, context);

      this.state = {
        account: Object.assign({}, this.props.account)
      }

      this.registerAccount = this.registerAccount.bind(this);
      this.updateAccountState = this.updateAccountState.bind(this);
      this.updateAccountAddress = this.updateAccountAddress.bind(this);
    }

    registerAccount(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.registerAccount(this.state.account);
    }

    //update each field - you have to do it yourself there is no auto binding.
    updateAccountState(event) {
        const field = event.target.name;
        const acct = this.state.account;
        acct[field] = event.target.value;
        console.log(acct);
        return this.setState({account: acct});
    }

    updateAccountAddress(event) {
        const field = event.target.name;
        const acct = this.state.account;
        acct.address[field] = event.target.value;
        console.log(acct);
        return this.setState({account: acct});
    }

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
                            <input type="text" className="form-control" id="input-firstname" placeholder="First Name"  name="firstname" onChange={this.updateAccountState} />
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-lastname" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-lastname" placeholder="Last Name" name="lastname" onChange={this.updateAccountState} />
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-email" className="col-sm-2 control-label">E-Mail</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="input-email" placeholder="E-Mail" name="email" onChange={this.updateAccountState} />
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-telephone" className="col-sm-2 control-label">Telephone</label>
                        <div className="col-sm-10">
                            <input type="tel" className="form-control" id="input-telephone" placeholder="Telephone" name="telephone" onChange={this.updateAccountState} />
                        </div>
                    </div>
                </fieldset>

                <fieldset id="address">
                    <legend>Your Address</legend>
                    <div className="form-group required">
                        <label htmlFor="input-address-1" className="col-sm-2 control-label">Address 1</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-address-1" placeholder="Address 1" name="address1" onChange={this.updateAccountAddress}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-address-2" className="col-sm-2 control-label">Address 2</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-address-2" placeholder="Address 2" name="address2" onChange={this.updateAccountAddress}/>
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-city" className="col-sm-2 control-label">Suburb</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-city" placeholder="Suburb" name="suburb" onChange={this.updateAccountAddress}/>
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-postcode" className="col-sm-2 control-label">Post Code</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input-postcode" placeholder="Post Code" name="postcode" onChange={this.updateAccountAddress}/>
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-country" className="col-sm-2 control-label">Country</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="input-country" name="country" onChange={this.updateAccountAddress}>
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
                        <label htmlFor="input-zone" className="col-sm-2 control-label">State</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="input-zone" name="state">
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
                            <input type="password" className="form-control" id="input-password" placeholder="Password" name="password" onChange={this.updateAccountState} />
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-confirm" className="col-sm-2 control-label">Password Confirm</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="input-confirm" placeholder="Password Confirm" name="confirm_password" onChange={this.updateAccountState} />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Newsletter</legend>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Subscribe</label>
                        <div className="col-sm-10">
                            <label className="radio-inline">
                                <input type="radio" checked={this.state.account.newsletter==1} value="1" name="newsletter" onChange={this.updateAccountState} />
                                Yes</label>
                            <label className="radio-inline">
                                <input type="radio" checked={this.state.account.newsletter==0} value="0" name="newsletter" onChange={this.updateAccountState} />
                                No</label>
                        </div>
                    </div>
                </fieldset>
                <div className="buttons">
                    <div className="pull-right">I have read and agree to the <a className="agree" href="#"><b>Privacy Policy</b></a>
                        <input type="checkbox" value="1" name="agree" />
                        &nbsp;
                        <input type="submit" className="btn btn-primary" value="Continue" onClick={this.registerAccount}/>
                    </div>
                </div>
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)( RegisterPage );
