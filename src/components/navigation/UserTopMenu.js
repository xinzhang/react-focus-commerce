import React from 'react';
import {Link} from 'react-router';

class UserTopMenu extends React.Component {
    render() {
      return (
        <nav id="menu" className="navbar">
            <div className="nav-inner container">
                <div className="navbar-header"><span id="category" className="visible-xs">Categories</span>
                    <button type="button" className="btn btn-navbar navbar-toggle" ><i className="fa fa-bars"></i></button>
                </div>
                <div className="navbar-collapse">
                    <ul className="main-navigation">
                        <li><Link className="parent" to={'/'}>Home</Link></li>
                        <li><Link className="parent" to={'/products/list'}>Electronics</Link></li>
                        <li><Link className="parent" to={'/products/list'}>Mobile</Link></li>
                        <li><Link className="parent" to={'/products/list'}>Fashion & Beauty</Link></li>
                        <li><Link className="parent" to={'/products/list'}>Audio</Link></li>
                        <li><Link className="parent" to={'/blog/list'}>Blog</Link></li>
                        <li><a href="about-us.html" >About us</a></li>
                        <li><a href="contact.html" >Contact Us</a> </li>
                    </ul>
                </div>
            </div>
        </nav>
      );
    }
}

export default UserTopMenu;
