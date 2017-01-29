import React from 'react';
import LeftPage from '../navigation/LeftPage';

class CategoryPage extends React.Component {
    render() {
      return (
        <div className="row">
          <LeftPage />

          <span>Category</span>
        </div>
      );
    }
}

export default CategoryPage;
