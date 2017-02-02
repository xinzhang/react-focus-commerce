import React from 'react';
import {Link} from 'react-router';

import $ from 'jquery';

class ProductPictures extends React.Component {

    componentDidMount(){
      console.log(this.props.product);
    }

    render() {

      var pictures = [];
      for (let i=1; i<this.props.product.slider_pic_count+1; i++) {
        let largePicUrl=this.props.product.slider_pic_large_url.replace("%d", i);
        let smallPicUrl=this.props.product.slider_pic_small_url.replace("%d", i);

        let title=this.props.product.name;
        let itemWidthStyle={width:"83px"};

        pictures.push(
          <div className="owl-item" style={itemWidthStyle}>
          <div className="item" key={"pic_" + i}>
            <li className="image-additional">
              <a className="thumbnail fancybox" rel="gallery1"  href={largePicUrl} title={title}>
                <img src={smallPicUrl} title={title} alt={title} />
              </a>
            </li>
          </div>
        </div>);
      }

      let style1={opacity: 1, display: "block"};
      let wrapperStyle={width: "1162px", left: "0px", display: "block", transition: "all 1000ms ease", transform: "translate3d(-249px, 0px, 0px)"};

      let renderhtml = (
        <ul className="thumbnails">
            <li>
              <Link className="thumbnail fancybox" to={'/products/detail/'+ this.props.product.id}>
                <img src={this.props.product.pic_url} alt={this.props.product.name} title={this.props.product.name} className="img-responsive" />
              </Link>
            </li>
            <div id="product-thumbnail" className="owl-carousel ows-theme" style={style1}>
            <div class="owl-wrapper-outer">
            <div class="owl-wrapper" style={wrapperStyle}>
                {pictures}
            </div>
            </div>
            </div>
        </ul>
      );
      console.log(renderhtml);

      /*<div id="product-thumbnail" className="owl-carousel">*/
      return renderhtml;
    }
}

export default ProductPictures;
