import React from 'react';
import 'rc-tree-select/assets/index.css';
import TreeSelect, { TreeNode, SHOW_PARENT } from 'rc-tree-select';

class SubcategoriesSelect extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentCategory:'',
      inputValue:'',
      value:'',
      tsOpen: false,
      treeDataSource:[],
    }

    //this.onSearch = this.onSearch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeChildren = this.onChangeChildren.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onChange(value) {

        this.setState({ value });
  }

  onChangeChildren(value) {

  }

  onSelect() {
    // use onChange instead

    this.setState({value: arguments[0]});
    this.props.subcategorySelected(arguments[0]);
  }

  componentWillReceiveProps(nextProps) {

    let result = [];

    if (nextProps.category) {
      if (this.state.currentCategory !== nextProps.category.name || this.state.currentCategory == undefined) {
        let obj = this.convertToTreeDataSource(nextProps.category);
        result.push(obj);

        this.setState({
          treeDataSource:result,
          inputValue:nextProps.category.name,
          value:nextProps.value,
          currentCategory: nextProps.category.name
        }, function() {
          
        })
      }
    }

  }

  convertToTreeDataSource(category) {

    let obj = {};
    obj.label = category.name;
    obj.value = category.name;
    obj.key = category.name;
    obj.children = [];
    if (category.subcategories && category.subcategories.length > 0) {
      category.subcategories.map ( x=> {
        obj.children.push(this.convertToTreeDataSource(x))
      });
    }

    return obj;
  }

  render() {
    return (
      <TreeSelect
            style={{ width: 300 }}
            transitionName="rc-tree-select-dropdown-slide-up"
            choiceTransitionName="rc-tree-select-selection__choice-zoom"
            dropdownStyle={{ maxHeight: 200, overflow: 'auto' }}
            placeholder={<i>Please select a sub category</i>}
            searchPlaceholder="please search"
            allowClear
            treeLine
            inputValue={this.state.inputValue}
            value={this.state.value}
            treeData={this.state.treeDataSource}
            treeNodeFilterProp="label"
            filterTreeNode={false}
            onSearch={this.onSearch}
            open={this.state.tsOpen}
            onChange={(value) => {
              console.log('onChange', arguments);
              if (value === '0-0-0-0-value') {
                this.setState({ tsOpen: true });
              } else {
                this.setState({ tsOpen: false });
              }
              this.setState({ value });
            } }
            onDropdownVisibleChange={(v, info) => {
              console.log('single onDropdownVisibleChange', v, info);
              // document clicked
              if (info.documentClickClose && this.state.value === '0-0-0-0-value') {
                return false;
              }
              return true;
            } }
            onSelect={this.onSelect}
          />
    );
  }
}

export default SubcategoriesSelect;
