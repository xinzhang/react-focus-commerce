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
    console.log(i);
    console.log(this.state.rows[i]);
    return this.state.rows[i];
  }

  save() {
    this.props.onSave(this.state.rows);
  }

  addBrand(){
    console.log('add brand');
    console.log(this.state.rows);

    let rows = this.state.rows.slice();
    rows.push({name:''})
    this.setState({rows}, function() {
      console.log(this.state);
    })
  }

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
      console.log('handle updated');
      console.log(this.state);

      let rows = this.state.rows.slice();
      let rowToUpdate = rows[toRow];
      console.log(rowToUpdate);

      let updatedRow = Object.assign({}, rowToUpdate, updated);
      rows[toRow] = updatedRow;
      console.log(updatedRow);
      this.setState({ rows });

      // for (let i = fromRow; i <= toRow; i++) {
      //   let rowToUpdate = rows[i];
      //   let updatedRow = React.addons.update(rowToUpdate, {$merge: updated});
      //   rows[i] = updatedRow;
      // }

      // var array1 = this.state.rows.slice(0, toRow);
      // var array2 = this.state.rows.slice(toRow, this.state.rows.length)
      // var merged = Object.assign([], [...array1], [updated], [...array2]);
      // //this.state.rows[toRow]= updated;
      // this.setState({ rows: merged }, function() {
      //   console.log(this.state);
      // });
  }

  componentWillReceiveProps(nextProps) {
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
