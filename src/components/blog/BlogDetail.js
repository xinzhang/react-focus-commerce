import React from 'react';
import {connect} from 'react-redux';
import BlogCard from './BlogCard';
import AddBlogComment from './AddBlogComment';

class BlogDetail extends React.Component {
    render() {
      return (
        <div>
          <BlogCard blog={this.props.blog} key={this.props.blog.id} from='detail' />
          <AddBlogComment />
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
  const blogId = ownProps.params.id;
  let blog = { id: -1, pic_url:'', sliker_url:[], datetime_added:'',post_by:'',summary:''};
  if (blogId && state.blogs.length > 0) {
      blog = Object.assign({}, state.blogs.find(b => b.id == blogId));
  }

  return {
    blog: blog
  }
}

export default connect(mapStateToProps)(BlogDetail);
