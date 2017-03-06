import React from 'react';
import {Link} from 'react-router';

class AdminTopMenu extends React.Component {
    render() {
      return (
        <nav id="menu" className="navbar">
            <div className="nav-inner container">
                <div className="navbar-header"><span id="category" className="visible-xs">Categories</span>
                    <button type="button" className="btn btn-navbar navbar-toggle" ><i className="fa fa-bars"></i></button>
                </div>
                <div className="navbar-collapse">
                    <ul className="main-navigation">
                        <li><Link className="parent" to={'/'}>Back to home</Link></li>
                        <li><Link className="parent" to={'/admin/categories'}>Categories</Link></li>
                        <li><Link className="parent" to={'/admin/brands'}>Brands</Link></li>
                        <li><Link className="parent" to={'/admin/products'}>Products</Link></li>
                        <li><Link className="parent" to={'/admin/users'}>Users</Link></li>
                        <li><Link className="parent" to={'/admin/prices'}>Prices</Link></li>
                        <li><Link className="parent" to={'/admin/inventories'}>Invetories</Link></li>
                        <li><Link className="parent" to={'/admin/orders'}>Orders</Link></li>
                        <li><Link className="parent" to={'/admin/blogs'}>Blogs</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
      );
    }
}

export default AdminTopMenu;
