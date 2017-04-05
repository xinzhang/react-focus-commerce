import React from 'react';

import LeftPage from '../navigation/LeftPage';
import HomeBanner from './HomeBanner';
import HomeSubBanner from './HomeSubBanner';
import ProductsSlider from './ProductsSlider';
import HomeSubBannerItem from './HomeSubBannerItem';
import BlogSlider from '../blog/BlogSlider';
import BrandCarousel from './BrandCarousel';

import {Tabs,Tab} from 'react-bootstrap';

import $ from 'jquery';

class HomePage extends React.Component {
    componentDidMount() {
        window.turnOnTabs();
    }

    render() {
      return (
        <div>
          <HomeBanner />
          <HomeSubBanner />
          <div className="row">
            <LeftPage />
            <div id="content" className="col-sm-9">

                <div className="customtab">
                  <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Latest"><ProductsSlider sliderType="latest" /></Tab>
                    <Tab eventKey={2} title="Special"><ProductsSlider sliderType="special" /></Tab>
                    <Tab eventKey={3} title="Bestseller"><ProductsSlider sliderType="bestseller" /></Tab>
                  </Tabs>

                  {/*
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
                    */}

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
