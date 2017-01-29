import React from 'react';
import LeftPage from '../navigation/LeftPage';

class HomePage extends React.Component {
    render() {
      return (
        <div className="row">
          <LeftPage />

          <span>HomePage</span>
        </div>
      );
    }
}

export default HomePage;
