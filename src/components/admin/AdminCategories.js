import React from 'react';

class AdminCategoriesPage extends React.Component {
    render() {
      return (
        <div className="row">
          <div className="col-sm-3 hidden-xs column-left" id="column-left">
            menu for categories
          </div>
          <div className="col-sm-9" id="content">
          </div>
        </div>
      );
    }
}

export default AdminCategoriesPage;
