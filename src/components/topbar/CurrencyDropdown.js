import React from 'react';

class CurrencyDropdown extends React.Component{
  render() {
    return (
      <div className="currency">
          <form action="#" method="post" enctype="multipart/form-data" id="currency">
              <div className="btn-group">
                  <button className="btn btn-link dropdown-toggle" data-toggle="dropdown"> <strong>$</strong> <i className="fa fa-caret-down"></i> </button>
                  <ul className="dropdown-menu">
                      <li>
                        <button className="currency-select btn btn-link btn-block" type="button" name="AUD">$ AUD</button>
                      </li>
                      <li>
                          <button className="currency-select btn btn-link btn-block" type="button" name="USD">$ US Dollar</button>
                      </li>
                      <li>
                          <button className="currency-select btn btn-link btn-block" type="button" name="CNY">$ Chinese Yuan</button>
                      </li>
                  </ul>
              </div>
          </form>
      </div>
    )
  }
}

export default CurrencyDropdown;
