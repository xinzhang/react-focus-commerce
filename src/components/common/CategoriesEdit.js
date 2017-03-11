import React from 'react';

class CategoriesEdit extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        categories:[]
      }

      this.editName = this.editName.bind(this);
      this.findNode = this.findNode.bind(this);
      this.findNodeArray = this.findNodeArray.bind(this);
      this.submitCategories = this.submitCategories.bind(this);
    }

    submitCategories() {
      this.props.submit(this.state.categories);
    }

    changestatus(c) {

      if (c.status === 'collapse') {
        c.status = 'expand';
      }
      else if (c.status === 'expand') {
        c.status = 'collapse';
      }

      this.setState({});
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        categories:nextProps.categories
      })
    }

    edit(c) {
      console.log('dbl click', c);

      c.isEdit = true;
      this.setState({});
    }

    editName(e) {
      console.log(e);

      if(e.keyCode === 13){
        //c.name = event.target.value;

        let c = this.findNodeArray(this.state.categories, e.target.name);

        if (c!= null){
          c.name = e.target.value;
          c.isEdit = false;
          this.setState({});
          console.log(c);
        }
      }
    }

    findNodeArray(arr, name) {
        for (let i=0; i<arr.length; i++) {
          let ret = this.findNode(arr[i], name)
          if (ret !== null)
            return ret;
        }

        return null;
    }

    findNode(c, name) {
      if (c.name === name)
        return c;

      if (c.subcategories) {
        for (let i=0; i<c.subcategories.length;i++) {
          let r = this.findNode(c.subcategories[i], name);
          if (r != null) {
            return r;
          }
        }
      }//end if

      return null;
    }

    addChild(c) {
      c.status = 'expand';
      if (!c.subcategories) {
        c.subcategories = [];
      }

      c.subcategories.push({
        name:'',
        isEdit:true
      });

      this.setState({});
    }

    renderTree(c, idx){
        //set defualt value
        if (!c.status) {
          c.status = 'collapse';
        }

       return(
         <ul>
           <li key={c.name}>
             {c.subcategories && c.subcategories.length > 0 && c.status==="collapse" &&
               <i className="glyphicon glyphicon-chevron-right" onClick={() => this.changestatus(c)}></i>
             }
             {c.subcategories && c.subcategories.length > 0 && c.status==="expand" &&
               <i className="glyphicon glyphicon-chevron-down" onClick={()=> this.changestatus(c)}></i>
             }
              {!c.isEdit &&
                  <span onDoubleClick={()=>this.edit(c)}>{c.name}
                    <i className="glyphicon glyphicon-plus" onClick={()=>this.addChild(c)}></i>
                  </span>
              }
              {c.isEdit &&
                <input type="text" idx={idx} defaultValue={c.name} name={c.name} onKeyDown={this.editName} />
              }
           </li>

           {c.subcategories && c.subcategories.length > 0 && c.status ==="expand" &&
             c.subcategories.map(x => {
               return this.renderTree(x);
             })
           }
         </ul>
       )
    }

    renderTopTree(c, idx) {
      let arr = []
      arr.push(this.renderTree(c, idx));
      arr.push(<hr />)
      return arr;
    }

    render() {
      return (
        <div>
          {
            this.state.categories.map( (c, idx) => this.renderTopTree(c, idx))
          }
          <p />
          <button className="btn btn-submit" onClick={this.submitCategories}>Submit</button>
        </div>
      )
    }

}

export default CategoriesEdit;
