import React from 'react';

class AddBlogComment extends React.Component {
    render() {
      var hiddenStyle = {
        display:"none"
      };

      return (
        <div className="blog-comment">
          <h4 className="productblock-title section-title">No comment</h4>
          <div className="taberna-line"> <span className="line-inner bg-color"></span> </div>
          <div className="comment-form col-sm-12">
            <div className="row">
              <div className="col-sm-12 row">
                <h4 className="section-title">Leave a Reply</h4>
                <div className="taberna-line"> <span className="line-inner bg-color"></span> </div>
              </div>
              <div className="comment-respond" id="respond">
                <h3 className="comment-reply-title" id="reply-title"> <small>
                <a style={hiddenStyle} href="/taberna/gallery-post-format/#respond" id="cancel-comment-reply-link" rel="nofollow">
                  <i className="fa fa-times fa-2x"></i></a></small></h3>
                <form noValidate className="comment-form" id="commentform" method="post" action="#">
                  <div className="row">
                    <div className="name col-xs-12 col-sm-12">
                      <label>Name *</label>
                      <input type="text" aria-required="true" value="" name="author" id="author" />
                    </div>
                    <div className="email col-xs-12 col-sm-12">
                      <label>Email *</label>
                      <input type="email" aria-required="true" value="" name="email" id="email" />
                    </div>
                    <div className="comment-form-url col-xs-12">
                      <label>Url</label>
                      <input type="text" value="" name="url" id="url" />
                    </div>
                    <div className="comment-form-comment col-xs-12 col-sm-12">
                      <label htmlFor="comment">Comment</label>
                      <textarea required aria-required="true" rows="8" cols="45" name="comment" id="comment"></textarea>
                    </div>
                  </div>
                  <p className="form-submit">
                    <button type="submit" value="send" className="submit taberna-btn bg-color" id="submit" name="submit">send </button>
                    <input type="hidden" id="comment_post_ID" value="872" name="comment_post_ID" className="taberna-btn bg-color" />
                    <input type="hidden" value="0" id="comment_parent" name="comment_parent" className="taberna-btn bg-color" />
                  </p>
                  <p style={hiddenStyle}>
                    <input type="hidden" value="daabc47a44" name="akismet_comment_nonce" id="akismet_comment_nonce" />
                  </p>
                  <p style={hiddenStyle}></p>
                  <input type="hidden" value="1452356543102" name="ak_js" id="ak_js" />
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default AddBlogComment;
