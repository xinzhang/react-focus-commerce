import React from 'react';
import BrandGrid from 'react-data-grid';

class AdminBrandEditor extends React.Component {
  cols = this.createCols();

  constructor(props) {
      super(props);
      this.state = {
        rows: this.props.brands
      };
    
      this.rowGetter = this.rowGetter.bind(this);
      this.addBrand = this.addBrand.bind(this);
      this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
      this.save = this.save.bind(this);
  }

  createCols() {
    return  [
      { key: 'name', name: 'Name', editable:true }
    ];
  }

  rowGetter(i) {
    return this.state.rows[i];
  }

  save() {
    this.props.onSave(this.state.rows);
  }

  addBrand(){

    let rows = this.state.rows.slice();
    rows.push({name:''})
    this.setState({rows}, function() {
      console.log(this.state);
    })
  }

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
      let rows = this.state.rows.slice();
      let rowToUpdate = rows[toRow];
      console.log(rowToUpdate);

      let updatedRow = Object.assign({}, rowToUpdate, updated);
      rows[toRow] = updatedRow;

      this.setState({ rows });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      rows: nextProps.brands
    });
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.addBrand}><i className="fa fa-plus-square"></i> New Brand</button>
        <button type="button" className="btn btn-primary pull-right" onClick={this.save}><i className="fa fa-file-text"></i> Save </button>
        <BrandGrid
          enableCellSelect={true}
          columns={this.cols}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          minHeight={500}
          onGridRowsUpdated={this.handleGridRowsUpdated} />
      </div>
    );
  }
}

export default AdminBrandEditor;
