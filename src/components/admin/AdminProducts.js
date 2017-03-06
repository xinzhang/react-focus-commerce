import React, {PropTypes} from 'react';
import ProductGrid from 'react-data-grid';

class AdminProducts extends React.Component {

  cols = this.createCols();

  constructor(props) {
      super(props);
      this.rowGetter = this.rowGetter.bind(this);
      this.onRowClick = this.onRowClick.bind(this);
      //no need to use state for now
      // this.state = {
      //   rows: []
      // }
  }

  createCols() {
    return  [
      { key: 'name', name: 'Name' },
      { key: 'price', name: 'Price' },
      { key: 'category', name: 'Category' }
    ];
  }

  static contextTypes = {
    router: PropTypes.object
  };

  rowGetter(i) {
    return this.props.products[i];
  }

  componentWillReceiveProps(nextProps) {
  }

  onRowClick(rowIdx, row) {
      this.context.router.push('/admin/editproduct/' + row._id);
  }

  render() {

    return (
      <ProductGrid
        columns={this.cols}
        rowGetter={this.rowGetter}
        rowsCount={this.props.products.length}
        onRowClick={this.onRowClick}
        minHeight={500}
        />
    );
  }

}

export default AdminProducts;
