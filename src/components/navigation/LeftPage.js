import React from 'react';

import CategoryCard from '../category/CategoryCard';
import LatestProductCard from '../products/LatestProductCard';
import SpecialProductCard from '../products/SpecialProductCard';

class LeftPage extends React.Component {
    render() {
      return (
          <div id="column-left" className="col-sm-3 hidden-xs column-left">
            <CategoryCard />
            <LatestProductCard />
            <SpecialProductCard />
          </div>
      );
    }
}

export default LeftPage;
