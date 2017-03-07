import React from 'react';
import {Link} from 'react-router';

class AdminPage extends React.Component {

    render() {
      return (
        <div className="row">
          <div className="col-sm-5 hidden-xs column-left" id="column-left">
          <div className="column-block">
            <div className="columnblock-title"></div>
            <div className="account-block">
              <div className="list-group">
                <Link className="list-group-item" to={'/admin/categories'}>Categories</Link>
                <Link className="list-group-item" to={'/admin/brands'}>Brands</Link>
              </div>
            </div>
          </div>
          </div>
          <div className="col-sm-7" id="content">
            {this.props.children}
          </div>
        </div>
      );
    }
}

export default AdminPage;
