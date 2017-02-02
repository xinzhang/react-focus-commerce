import React from 'react';

class RecentBlogPost extends React.Component {
    render() {
      return (
        <div>
          <div className="productblock-title">Recent Posts</div>
          <div className="blog-categories-block category_block">
            <div className="list-group">
              <a className="list-group-item" href="#">Gallery Post Format</a>
              <a className="list-group-item" href="#">Recent Posts</a>
              <a className="list-group-item" href="#">Standard Post Format</a>
              <a className="list-group-item last" href="#">Image Post Format</a>
            </div>
          </div>
        </div>
      );
    }
}

export default RecentBlogPost;
