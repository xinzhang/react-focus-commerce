import React from 'react';
import ProductCard from '../ProductCard';

class ProductRelated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products : Object.assign([], [...this.props.products]),
      tempString: "hello"
    }
  }

    componentWillReceiveProps(nextProps) {
      console.log('componentWillReceiveProps');
      console.log(nextProps.products);
      let abc = Object.assign([],[...nextProps.products]);
      console.log(abc);
      this.setState({
        products: [...nextProps.products]
      });
    }

    render() {
      console.log('product related render');
      console.log(this.state.products);
      return (
        <div className="box">
            <div id="related-slidertab" className="row owl-carousel product-slider">
            {this.state.products.map(p =>
                <ProductCard product={p} key={p.id} />
            )}
            </div>
            {/*<div id="related-slidertab" className="row owl-carousel product-slider">*/}

        </div>
      );
    }
}

export default ProductRelated;
