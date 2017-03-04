import React, {PropTypes} from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import MyInput from '../common/formsy/Input';
import Formsy from 'formsy-react';

import cloudinary from 'cloudinary';

const CLOUDINARY_UPLOAD_PRESET_50x59 = 'product-qzzxnvvi-50x59';
const CLOUDINARY_UPLOAD_PRESET_220x294 = 'product-aponwybu-220x294';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/xz-cloudinary/upload';

class AdminNewProduct extends React.Component {
  constructor(props, context) {
    super(props, context);

    cloudinary.config({
      cloud_name: 'xz-cloudinary',
      api_key: '112649942834417',
      api_secret: 'N2J8CoBfPlCrK4xfha85bvc-GFI'
    });

    this.state = {
      product: {
        pic_small_url:'',
        slider_pic_small_url:[],
        slider_pic_small_ids:[],
        slider_pic_large_url:[],
        slider_pic_large_ids:[]
      },
      canSubmit: false
    }

    this.submit = this.submit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.updateProductState = this.updateProductState.bind(this);
    this.handleProductMainImageUpload = this.handleProductMainImageUpload.bind(this);
    this.handleProductSliderImageUpload = this.handleProductSliderImageUpload.bind(this);
    this.uploadPic = this.uploadPic.bind(this);
    this.uploadSliderPic = this.uploadSliderPic.bind(this);
    this.removeProdPic = this.removeProdPic.bind(this);
    //this.removeSliderPic = this.removeSliderPic.bind(this);
  }

  

  submit(data) {
    data.slider_pic_count = this.state.product.slider_pic_small_ids.length;
    data.rating = 0;
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

  uploadPic(f, preset, property, idProperty){
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
        tempObj[idProperty] = response.body.public_id;

        let o = Object.assign({}, this.state.product, tempObj);
        this.setState({
          product:o
        });
      }
    });
  }

  uploadSliderPic(f, preset, property, idsProperty){
    console.log(f);
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', preset)
                     .field('file', f);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.url !== '') {
        let tempObj ={};
        this.state.product[property].push(response.body.url);
        this.state.product[idsProperty].push(response.body.public_id)
        let o = Object.assign({}, this.state.product, tempObj);
        this.setState({
          product:o
        }, ()=> console.log(this.state.product));
      }
    });
  }

  handleProductMainImageUpload(files) {
    var f = files[0];
    this.uploadPic(f, CLOUDINARY_UPLOAD_PRESET_50x59, "pic_small_url", "pic_small_id");
    this.uploadPic(f, CLOUDINARY_UPLOAD_PRESET_220x294, "pic_url", "pic_id");
  }

  handleProductSliderImageUpload(files) {
    var length = files.length;

    files.forEach( (f,idx) => {
      this.uploadSliderPic(f, CLOUDINARY_UPLOAD_PRESET_50x59, "slider_pic_small_url", "slider_pic_small_ids");
      this.uploadSliderPic(f, CLOUDINARY_UPLOAD_PRESET_220x294, "slider_pic_large_url", "slider_pic_large_ids");
    });
  }

  removeSliderPic(idx) {
    console.log("remove pic");

    let prod = this.state.product;
    let ref = this;
    console.log(prod);

    let small_pubid = prod.slider_pic_small_ids[idx];
    let large_pubid = prod.slider_pic_large_ids[idx];

    cloudinary.uploader.destroy(small_pubid, function(result) {
      prod.slider_pic_small_url.splice(idx, 1);
      prod.slider_pic_small_ids.splice(idx, 1);
      console.log(prod);
      ref.setState({
        product: prod
      });
    });
  }

  removeProdPic() {
      let prod = this.state.product;

      cloudinary.uploader.destroy(this.state.product.pic_small_id, function(result) {
        prod.pic_small_url = '';
        prod.pic_small_id = '';
        this.setState({
          product: prod
        });
      });

      cloudinary.uploader.destroy(this.state.product.pic_id, function(result) {
        prod.pic_url = '';
        prod.pic_id = '';
        this.setState({
          product: prod
        });
      });
  }

  renderPicture(product) {
    var result = []
    for (let i=0;i<product.slider_pic_small_url.length;i++) {
      let url = product.slider_pic_small_url[i];
      let id = product.slider_pic_small_ids[i];
      result.push(
        <div className="img-wrap col-sm-1">
          <span className="close" onClick={this.removeSliderPic.bind(this, i)}><i className="fa fa-times"></i></span>
          <img src={url} />
        </div>
      )
    }
    return result;
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
            <div className="form-group required">
                <label htmlFor="input-prodducttax" className="col-sm-2 control-label">Tax</label>
                <div className="col-sm-10">
                    <MyInput type="text" className="form-control" id="input-prodducttax" placeholder="Product Tax"  name="tax" onChange={this.updateProductState} required />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="input-description" className="col-sm-2 control-label">Description</label>
                <div className="col-sm-10">
                    <textarea rows="5" className="form-control" id="input-description" placeholder="Product Description"  name="desc" onChange={this.updateProductState}  />
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
                  <div className="img-wrap col-sm-1">
                    <span className="close" onClick={this.removeProdPic.bind(this)}><i className="fa fa-times"></i></span>
                    <img src={this.state.product.pic_small_url} />
                  </div>
                  }
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="input-description" className="col-sm-2 control-label">Slider Picture</label>
              <div className="col-sm-10">
                  <Dropzone
                      onDrop={this.handleProductSliderImageUpload} style={{height:"60px"}} multiple={true} accept="image/*">
                      <div>Drop an image or click to select a few file to upload.</div>
                  </Dropzone>
                  {this.renderPicture(this.state.product)}
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
