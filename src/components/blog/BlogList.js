import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import BlogCard from './BlogCard';

class BlogList extends React.Component {
  //set up state only when props ready
    render() {
      return (
        <div>
          {this.props.blogs.map(item =>
            <div key={item.id}>
              <BlogCard blog={item} key={item.id} from='list' />
            </div>
          )}
        </div>
      );
    }
}

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    blogs:state.blogs
  }
}

export default connect(mapStateToProps)(BlogList);
