import React from 'react';

class SpecialProductCard extends React.Component {
    render() {
      return (
        <div>
        <h3 className="productblock-title">Specials</h3>
        <div className="row special-grid product-grid">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 product-grid-item">
                <div className="product-thumb transition">
                    <div className="image product-imageblock"> <a href="#"><img src="/image/product/4product50x59.jpg" alt="iPhone" title="iPhone" className="img-responsive" /></a>
                        <div className="button-group">
                            <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                            <button type="button" className="addtocart-btn" >Add to Cart</button>
                            <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                        </div>
                    </div>
                    <div className="caption product-detail">
                        <h4 className="product-name"> <a href="product.html" title="iPhone">iPhone</a> </h4>
                        <p className="price product-price"> <span className="price-new">$254.00</span> <span className="price-old">$272.00</span> <span className="price-tax">Ex Tax: $210.00</span> </p>
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
                    <div className="image product-imageblock"> <a href="#"><img src="/image/product/5product50x59.jpg" alt="iPhone" title="iPhone" className="img-responsive" /></a>
                        <div className="button-group">
                            <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                            <button type="button" className="addtocart-btn" >Add to Cart</button>
                            <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                        </div>
                    </div>
                    <div className="caption product-detail">
                        <h4 className="product-name"> <a href="product.html" title="iPhone">iPhone</a> </h4>
                        <p className="price product-price"> <span className="price-new">$254.00</span> <span className="price-old">$272.00</span> <span className="price-tax">Ex Tax: $210.00</span> </p>
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
                    <div className="image product-imageblock"> <a href="#"><img src="/image/product/6product50x59.jpg" alt="iPhone" title="iPhone" className="img-responsive" /></a>
                        <div className="button-group">
                            <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                            <button type="button" className="addtocart-btn" >Add to Cart</button>
                            <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                        </div>
                    </div>
                    <div className="caption product-detail">
                        <h4 className="product-name"> <a href="product.html" title="iPhone">iPhone</a> </h4>
                        <p className="price product-price"> <span className="price-new">$254.00</span> <span className="price-old">$272.00</span> <span className="price-tax">Ex Tax: $210.00</span> </p>
                    </div>
                    <div className="button-group">
                        <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                        <button type="button" className="addtocart-btn" >Add to Cart</button>
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
