import React from 'react';

class ListFilter extends React.Component {
    render() {
      return (
        <div className="category-page-wrapper">
          <div className="col-md-6 list-grid-wrapper">
            <div className="btn-group btn-list-grid">
              <button type="button" id="list-view" className="btn btn-default list" data-toggle="tooltip" title="List"><i className="fa fa-th-list"></i></button>
              <button type="button" id="grid-view" className="btn btn-default grid" data-toggle="tooltip" title="Grid"><i className="fa fa-th"></i></button>
            </div>
            <a href="#" id="compare-total">Product Compare (0)</a> </div>
          <div className="col-md-1 text-right page-wrapper">
            <label className="control-label" for="input-limit">Show:</label>
            <div className="limit">
              <select id="input-limit" className="form-control">
                <option value="8" selected="selected">8</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 text-right sort-wrapper">
            <label className="control-label" for="input-sort">Sort By:</label>
            <div className="sort-inner">
              <select id="input-sort" className="form-control">
                <option value="ASC" selected="selected">Default</option>
                <option value="ASC">Name (A - Z)</option>
                <option value="DESC">Name (Z - A)</option>
                <option value="ASC">Price (Low &gt; High)</option>
                <option value="DESC">Price (High &gt; Low)</option>
                <option value="DESC">Rating (Highest)</option>
                <option value="ASC">Rating (Lowest)</option>
                <option value="ASC">Model (A - Z)</option>
                <option value="DESC">Model (Z - A)</option>
              </select>
            </div>
          </div>
        </div>
      );
    }
}

export default ListFilter;
