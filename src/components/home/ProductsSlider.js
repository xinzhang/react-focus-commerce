import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';

import ProductCard from '../products/ProductCard';
import OwlCarousel from 'react-owl-carousel';

class ProductsSlider extends React.Component {
  constructor(props, context) {
    super(props, context);

    if (props.sliderType === "special") {
      this.props.actions.loadSpecialProducts();

    } else if (props.sliderType === "latest") {
      this.props.actions.loadLatestProducts();

    } else if (props.sliderType === "bestseller") {
      this.props.actions.loadBestSellerProducts();
    }

  }

    render() {
      return (
        <div className="box">
            <div className="row product-slider">
            <OwlCarousel id={this.props.sliderType + "-slidertab"} className="owl-carousel" navigation={true} pagination={false} items={4}>
              {this.props.products.map(p =>
                  <ProductCard product={p} key={p.id} showdesc="false" />
              )}
            </OwlCarousel>
            </div>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
  let currentProducts = [];

  if (ownProps.sliderType === "special") {
    currentProducts = state.specialProducts;
  } else if (ownProps.sliderType === "latest") {
    currentProducts = state.latestProducts;
  } else if (ownProps.sliderType === "bestseller") {
    currentProducts = state.bestSellerProducts;
  }

  return {
    products: currentProducts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSlider);
