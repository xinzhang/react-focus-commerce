import React from 'react';

import ListFilter from './ListFilter';
import ListPager from './ListPager';

class ProductList extends React.Component {
    render() {
      return (
        <div className="row">
        <ListFilter />
        <br />
        <div className="grid-list-wrapper">
          <div className="product-layout product-list col-xs-12">
            <div className="product-thumb">
              <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/pro-1-220x294.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                <div className="button-group">
                  <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                  <button type="button" className="addtocart-btn">Add to Cart</button>
                  <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
                </div>
              </div>
              <div className="caption product-detail">
                <h4 className="product-name"> <a href="product.html" title="iPod Classic"> iPod Classic </a> </h4>
                <p className="product-desc"> More room to move.

                  With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                  Cover Flow.

                  Browse through your music collection by flipping..</p>
                <p className="price product-price"><span className="price-old">$272.00</span> $122.00 <span className="price-tax">Ex Tax: $100.00</span> </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
              <div className="button-group">
                <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                <button type="button" className="addtocart-btn">Add to Cart</button>
                <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
              </div>
            </div>
          </div>
          <div className="product-layout product-list col-xs-12">
            <div className="product-thumb">
              <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/pro-2-220x294.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                <div className="button-group">
                  <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                  <button type="button" className="addtocart-btn">Add to Cart</button>
                  <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
                </div>
              </div>
              <div className="caption product-detail">
                <h4 className="product-name"> <a href="product.html" title="iPod Classic"> iPod Classic </a> </h4>
                <p className="product-desc"> More room to move.

                  With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                  Cover Flow.

                  Browse through your music collection by flipping..</p>
                <p className="price product-price"> $122.00 <span className="price-tax">Ex Tax: $100.00</span> </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
              <div className="button-group">
                <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                <button type="button" className="addtocart-btn">Add to Cart</button>
                <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
              </div>
            </div>
          </div>
          <div className="product-layout product-list col-xs-12">
            <div className="product-thumb">
              <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/pro-3-220x294.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                <div className="button-group">
                  <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                  <button type="button" className="addtocart-btn">Add to Cart</button>
                  <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
                </div>
              </div>
              <div className="caption product-detail">
                <h4 className="product-name"> <a href="product.html" title="iPod Classic"> iPod Classic </a> </h4>
                <p className="product-desc"> More room to move.

                  With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                  Cover Flow.

                  Browse through your music collection by flipping..</p>
                <p className="price product-price"> $122.00 <span className="price-tax">Ex Tax: $100.00</span> </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
              <div className="button-group">
                <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                <button type="button" className="addtocart-btn">Add to Cart</button>
                <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
              </div>
            </div>
          </div>
          <div className="product-layout product-list col-xs-12">
            <div className="product-thumb">
              <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/pro-4-220x294.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                <div className="button-group">
                  <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                  <button type="button" className="addtocart-btn">Add to Cart</button>
                  <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
                </div>
              </div>
              <div className="caption product-detail">
                <h4 className="product-name"> <a href="product.html" title="iPod Classic"> iPod Classic </a> </h4>
                <p className="product-desc"> More room to move.

                  With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                  Cover Flow.

                  Browse through your music collection by flipping..</p>
                <p className="price product-price"> $122.00 <span className="price-tax">Ex Tax: $100.00</span> </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
              <div className="button-group">
                <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                <button type="button" className="addtocart-btn">Add to Cart</button>
                <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
              </div>
            </div>
          </div>
          <div className="product-layout product-list col-xs-12">
            <div className="product-thumb">
              <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/pro-5-220x294.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                <div className="button-group">
                  <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                  <button type="button" className="addtocart-btn">Add to Cart</button>
                  <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
                </div>
              </div>
              <div className="caption product-detail">
                <h4 className="product-name"> <a href="product.html" title="iPod Classic"> iPod Classic </a> </h4>
                <p className="product-desc"> More room to move.

                  With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                  Cover Flow.

                  Browse through your music collection by flipping..</p>
                <p className="price product-price"> $122.00 <span className="price-tax">Ex Tax: $100.00</span> </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
              <div className="button-group">
                <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                <button type="button" className="addtocart-btn">Add to Cart</button>
                <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
              </div>
            </div>
          </div>
          <div className="product-layout product-list col-xs-12">
            <div className="product-thumb">
              <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/pro-6-220x294.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                <div className="button-group">
                  <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                  <button type="button" className="addtocart-btn">Add to Cart</button>
                  <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
                </div>
              </div>
              <div className="caption product-detail">
                <h4 className="product-name"> <a href="product.html" title="iPod Classic"> iPod Classic </a> </h4>
                <p className="product-desc"> More room to move.

                  With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                  Cover Flow.

                  Browse through your music collection by flipping..</p>
                <p className="price product-price"> $122.00 <span className="price-tax">Ex Tax: $100.00</span> </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
              <div className="button-group">
                <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                <button type="button" className="addtocart-btn">Add to Cart</button>
                <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
              </div>
            </div>
          </div>
          <div className="product-layout product-list col-xs-12">
            <div className="product-thumb">
              <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/pro-7-220x294.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                <div className="button-group">
                  <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                  <button type="button" className="addtocart-btn">Add to Cart</button>
                  <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
                </div>
              </div>
              <div className="caption product-detail">
                <h4 className="product-name"> <a href="product.html" title="iPod Classic"> iPod Classic </a> </h4>
                <p className="product-desc"> More room to move.

                  With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                  Cover Flow.

                  Browse through your music collection by flipping..</p>
                <p className="price product-price"> $122.00 <span className="price-tax">Ex Tax: $100.00</span> </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
              <div className="button-group">
                <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                <button type="button" className="addtocart-btn">Add to Cart</button>
                <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
              </div>
            </div>
          </div>
          <div className="product-layout product-list col-xs-12">
            <div className="product-thumb">
              <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/pro-8-220x294.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                <div className="button-group">
                  <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                  <button type="button" className="addtocart-btn">Add to Cart</button>
                  <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
                </div>
              </div>
              <div className="caption product-detail">
                <h4 className="product-name"> <a href="product.html" title="iPod Classic"> iPod Classic </a> </h4>
                <p className="product-desc"> More room to move.

                  With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                  Cover Flow.

                  Browse through your music collection by flipping..</p>
                <p className="price product-price"> $122.00 <span className="price-tax">Ex Tax: $100.00</span> </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
              <div className="button-group">
                <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                <button type="button" className="addtocart-btn">Add to Cart</button>
                <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
              </div>
            </div>
          </div>
        </div>
        <ListPager />
        </div>
      );
    }
}

export default ProductList;
