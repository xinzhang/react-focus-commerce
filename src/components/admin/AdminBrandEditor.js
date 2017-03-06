import React from 'react';
import BrandGrid from 'react-data-grid';

class AdminBrandEditor extends React.Component {
  cols = this.createCols();
  
  constructor(props) {
      super(props);
      this.rowGetter = this.rowGetter.bind(this);
  }

  createCols() {
    return  [
      { key: 'name', name: 'Name' }
    ];
  }

  rowGetter(i) {
    return this.props.brands[i];
  }

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
      let rows = this.state.rows.slice();

      for (let i = fromRow; i <= toRow; i++) {
        let rowToUpdate = rows[i];
        let updatedRow = React.addons.update(rowToUpdate, {$merge: updated});
        rows[i] = updatedRow;
      }

      this.setState({ brands: rows });
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <BrandGrid
      enableCellSelect={true}
      columns={this.cols}
      rowGetter={this.rowGetter}
      rowsCount={this.props.brands.length}
      minHeight={500}
      onGridRowsUpdated={this.handleGridRowsUpdated} />
    );
  }
}

export default AdminBrandEditor;
