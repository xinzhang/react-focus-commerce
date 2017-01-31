import React from 'react';

import LeftPage from '../navigation/LeftPage';
import CategoryBanner from '../category/CategoryBanner';
import ProductList from '../products/ProductList';

class ProductListPage extends React.Component {
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

export default ProductListPage;
