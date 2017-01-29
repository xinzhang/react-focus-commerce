import React from 'react';

class ListPager extends React.Component {
    render() {
      return (
        <div className="category-page-wrapper">
          <div className="result-inner">Showing 1 to 8 of 10 (2 Pages)</div>
          <div className="pagination-inner">
            <ul className="pagination">
              <li className="active"><span>1</span></li>
              <li><a href="category.html">2</a></li>
              <li><a href="category.html">&gt;</a></li>
              <li><a href="category.html">&gt;|</a></li>
            </ul>
          </div>
        </div>
      );
    }
}

export default ListPager;
