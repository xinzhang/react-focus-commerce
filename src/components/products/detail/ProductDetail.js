import React, {PropTypes} from 'react';

import ProductPictures from './ProductPictures';
import ProductDetailCard from './ProductDetailCard';
import ProductDescription from './ProductDescription';
import ProductAddReview from './ProductAddReview';
import ProductRelated from './ProductRelated';

class ProductDetail extends React.Component {
    render() {
      return (
        <div>
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
          <ProductRelated product={this.props.product} />
        </div>
      );
    }
}

export default ProductDetail;
