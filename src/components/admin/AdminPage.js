import React from 'react';

class AdminPage extends React.Component {

    render() {
      return (
        <div className="row">
          <div className="col-sm-3 hidden-xs column-left" id="column-left">
            menu
          </div>
          <div className="col-sm-9" id="content">

          </div>
        </div>
      );
    }
}

export default AdminPage;
