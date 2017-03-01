import React from 'react';
import ProductGrid from 'react-data-grid';

class AdminProducts extends React.Component {

  cols = this.createCols();

  constructor(props) {
      super(props);
      this.rowGetter = this.rowGetter.bind(this);

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

  rowGetter(i) {
    console.log('rowgetter ' + i);
    return this.props.products[i];
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   rows: nextProps.products
    // })
  }

  render() {

    return (
      <ProductGrid
        columns={this.cols}
        rowGetter={this.rowGetter}
        rowsCount={this.props.products.length}
        minHeight={500}
        />
    );
  }

}

export default AdminProducts;
