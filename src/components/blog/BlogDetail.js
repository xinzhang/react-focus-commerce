import React from 'react';
import AddBlogComment from './AddBlogComment';

class BlogDetail extends React.Component {
    render() {
      return (
        <div>
          <div className="blog1 blog">
            <div className="blog_img"><img src="/image/blog/blog_4.jpg" alt="" /></div>
            <h4 className="p-name"><a href="singale-blog.html">Image Post Format</a></h4>
            <ul className="blog-meta">
              <li><i className="fa fa-clock-o"></i><span className="dt-published">December 23, 2015</span></li>
              <li><i className="fa fa-comment-o"></i><span>2</span> Comment</li>
              <li><i className="fa fa-user"></i><span><a rel="author" title="Posts by Admin" href="#">Admin admin</a></span></li>
            </ul>
            <p className="p-summary"></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab consectetur! Sequi, aperiam, dignissimos! Molestias quidem temporibus, earum deleniti, quae voluptatibus cum, doloremque libero dolorum sapiente neque saepe magnam ullam nisi mollitia itaque voluptas illo pariatur inventore,doloremque libero dolorum sapiente neque saepe magnam ullam nisi mollitia itaque voluptas illo pariatur inventor.</p>
          </div>
          <AddBlogComment />
        </div>
      );
    }
}

export default BlogDetail;
