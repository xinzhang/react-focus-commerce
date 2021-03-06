import React from 'react';
import ProductCard from '../ProductCard';

import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';

class ProductRelated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products : Object.assign([], [...this.props.products]),
    }
  }

  componentDidMount() {

    // $('#related-slidertab').owlCarousel({
    //   items: 4,
    //   navigation: true,
    //   pagination: false,
    //   itemsDesktop : [1199, 3],
    //   itemsDesktopSmall : [979, 2],
    //   itemsTablet : [768, 2],
    //   itemsTabletSmall : false,
    //   itemsMobile : [479, 1]
    // });

  }

    componentWillReceiveProps(nextProps) {
      console.log('product related component will receive props');
      
      this.setState({
        products: [...nextProps.products]
      });
    }

    render() {

      return (
        <div className="box">
            <div className="row product-slider">
            <OwlCarousel id="related-slidertab" className="owl-carousel" navigation={true} pagination={false} items={4}>
              {this.state.products.map(p =>
                  <ProductCard product={p} key={p.id} showdesc="false" />
              )}
            </OwlCarousel>
            </div>


            {/*<div id="related-slidertab" className="row owl-carousel product-slider">*/}

        </div>
      );
    }
}

export default ProductRelated;
