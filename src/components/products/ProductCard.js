import React from 'react';
import {Link} from 'react-router';
import AddCartButton from '../common/AddCartButton';

class ProductCard extends React.Component {
    render() {
      return (
        <div className="product-thumb transition">
          <div className="image product-imageblock">
            <Link to={'/products/detail/'+ this.props.product.id}>
              <img src={this.props.product.pic_url} alt={this.props.product.name} title={this.props.product.name} className="img-responsive" />
            </Link>
            <div className="button-group">
              <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
              <AddCartButton product={this.props.product} key={this.props.product.id} />
            </div>
          </div>
          <div className="caption product-detail">
            <h4 className="product-name">
              <Link to={'/products/detail/'+ this.props.product.id} title={this.props.product.name}>
                {this.props.product.name}
              </Link>
            </h4>
            { this.props.showdesc=="true" &&
              <p className="product-desc">{this.props.product.desc}</p>
            }
            <p className="price product-price">
              <span className="price-old">{'$' + this.props.product.price}</span>
              <span className="price-tax">Ex Tax: {'$' + (this.props.product.price - this.props.product.tax)}</span>
            </p>
            <div className="rating">
              <span className="fa fa-stack">
                <i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i>
              </span>
            </div>
          </div>
          <div className="button-group">
            <button type="button" className="wishlist" data-toggle="tooltip" title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
            <AddCartButton product={this.props.product} />
            {/*<button type="button" className="compare" data-toggle="tooltip" title="Compare this Product"><i className="fa fa-exchange"></i></button>*/}
          </div>
        </div>
      );
    }
}

export default ProductCard;
