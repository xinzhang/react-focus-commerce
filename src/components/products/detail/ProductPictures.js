import React from 'react';
import {Link} from 'react-router';

import $ from 'jquery';
//require("imports?$=jquery!./owl-carousel/owl.carousel.min.js")
import OwlCarousel from 'react-owl-carousel';

class ProductPictures extends React.Component {

    componentDidMount(){
      console.log(this.props.product);

    //   $('#product-thumbnail').owlCarousel({
    // 		navigation: true,
    // 		pagination: false,
    // 		itemsDesktop : [1199, 4],
    // 		itemsDesktopSmall : [979, 3],
    // 		itemsTablet : [768, 4],
    // 		itemsTabletSmall : false,
    // 		itemsMobile : [479, 3]
    // 	});
    }

    render() {

      var pictures = [];
      for (let i=0; i<this.props.product.slider_pic_count; i++) {
        let largePicUrl=this.props.product.slider_pic_large_url[i];
        let smallPicUrl=this.props.product.slider_pic_small_url[i];
        let title=this.props.product.name;

        pictures.push(
          <div className="item" key={"pic_" + i}>
            <li className="image-additional">
              <a className="thumbnail fancybox" rel="gallery1"  href={largePicUrl} title={title}>
                <img src={smallPicUrl} title={title} alt={title} />
              </a>
            </li>
        </div>);
      }

      let renderhtml = (
        <ul className="thumbnails">
            <li>
              <Link className="thumbnail fancybox" to={'/products/detail/'+ this.props.product._id}>
                <img src={this.props.product.pic_url} alt={this.props.product.name} title={this.props.product.name} className="img-responsive" />
              </Link>
            </li>
            <OwlCarousel id="product-thumbnail" className="owl-carousel ows-theme" navigation={true} pagination={false}>
                {pictures}
            </OwlCarousel>
        </ul>
      );
      console.log(renderhtml);

      /*<div id="product-thumbnail" className="owl-carousel">*/
      return renderhtml;
    }
}

export default ProductPictures;
