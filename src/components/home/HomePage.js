import React from 'react';

import LeftPage from '../navigation/LeftPage';
import HomeBanner from './HomeBanner';
import HomeSubBanner from './HomeSubBanner';
import ProductsSlider from './ProductsSlider';
import HomeSubBannerItem from './HomeSubBannerItem';
import BlogSlider from '../blog/BlogSlider';
import BrandCarousel from './BrandCarousel';

class HomePage extends React.Component {
    render() {
      return (
        <div>
          <HomeBanner />
          <HomeSubBanner />
          <div className="row">
            <LeftPage />
            <div id="content" className="col-sm-9">

                <div className="customtab">
                    <div id="tabs" className="customtab-wrapper">
                        <ul className='customtab-inner'>
                            <li className='tab'><a href="#tab-latest">Latest</a></li>
                            <li className='tab'><a href="#tab-special">Special</a></li>
                            <li className='tab'><a href="#tab-bestseller">Bestseller</a></li>
                        </ul>
                    </div>

                    <div id="tab-latest" className="tab-content">
                        <ProductsSlider sliderType="latest" />
                    </div>

                    <div id="tab-special" className="tab-content">
                        <ProductsSlider sliderType="special" />
                    </div>

                    <div id="tab-bestseller" className="tab-content">
                        <ProductsSlider sliderType="bestseller" />
                    </div>

                    <HomeSubBannerItem subbanner_id="4" />

                    <HomeSubBannerItem subbanner_id="5" />

                    <div className="blog">
                      <div className="blog-heading">
                          <h3>Latest Blogs</h3>
                      </div>

                      <BlogSlider />

                    </div>
                </div>

                <BrandCarousel />

            </div>
          </div>
        </div>
      );
    }
}

export default HomePage;
