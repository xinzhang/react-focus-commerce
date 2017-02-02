import React from 'react';
import OwlCarousel from 'react-owl-carousel';

class HomeBanner extends React.Component {
    render() {
      return (
        <div className="row">
            <div className="col-md-12 home-slider">
                <OwlCarousel id="main-banner" className="owl-carousel" navigation={false} pagination={true} items={1}>
                    <div className="item"> <a href="#"><img src="/image/banners/Main-Banner1.jpg" alt="main-banner1" className="img-responsive" /></a> </div>
                    <div className="item"> <a href="#"><img src="/image/banners/Main-Banner2.jpg" alt="main-banner2" className="img-responsive" /></a> </div>
                    <div className="item"> <a href="#"><img src="/image/banners/Main-Banner3.jpg" alt="main-banner3" className="img-responsive" /></a> </div>
                </OwlCarousel>
            </div>
        </div>
      );
    }
}

export default HomeBanner;
