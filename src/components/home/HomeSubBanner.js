import React from 'react';

class HomeSubBanner extends React.Component {
    render() {
      return (
        <div className="row">
            <div className="cms_banner">
                <div className="col-md-4 cms-banner-left"> <a href="#"><img alt="#" src="/image/banners/subbanner1.jpg" /></a> </div>
                <div className="col-md-4 cms-banner-middle"> <a href="#"><img alt="#" src="/image/banners/subbanner2.jpg" /></a> </div>
                <div className="col-md-4 cms-banner-right"> <a href="#"><img alt="#" src="/image/banners/subbanner3.jpg" /></a> </div>
            </div>
        </div>
      );
    }
}

export default HomeSubBanner;
