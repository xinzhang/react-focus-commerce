import React from 'react';

class BlogList extends React.Component {
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab consectetur! Sequi, aperiam, dignissimos! Molestias quidem temporibus, earum deleniti, quae voluptatibus cum, doloremque libero dolorum sapiente neque saepe magnam ullam nisi mollitia itaque voluptas illo pariatur inventore, …..</p>
          <a className="u-url" href="singale-blog.html">read more</a>
        </div>

        <div className="blog2 blog">
          <div className="blog_img video">
            <span>videos</span>
          </div>
          <h4 className="p-name"><a href="singale-blog.html">Video Post Format</a></h4>
          <ul className="blog-meta">
            <li><i className="fa fa-clock-o"></i><span className="dt-published">December 23, 2015</span></li>
            <li><i className="fa fa-comment-o"></i><span>2</span> Comment</li>
            <li><i className="fa fa-user"></i><span><a rel="author" title="Posts by Admin" href="#">Admin</a></span></li>
          </ul>
          <p className="p-summary"></p>
          <p>Repellat minus perferendis dolor, animi dignissimos aut maiores molestiae perspiciatis doloremque, recusandae blanditiis reprehenderit voluptatibus unde ut? Ullam at nihil omnis consequatur, assumenda autem dolor quis velit fugiat magni, pariatur. Beatae modi quod, quia facilis voluptatum iusto atque vero, fugiat perferendis, officia maiores illo explicabo nesciunt doloribus eum praesentium quasi. Sint tempore reiciendis nisi, ex …..</p>
          <a className="u-url" href="singale-blog.html">read more</a>
        </div>

        <div className="blog3 blog">
          <div className="blog_img owl-carousel home-slider owl-theme gellery">
            <div className="item"> <a href="#"><img src="/image/blog/blog_1.jpg" alt="" className="img-responsive" /></a> </div>
            <div className="item"> <a href="#"><img src="/image/blog/blog_2.jpg" alt="" className="img-responsive" /></a> </div>
            <div className="item"> <a href="#"><img src="/image/blog/blog_3.jpg" alt="" className="img-responsive" /></a> </div>
          </div>
          <h4 className="p-name">Gellery Post Format</h4>
          <ul className="blog-meta">
            <li><i className="fa fa-clock-o"></i><span className="dt-published">December 23, 2015</span></li>
            <li><i className="fa fa-comment-o"></i><span>2</span> Comment</li>
            <li><i className="fa fa-user"></i><span><a rel="author" title="Posts by Admin" href="#">Admin</a></span></li>
          </ul>
          <p className="p-summary"></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab consectetur! Sequi, aperiam, dignissimos! Molestias quidem temporibus, earum deleniti, quae voluptatibus cum, doloremque libero dolorum sapiente neque saepe magnam ullam nisi mollitia itaque voluptas illo pariatur inventore, …..</p>
          <a className="u-url" href="singale-blog.html">read more</a>
        </div>

        <div className="blog4 blog">
          <div className="blog_img"> <img src="/image/blog/blog_5.jpg" alt="" /> </div>
          <h4 className="p-name">Image Post Format</h4>
          <ul className="blog-meta">
            <li><i className="fa fa-clock-o"></i><span className="dt-published">December 23, 2015</span></li>
            <li><i className="fa fa-comment-o"></i><span>2</span> Comment</li>
            <li><i className="fa fa-user"></i><span><a rel="author" title="Posts by Admin" href="#">Admin</a></span></li>
          </ul>
          <p className="p-summary"></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non blanditiis, voluptas, esse at iste nulla in ratione quas incidunt aspernatur nostrum, veniam expedita recusandae quis libero aliquid animi, repellat harum velit eum assumenda. Asperiores perferendis sequi modi, sunt quasi veniam laborum, ea ducimus illum velit quam iure ipsam eligendi similique. Labore, dolore commodi sequi iste …..</p>
          <a className="u-url" href="singale-blog.html">read more</a>
        </div>
        </div>
      );
    }
}

export default BlogList;
