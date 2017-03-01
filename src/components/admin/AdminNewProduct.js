import React, {PropTypes} from 'react';

import MyInput from '../common/formsy/Input';
import Formsy from 'formsy-react';

class AdminNewProduct extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      product: {},
      canSubmit: false
    }

    this.submit = this.submit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.updateProductState = this.updateProductState.bind(this);
  }

  submit(data) {
    let o = Object.assign({}, this.state.product, data);
    console.log('admin new product call submit()');
    console.log(o);
    this.props.submit(o);
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  updateProductState(event) {
      const field = event.target.name;
      const prod = this.state.product;
      prod[field] = event.target.value;
      return this.setState({product: prod});
  }

  render() {
      return (
        <div className="row">
          <h1>Add new product</h1>
          <Formsy.Form className="form-horizontal" onSubmit={this.submit} encType="multipart/form-data" method="post" onValid={this.enableButton} onInvalid={this.disableButton}>
            <div className="form-group required">
                <label htmlFor="input-prodductname" className="col-sm-2 control-label">Name</label>
                <div className="col-sm-10">
                    <MyInput type="text" className="form-control" id="input-prodductname" placeholder="Product Name"  name="name" onChange={this.updateProductState} required />
                </div>
            </div>
            <div className="form-group required">
                <label htmlFor="input-prodductprice" className="col-sm-2 control-label">Price</label>
                <div className="col-sm-10">
                    <MyInput type="text" className="form-control" id="input-prodductprice" placeholder="Product Price"  name="price" onChange={this.updateProductState} required />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="input-description" className="col-sm-2 control-label">Description</label>
                <div className="col-sm-10">
                    <input type="textarea" rows="5" className="form-control" id="input-description" placeholder="Product Description"  name="description" onChange={this.updateProductState}  />
                </div>
            </div>
            <div className="buttons">
                <div className="pull-right">
                    <button type="submit" className="btn btn-primary" disabled={!this.state.canSubmit}>Continue</button>
                </div>
            </div>
          </Formsy.Form>
        </div>
      )
  }

}

export default AdminNewProduct;
