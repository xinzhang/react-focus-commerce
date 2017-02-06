import React from 'react';

class CountryList extends React.Component {
  render() {
    return (
      <select className="form-control" id="input-payment-country" name="country_id">
        <option value=""> --- Please Select --- </option>
        <option value="1">Australia</option>
        <option value="2">China</option>
        <option value="3">America</option>
        <option value="4">United Kingdom</option>        
      </select>
    );
  }
}

export default CountryList;
