import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import OwlCarousel from 'react-owl-carousel';

import BlogSliderItem from './BlogSliderItem';

class BlogSlider extends React.Component {
    render() {
      return (
        <div className="blog-inner box">
            <ul className="list-unstyled blog-wrapper" id="latest-blog">

            {this.props.blogs.map(item =>

                <BlogSliderItem blog={item} key={item.id} />

            )}
            </ul>
            <div className="buttons text-right seeall">
                <Link to={'/blog/list/'} className="btn btn-primary">Read More</Link>
            </div>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
  return {
    blogs:state.blogs.slice(0, 5)
  }
}

export default connect(mapStateToProps)(BlogSlider);
