import React from 'react';
import {Link} from 'react-router';

class BlogCard extends React.Component {
    render() {
      return (
        <div>
          <div className="blog1 blog">
            {this.props.blog.pic_url &&
              <div className="blog_img"><img src={this.props.blog.pic_url} alt="" /></div>
            }
            <h4 className="p-name"><a href="singale-blog.html">Image Post Format</a></h4>
            <ul className="blog-meta">
              <li><i className="fa fa-clock-o"></i><span className="dt-published">{this.props.blog.datetime_added}</span></li>
              <li><i className="fa fa-comment-o"></i><span>2</span> Comment</li>
              <li><i className="fa fa-user"></i><span><a rel="author" title="Posts by Admin" href="#">{this.props.blog.post_by}</a></span></li>
            </ul>
            <p className="p-summary"></p>
            <p>{this.props.blog.summary}</p>
            {this.props.from == 'list' &&
              <Link to={'/blog/detail/'+ this.props.blog.id} className="u-url">Read More</Link>
            }
          </div>
        </div>
      );
    }
}

BlogCard.propTypes = {
  //blog: React.PropTypes.Object.isRequired,
  //id: React.PropTypes.number.isRequired,
  //from: React.PropTypes.string.isRequired
}


export default BlogCard;
