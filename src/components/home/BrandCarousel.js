import React from 'react';
import OwlCarousel from 'react-owl-carousel';

class BrandCarousel extends React.Component {
    render() {
      return (
        <OwlCarousel id="brand_carouse" className="owl-carousel brand-logo">
            <div className="item text-center"> <a href="#"><img src="/image/brand/brand1.png" alt="Disney" className="img-responsive" /></a> </div>
            <div className="item text-center"> <a href="#"><img src="/image/brand/brand2.png" alt="Dell" className="img-responsive" /></a> </div>
            <div className="item text-center"> <a href="#"><img src="/image/brand/brand3.png" alt="Harley" className="img-responsive" /></a> </div>
            <div className="item text-center"> <a href="#"><img src="/image/brand/brand4.png" alt="Canon" className="img-responsive" /></a> </div>
            <div className="item text-center"> <a href="#"><img src="/image/brand/brand5.png" alt="Canon" className="img-responsive" /></a> </div>
            <div className="item text-center"> <a href="#"><img src="/image/brand/brand6.png" alt="Canon" className="img-responsive" /></a> </div>
            <div className="item text-center"> <a href="#"><img src="/image/brand/brand7.png" alt="Canon" className="img-responsive" /></a> </div>
            <div className="item text-center"> <a href="#"><img src="/image/brand/brand8.png" alt="Canon" className="img-responsive" /></a> </div>
            <div className="item text-center"> <a href="#"><img src="/image/brand/brand9.png" alt="Canon" className="img-responsive" /></a> </div>
            <div className="item text-center"> <a href="#"><img src="/image/brand/brand5.png" alt="Canon" className="img-responsive" /></a> </div>
        </OwlCarousel>
      );
    }
}

export default BrandCarousel;
