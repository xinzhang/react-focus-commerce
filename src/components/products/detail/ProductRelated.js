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
  console.log(this.state);
  console.log(this.state.products.length);
}

    render() {
      console.log('product related render');
      return (
        <div className="box">
            <h3>products length: {this.state.products.length}</h3>
            <h3>state value: {this.state.tempString}</h3>

            {/*<div id="related-slidertab" className="row owl-carousel product-slider">*/}
            <div>
              {
                this.state.products.map(p => {
                  <div>
                    <span>{p.name}</span>
                    <ProductCard product={p} key={p.id} />
                  </div>
                })
              }
            </div>
        </div>
      );
    }
}

export default ProductRelated;
