import React from 'react';

class BlogCategory extends React.Component {
    render() {
      return (
        <div className="column-block">
          <div className="columnblock-title">Categories</div>
          <div className="blog-categories-block category_block">
            <div className="list-group"> <a className="list-group-item" href="#">Audio</a> <a className="list-group-item" href="#">Gallery</a> <a className="list-group-item" href="#">Link</a> <a className="list-group-item" href="#">Quote</a> <a className="list-group-item" href="#">Uncategorized</a> <a className="list-group-item last" href="#">Video</a> </div>
          </div>
        </div>
      );
    }
}

export default BlogCategory;
