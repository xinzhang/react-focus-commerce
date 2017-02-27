import React from 'react';

class CategoryBanner extends React.Component {
    render() {
      
      return (
        <div>
        <h2 className="category-title">Category {this.props.title}</h2>
        <div className="row category-banner">
          <div className="col-sm-12 category-image"><img src="/image/banners/category-banner.jpg" alt="Desktops" title="Desktops" className="img-thumbnail" /></div>
          <div className="col-sm-12 category-desc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
        </div>
      </div>
      );
    }
}

export default CategoryBanner;
