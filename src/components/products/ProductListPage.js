import React from 'react';

import LeftPage from '../navigation/LeftPage';
import ProductList from '../products/ProductList';

class ProductListPage extends React.Component {
    render() {
      return (
        <div class="row">
          <LeftPage />
          <div id="content" className="col-sm-9">
            {this.props.children}
          </div>
        </div>
      );
    }
}

export default ProductListPage;
