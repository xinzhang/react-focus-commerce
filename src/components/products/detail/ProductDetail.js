import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

import ProductPictures from './ProductPictures';
import ProductDetailCard from './ProductDetailCard';
import ProductDescription from './ProductDescription';
import ProductAddReview from './ProductAddReview';
import ProductRelated from './ProductRelated';

import $ from 'jquery';

class ProductDetail extends React.Component {
    componentDidMount() {
      // var n = ReactDOM.findDOMNode(this.refs.tooltip);
      // console.log(n);
      // $(n).tooltip();
      // $(ReactDOM.findDOMNode(this.refs.tooltip)).tooltip();
      //$(this.refs.test).tooltip();
    }
    componentWillUpdate(nextProps, nextState){
    }

    render() {
      return (
        <div>
          <div className="row">
            This is my React component. <a ref="tooltip" title="Checkout my tooltip text.">Tooltips</a> are pretty helpful.
          </div>
          <div className="row">
              <div className="col-sm-6">
                  <ProductPictures product={this.props.product} />
              </div>
              <div className="col-sm-6">
                  <ProductDetailCard product={this.props.product} />
              </div>
          </div>
          <div className="productinfo-tab">
              <ul className="nav nav-tabs">
                  <li className="active"><a href="#tab-description" data-toggle="tab">Description</a></li>
                  <li><a href="#tab-review" data-toggle="tab">Reviews (1)</a></li>
              </ul>
              <div className="tab-content">
                  <ProductDescription product={this.props.product} />
                  <ProductAddReview product={this.props.product} />
              </div>
          </div>
          <h3 className="productblock-title">Related Products</h3>
          <ProductRelated products={this.props.relatedProducts} />
        </div>
      );
    }
}

export default ProductDetail;
