import React from 'react';

import BlogCategory from './BlogCategory';
import RecentBlogPost from './RecentBlogPost';

class BlogPage extends React.Component {
    render() {
      return (
        <div className="row">

          <div id="content" className="col-sm-9">
                {this.props.children}
          </div>

          <div id="column-right" className="col-sm-3 hidden-xs column-left">
            <BlogCategory />
            <RecentBlogPost />
          </div>
        </div>
      );
    }
}

export default BlogPage;
