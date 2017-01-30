import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class BlogCategory extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

    render() {
      console.log('start render');
      return (
        <div className="column-block">
          <div className="columnblock-title">Categories</div>
          <div className="blog-categories-block category_block">
            <div className="list-group">
              {
                this.props.blogcategories.map(item =>
                  <Link to={'/blog/list/'+ item} className="list-group-item">{item}</Link>
                )
              }
            </div>
          </div>
        </div>
      );
    }
}

BlogCategory.propTypes = {
  //blogcategories: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  console.log('start mapStateToProps');
  console.log(state.blogcategories);
  return {
    blogcategories:state.blogcategories
  }
}

export default connect(mapStateToProps)(BlogCategory);
