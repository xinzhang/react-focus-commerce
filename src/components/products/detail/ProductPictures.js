import React from 'react';

class ProductPictures extends React.Component {
    render() {
      return (
        <ul className="thumbnails">
            <li>
              <a className="thumbnail fancybox" href="/image/product/product8.jpg" title="iPod Classic">
                <img src="/image/product/product1.jpg" title="iPod Classic" alt="iPod Classic" />
              </a>
            </li>
            <div id="product-thumbnail" className="owl-carousel">
                <div className="item">
                    <li className="image-additional"><a className="thumbnail fancybox" rel="gallery1"  href="image/product/product1.jpg" title="iPod Classic"> <img src="/image/product/pro-1-220x294.jpg" title="iPod Classic" alt="iPod Classic" /></a></li>
                </div>
                <div className="item">
                    <li className="image-additional"><a className="thumbnail fancybox" rel="gallery1" href="image/product/product2.jpg" title="iPod Classic"> <img src="/image/product/pro-2-220x294.jpg" title="iPod Classic" alt="iPod Classic" /></a></li>
                </div>
                <div className="item">
                    <li className="image-additional"><a className="thumbnail fancybox" rel="gallery1" href="image/product/product3.jpg" title="iPod Classic"> <img src="/image/product/pro-3-220x294.jpg" title="iPod Classic" alt="iPod Classic" /></a></li>
                </div>
                <div className="item">
                    <li className="image-additional"><a className="thumbnail fancybox" rel="gallery1" href="image/product/product4.jpg" title="iPod Classic"> <img src="/image/product/pro-4-220x294.jpg" title="iPod Classic" alt="iPod Classic" /></a></li>
                </div>
                <div className="item">
                    <li className="image-additional"><a className="thumbnail fancybox" rel="gallery1" href="image/product/product5.jpg" title="iPod Classic"> <img src="/image/product/pro-5-220x294.jpg" title="iPod Classic" alt="iPod Classic" /></a></li>
                </div>
                <div className="item">
                    <li className="image-additional"><a className="thumbnail fancybox" rel="gallery1" href="image/product/product6.jpg" title="iPod Classic"> <img src="/image/product/pro-6-220x294.jpg" title="iPod Classic" alt="iPod Classic" /></a></li>
                </div>
                <div className="item">
                    <li className="image-additional"><a className="thumbnail fancybox" rel="gallery1" href="image/product/product7.jpg" title="iPod Classic"> <img src="/image/product/pro-7-220x294.jpg" title="iPod Classic" alt="iPod Classic" /></a></li>
                </div>
            </div>
        </ul>
      );
    }
}

export default ProductPictures;
