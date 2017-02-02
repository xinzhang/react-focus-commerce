import React from 'react';
import {Link} from 'react-router';

class RecentBlogPost extends React.Component {
    render() {
      return (
        <li className="item blog-slider-item">
            <div className="panel-default">
                <div className="blog-image">
                  <Link to={'/blog/detail/'+ this.props.blog.id} className="blog-imagelink">
                    <img src={this.props.blog.pic_url} alt="" />
                  </Link>
                  <span className="blog-hover"></span>
                  <span className="blog-date">{this.props.blog.datetime_added}</span>
                  <span className="blog-readmore-outer">
                    <Link to={'/blog/detail/'+ this.props.blog.id} className="blog-readmore">Read More</Link>
                  </span>
                </div>
                <div className="blog-content"> <a href="#" className="blog-name">
                    <h2>Nunc rutrum scel potent</h2>
                    </a>
                    <div className="blog-desc">{this.props.blog.summary}</div>
                    <Link to={'/blog/detail/'+ this.props.blog.id} className="blog-readmore">Read More</Link>
                    <span className="blog-date">{this.props.blog.datetime_added}</span>
                </div>
            </div>
        </li>
      );
    }
}

export default RecentBlogPost;
