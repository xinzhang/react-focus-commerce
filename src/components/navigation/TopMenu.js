import React from 'react';

class TopMenu extends React.Component {
    render() {
      return (
        <nav id="menu" className="navbar">
            <div className="nav-inner container">
                <div className="navbar-header"><span id="category" className="visible-xs">Categories</span>
                    <button type="button" className="btn btn-navbar navbar-toggle" ><i className="fa fa-bars"></i></button>
                </div>
                <div className="navbar-collapse">
                    <ul className="main-navigation">
                        <li><a href="/"   className="parent"  >Home</a> </li>
                        <li><a href="/products/list"   className="parent"  >Electronics</a> </li>
                        <li><a href="/products/list"   className="parent"  >Mobile</a> </li>
                        <li><a href="/products/list"   className="parent"  >Fashio & Beauty</a> </li>
                        <li><a href="/products/list"   className="parent"  >Audio</a> </li>
                        <li><a href="/products/list"   className="parent"  >Home & Family</a> </li>
                        <li><a href="/blog/list" className="parent">Blog</a></li>
                        <li><a href="about-us.html" >About us</a></li>
                        <li><a href="contact.html" >Contact Us</a> </li>
                    </ul>
                </div>
            </div>
        </nav>
      );
    }
}

export default TopMenu;
