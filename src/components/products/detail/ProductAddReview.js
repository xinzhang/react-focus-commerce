import React from 'react';

class ProductAddReview extends React.Component {
    render() {
      return (
        <div className="tab-pane" id="tab-review">
            <form className="form-horizontal">
                <div id="review"></div>
                <h2>Write a review</h2>
                <div className="form-group required">
                    <div className="col-sm-12">
                        <label className="control-label" htmlFor="input-name">Your Name</label>
                        <input type="text" name="name" value="" id="input-name" className="form-control" />
                    </div>
                </div>
                <div className="form-group required">
                    <div className="col-sm-12">
                        <label className="control-label" htmlFor="input-review">Your Review</label>
                        <textarea name="text" rows="5" id="input-review" className="form-control"></textarea>
                        <div className="help-block"><span className="text-danger">Note:</span> HTML is not translated!</div>
                    </div>
                </div>
                <div className="form-group required">
                    <div className="col-sm-12">
                        <label className="control-label">Rating</label>
                        &nbsp;&nbsp;&nbsp; Bad&nbsp;
                        <input type="radio" name="rating" value="1" />
                        &nbsp;
                        <input type="radio" name="rating" value="2" />
                        &nbsp;
                        <input type="radio" name="rating" value="3" />
                        &nbsp;
                        <input type="radio" name="rating" value="4" />
                        &nbsp;
                        <input type="radio" name="rating" value="5" />
                        &nbsp;Good</div>
                </div>
                <div className="buttons clearfix">
                    <div className="pull-right">
                        <button type="button" id="button-review" data-loading-text="Loading..." className="btn btn-primary">Continue</button>
                    </div>
                </div>
            </form>
        </div>
      );
    }
}

export default ProductAddReview;
