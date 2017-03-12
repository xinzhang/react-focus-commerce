import React from 'react';
import CountryList from '../common/CountryList';

class PaymentAddress extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        address: {
        }
      }
      this.updateData = this.updateData.bind(this);
    }

    updateData(event) {
        console.log('updateData address_2');
        const field = event.target.name;
        const addr = this.state.address;
        addr[field] = event.target.value;

        this.props.updated(addr);
    }

    render() {
      return (
        <div id="payment-new" >
          <div className="form-group required">
            <label htmlFor="input-shipping-firstname" className="col-sm-2 control-label">First Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="input-shipping-firstname" placeholder="First Name" defaultValue="" name="firstname" onChange={this.updateData} />
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="input-shipping-lastname" className="col-sm-2 control-label">Last Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="input-shipping-lastname" placeholder="Last Name" defaultValue="" name="lastname" onChange={this.updateData} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="input-shipping-company" className="col-sm-2 control-label">Company</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="input-shipping-company" placeholder="Company" defaultValue="" name="company" onChange={this.updateData} />
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="input-shipping-address-1" className="col-sm-2 control-label">Address 1</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="input-shipping-address-1" placeholder="Address 1" defaultValue="" name="address_1" onChange={this.updateData} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="input-shipping-address-2" className="col-sm-2 control-label">Address 2</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="input-shipping-address-2" placeholder="Address 2" defaultValue="" name="address_2" onChange={this.updateData} />
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="input-shipping-suburb" className="col-sm-2 control-label">Suburb</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="input-shipping-suburb" placeholder="Suburb" defaultValue="" name="Suburb" onChange={this.updateData} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="input-shipping-postcode" className="col-sm-2 control-label">Post Code</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="input-shipping-postcode" placeholder="Post Code" defaultValue="" name="postcode" onChange={this.updateData} />
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="input-shipping-country" className="col-sm-2 control-label">Country</label>
            <div className="col-sm-10">
              <CountryList />
            </div>
          </div>
        </div>
      );
    }
}

export default PaymentAddress;
