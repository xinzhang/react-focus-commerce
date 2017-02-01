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
                        <li><a href="/products"   className="parent"  >Electronics</a> </li>
                        <li><a href="/products"   className="parent"  >Mobile</a> </li>
                        <li><a href="/products"   className="parent"  >Fashio & Beauty</a> </li>
                        <li><a href="/products"   className="parent"  >Audio</a> </li>
                        <li><a href="/products"   className="parent"  >Home & Family</a> </li>
                        <li><a href="#" className="active parent">Page</a>
                            <ul>
                                <li><a href="/products">Category Page</a></li>
                                <li><a href="cart.html">Cart Page</a></li>
                                <li><a href="checkout.html">Checkout Page</a></li>
                                <li><a href="/blog/list" >Blog Page</a></li>
                                <li><a href="/blog/detail" >Singale Blog Page</a></li>
                                <li><a href="/account/register">Register Page</a></li>
                                <li><a href="contact.html">Contact Page</a></li>
                            </ul>
                        </li>
                        <li><a href="/blog/list" className="parent"  >Blog</a></li>
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
