import React, {PropTypes} from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import MyInput from '../common/formsy/Input';
import Formsy from 'formsy-react';

const CLOUDINARY_UPLOAD_PRESET_50x59 = 'product-qzzxnvvi-50x59';
const CLOUDINARY_UPLOAD_PRESET_220x294 = 'product-aponwybu-220x294';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/xz-cloudinary/upload';

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
    this.handleProductMainImageUpload = this.handleProductMainImageUpload.bind(this);
    this.uploadPic = this.uploadPic.bind(this);
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

  uploadPic(f, preset, property){
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', preset)
                     .field('file', f);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        let tempObj ={};
        tempObj[property] = response.body.secure_url;
        console.log(tempObj);
        let o = Object.assign({}, this.state.product, tempObj);
        this.setState({
          product:o
        });
      }
    });
  }

  handleProductMainImageUpload(files) {
    var f = files[0];
    this.uploadPic(f, CLOUDINARY_UPLOAD_PRESET_50x59, "pic_small_url");
    this.uploadPic(f, CLOUDINARY_UPLOAD_PRESET_220x294, "slider_pic_small_url");
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
            <div className="form-group">
              <label htmlFor="input-description" className="col-sm-2 control-label">Main Picture</label>
              <div className="col-sm-10">
                  <Dropzone
                      onDrop={this.handleProductMainImageUpload} style={{height:"25px"}} multiple={false} accept="image/*">
                      <div>Drop an image or click to select a file to upload.</div>
                  </Dropzone>
                  {this.state.product.pic_small_url === '' ? null :
                  <div>
                    <p>{this.state.product.pic_small_url}</p>
                    <img src={this.state.product.pic_small_url} />
                  </div>}
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
