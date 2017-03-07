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
        let styles = this.constructor.styles;

        return(
          <ul style={styles.treeUl} onClick={ () => this.hideshow(c)}>
            <li style={styles.treeLi} key={c.name}><div style={styles.treeDiv}>{c.name}</div></li>
            {c.subcategories && c.subcategories.length > 0 && c.status === 'expand' &&
              c.subcategories.map(x => {
                return this.renderTree(x);
              })
            }
          </ul>
        )
    }

    render() {
      console.log(this.state.categories);
      return (
          <div style={this.constructor.styles.treeDiv}>
            {this.state.categories.map(c => {
              c.status = 'expand';
              return this.renderTree(c)
            })}
          </div>
      );
    }
}

CategoriesEdit.styles = {
    treeUl:{
      display: 'listItem !important',
      listStyle:"none",
      float: "left",
      width: '100%',
    },

    treeLi: {
      display: 'listItem !important',
      paddingTop:"10px",
      float: "left",
      width: '100%',
    },

    treeDiv: {
      float:"left"
    },

    treeExpand : {
      width:'15px',
      height:'15px'
    },

    treeCollapse: {
      width:'15px',
      height:'15px',
      display:'none'
    }
}

export default CategoriesEdit;
