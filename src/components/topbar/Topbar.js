import React from 'react';
import {connect} from 'react-redux';

import CurrencyDropdown from './CurrencyDropdown';
import LanguageDropdown from './LanguageDropdown';

class Topbar extends React.Component {
  render() {
    return (
      <div className="header-top">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12">
                      <div className="top-left pull-left">
                          <LanguageDropdown />
                          <CurrencyDropdown />
                      </div>
                      <div className="top-right pull-right">
                          <div id="top-links" className="nav pull-right">
                              <ul className="list-inline">
                                  {this.props.account.status === '' &&
                                  <li className="dropdown"><a href="#" title="My Account" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> <span>My Account</span> <span className="caret"></span></a>
                                      <ul className="dropdown-menu dropdown-menu-right">
                                          <li><a href="/account/register">Register</a></li>
                                          <li><a href="/account/login">Login</a></li>
                                      </ul>
                                  </li>
                                  }
                                  {this.props.account.status === 'authenticated' &&
                                    <li className="dropdown"><a href="#" title="My Account" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> <span>Welcome {this.props.account.firstname}</span></a>
                                    </li>
                                  }
                                  <li><a href="#" id="wishlist-total" title="Wish List (0)"><i className="fa fa-heart"></i> <span>Wish List</span><span> (0)</span></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return {
    account: state.account
  }
}
export default connect(mapStateToProps)( Topbar );
