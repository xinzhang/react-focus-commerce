import React from 'react';

class HomeSubBannerItem extends React.Component {
    render() {
      let id = this.props.subbanner_id;
      return (
        <div id={"subbanner" + id} class="banner" >
            <div class="item"> <a href="#">
              <img src={"image/banners/subbanner"+id+".jpg"} alt="Sub Banner4" className="img-responsive" /></a>
            </div>
        </div>
      );
    }
}

export default HomeSubBannerItem;
