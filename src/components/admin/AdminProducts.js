import React, {PropTypes} from 'react';
import ProductGrid from 'react-data-grid';

// Custom Formatter component
const booleanFormatter = (props) => {
    const val = props.value;
    console.log(val)
    return (
      <input type="checkbox" disabled checked={val} />
    );
}

class AdminProducts extends React.Component {

  cols = this.createCols();

  constructor(props) {
      super(props);
      this.rowGetter = this.rowGetter.bind(this);
      this.onRowClick = this.onRowClick.bind(this);
      //no need to use state for now
      this.state = {
         products: []
      }
  }

  createCols() {
    return  [
      { key: 'name', name: 'Name' },
      { key: 'price', name: 'Price' },
      { key: 'category', name: 'Category' },
      { key: 'subcategory', name: 'Sub-Category'},
      { key: 'isLatest', name: 'Latest', formatter: booleanFormatter},
      { key: 'isSpecial', name: 'Special', formatter: booleanFormatter},
      { key: 'rating', name:'Rating'}
    ];
  }

  static contextTypes = {
    router: PropTypes.object
  };

  rowGetter(i) {
    return this.state.products[i];
  }

  componentWillReceiveProps(nextProps) {
    this.setState({products: nextProps.products});
  }

  onRowClick(rowIdx, row) {
      this.context.router.push('/admin/editproduct/' + row._id);
  }

  render() {
    return (
      <ProductGrid
        columns={this.cols}
        rowGetter={this.rowGetter}
        rowsCount={this.state.products.length}
        onRowClick={this.onRowClick}
        minHeight={500}
        />
    );
  }

}

export default AdminProducts;
