import React from 'react';

class CategoriesEdit extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        categories:[]
      }

      this.renderTree = this.renderTree.bind(this);
      this.hideshow = this.hideshow.bind(this);
    }

    hideshow(c) {
      console.log(c.name, c.status);

      if (c.status == 'collapse')
        c.status = 'expand';

      else if (c.status == 'expand')
        c.status = 'collapse';

      this.setState({
        categories:this.props.categories
      })
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        categories:nextProps.categories
      })
    }

    renderTree(c){
      console.log('renderTree');
        
        return(
          <ul className="asTree">
    <li>item 1</li>
    <li>item 2</li>
    <li>
        <input type="checkbox" hidden id="treeExp_3" />
        <label for="treeExp_3">item 3</label>
        <ul>
            <li>item 3.1</li>
            <li>
                <input type="checkbox" hidden id="treeExp_3_2" />
                <label for="treeExp_3_2">item 3.2</label>
                <ul>
                    <li>item 3.2.1</li>
                    <li>item 3.2.2</li>
                </ul>
            </li>
            <li>item 3.3</li>
        </ul>
    </li>
    <li>
        <input type="checkbox" hidden id="treeExp_4" />
        <label for="treeExp_4">item 4</label>
        <ul>
            <li>item 4.1</li>
            <li>item 4.2</li>
        </ul>
    </li>
</ul>
        )
    }

    render() {
      console.log(this.state.categories);
      return (
          <div>
            {this.state.categories.map(c => {
              return this.renderTree(c)
            })}
          </div>
      );
    }
}

export default CategoriesEdit;
