import React from 'react';
import CartDropdown from './CartDropdown';

class Header extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="header-inner">
              <div className="col-sm-4 col-xs-6 header-left">
                <div className="shipping">
                    <div className="shipping-img"></div>
                    <div className="shipping-text">Free Shipping
                      <span className="shipping-detail">Free on all products</span>
                    </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6 header-middle">
                  <div className="header-middle-top">
                      <div id="logo"> <a href="/"><img src="/image/logo.png" title="E-Commerce" alt="E-Commerce" className="img-responsive" /></a> </div>
                  </div>
              </div>
              <div className="col-sm-4 col-xs-6 header-right">
                  <CartDropdown />
                  <div id="search" className="input-group">
                      <input type="text" name="search" value="" placeholder="Search" className="form-control input-lg" />
                      <span className="input-group-btn">
                      <button type="button" className="btn btn-default btn-lg"><i className="fa fa-search"></i></button>
                      </span> </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Header;
