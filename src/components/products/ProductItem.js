import React from 'react';
import {Link} from 'react-router';
import AddCartButton from '../common/AddCartButton';

class ProductItem extends React.Component {
    render() {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 product-grid-item">
            <div className="product-thumb transition">
                <div className="image product-imageblock">
                    <Link to={'/products/detail/'+ this.props.product.id}>
                      <img src={this.props.product.pic_small_url.replace('%d', this.props.product.id)} alt={this.props.product.name} title={this.props.product.name} className="img-responsive" />
                    </Link>
                    <div className="button-group">
                        <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                        <AddCartButton product={this.props.product} key={this.props.product.id}/>
                        <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                    </div>
                </div>
                <div className="caption product-detail">
                    <h4 className="product-name">
                      <Link to={'/products/detail/'+ this.props.product.id}>
                        {this.props.product.name}
                      </Link>
                    </h4>
                    <p className="price product-price">
                      <span className="price-new">${this.props.product.price * 0.8}</span>
                      <span className="price-old">${this.props.product.price}</span>
                      <span className="price-tax">Tax: {this.props.product.tax}</span>
                    </p>
                </div>
                <div className="button-group">
                    <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                    <AddCartButton product={this.props.product} key={this.props.product.id}/>
                    <button type="button" className="compare" data-toggle="tooltip" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                </div>
            </div>
        </div>
      );
    }
}

export default ProductItem;
