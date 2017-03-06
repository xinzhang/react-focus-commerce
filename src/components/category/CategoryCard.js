import React from 'react';
import {connect} from 'react-redux';

class CategoryCard extends React.Component {

  constructor(props, context){
      super(props, context);

      this.getItemLinks = this.getItemLinks.bind(this);
  }

    getItemLinks(item) {
      var self = this;
      return (
        <ul>
          {item.subcategories.map(subItem =>
            <li key={subItem.name}><a href="#">{subItem.name}</a>
            {subItem.subcategories && subItem.subcategories.length > 0 &&
                self.getItemLinks(subItem)
            }
            </li>
          )}
        </ul>
      );
    }

    render() {

      return (
        <div className="column-block">
            <div className="columnblock-title">Categories</div>
            <div className="category_block">
                <ul className="box-category treeview-list treeview">
                    {this.props.categories && this.props.categories.map( item =>
                      <li key={item.name}><a href="#" className="activSub">{item.name}</a>
                      {item.subcategories && item.subcategories.length > 0 &&
                          this.getItemLinks(item)
                      }
                      </li>
                    )}
                </ul>
            </div>
        </div>
      );
    }

    componentDidMount() {
      console.log('caregory card run categorytreeview()');
      window.categorytreeview();
    }
}

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(CategoryCard);
