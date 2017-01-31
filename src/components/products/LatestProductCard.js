import React from 'react';

class SpecialProductCard extends React.Component {
    render() {
      return (
        <div>
        <h3 className="productblock-title">Latest</h3>
        <div className="row latest-grid product-grid">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 product-grid-item">
                <div className="product-thumb transition">
                    <div className="image product-imageblock"><a href="product.html"><img src="/image/product/1product50x59.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /></a>
                        <div className="button-group">
                            <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                            <button type="button" className="addtocart-btn">Add to Cart</button>
                            <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                        </div>
                    </div>
                    <div className="caption product-detail">
                        <h4 className="product-name"><a href="#" title="iPod Classic">iPod Classic</a></h4>
                        <p className="price product-price">$122.00<span className="price-tax">Ex Tax: $100.00</span></p>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                    </div>
                    <div className="button-group">
                        <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                        <button type="button" className="addtocart-btn" >Add to Cart</button>
                        <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 product-grid-item">
                <div className="product-thumb transition">
                    <div className="image product-imageblock"><a href="#"><img src="/image/product/2product50x59.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /></a>
                        <div className="button-group">
                            <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                            <button type="button" className="addtocart-btn">Add to Cart</button>
                            <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>
                        </div>
                    </div>
                    <div className="caption product-detail">
                        <h4 className="product-name"><a href="#" title="iPod Classic">iPod Classic</a></h4>
                        <p className="price product-price">$122.00<span className="price-tax">Ex Tax: $100.00</span></p>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                    </div>
                    <div className="button-group">
                        <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                        <button type="button" className="addtocart-btn" >Add to Cart</button>
                        <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 product-grid-item">
                <div className="product-thumb transition">
                    <div className="image product-imageblock"><a href="#"><img src="/image/product/3product50x59.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /></a>
                        <div className="button-group">
                            <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                            <button type="button" className="addtocart-btn">Add to Cart</button>
                            <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                        </div>
                    </div>
                    <div className="caption product-detail">
                        <h4 className="product-name"><a href="#" title="iPod Classic">iPod Classic</a></h4>
                        <p className="price product-price">$122.00<span className="price-tax">Ex Tax: $100.00</span></p>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                    </div>
                    <div className="button-group">
                        <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                        <button type="button" className="addtocart-btn">Add to Cart</button>
                        <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
      );
    }
}

export default SpecialProductCard;
