import React from 'react';
import LeftPage from '../navigation/LeftPage';
import CategoryBanner from './CategoryBanner';
import ProductList from '../products/ProductList';

class CategoryPage extends React.Component {
    render() {
      return (
        <div>
          <LeftPage />
          <div id="content" className="col-sm-9">
            <CategoryBanner />
            <ProductList />
          </div>
        </div>
      );
    }
}

export default CategoryPage;
