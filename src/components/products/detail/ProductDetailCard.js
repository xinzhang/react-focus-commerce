import React from 'react';

class ProductDetailCard extends React.Component {
    render() {
      return (
        <div>
          <h1 className="productpage-title">{this.props.product.name}</h1>
          <div className="rating product">
            <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i>
            </span>
            <span className="fa fa-stack">
              <i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i>
            </span>
            <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i>
            </span>
            <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i></span>
            <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i></span>
            <span className="review-count">
              <a href="#">1 reviews</a> /
              <a href="#">Write a review</a>
            </span>
              <hr />
              <div className="addthis_toolbox addthis_default_style">
                <a className="addthis_button_facebook_like" ></a>
                <a className="addthis_button_tweet"></a>
                <a className="addthis_button_pinterest_pinit"></a>
                <a className="addthis_counter addthis_pill_style"></a>
              </div>
          </div>

          <ul className="list-unstyled productinfo-details-top">
              <li>
                  <h2 className="productpage-price">{'$' + this.props.product.price}</h2>
              </li>
              <li>
                <span className="productinfo-tax">Ex Tax: {'$' + (this.props.product.price - this.props.product.tax)}</span>
              </li>
          </ul>
          <hr />
          <ul className="list-unstyled product_info">
              <li>
                  <label>Brand:</label>
                  <span> <a href="#">Apple</a></span></li>
              <li>
                  <label>Product Code:</label>
                  <span> product 20</span></li>
              <li>
                  <label>Availability:</label>
                  <span> In Stock</span></li>
          </ul>
          <hr />
          <p className="product-desc"> {this.props.product.desc}</p>          
          <div id="product">
              <div className="form-group">
                  <label className="control-label qty-label" htmlFor="input-quantity">Qty</label>
                  <input type="text" name="quantity" value="1" size="2" id="input-quantity" className="form-control productpage-qty" />
                  <input type="hidden" name="product_id" value="48" />
                  <div className="btn-group">
                      <button type="button" data-toggle="tooltip" className="btn btn-default wishlist" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                      <button type="button" id="button-cart" data-loading-text="Loading..." className="btn btn-primary btn-lg btn-block addtocart">Add to Cart</button>
                      <button type="button" data-toggle="tooltip" className="btn btn-default compare" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                  </div>
              </div>
          </div>
        </div>
      );
    }
}

export default ProductDetailCard;
