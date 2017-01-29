import React from 'react';

class BreadCrumb extends React.Component {
    render() {
      return (
        <ul className="breadcrumb">
            <li><a href="index.html"><i className="fa fa-home"></i></a></li>
            <li><a href="blog.html">Blog</a></li>
          </ul>
      );
    }
}

export default BreadCrumb;
