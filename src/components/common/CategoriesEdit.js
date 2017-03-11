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
          c.status = 'expand';
        }

       return(
         <ul>
           {c.subcategories && c.subcategories.length > 0 && c.status==="collapse" &&
             <i className="glyphicon glyphicon-chevron-right" onClick={() => this.changestatus(c)}></i>
           }
           {c.subcategories && c.subcategories.length > 0 && c.status==="expand" &&
             <i className="glyphicon glyphicon-chevron-down" onClick={()=> this.changestatus(c)}></i>
           }

           <li key={c.name}>
              {!c.isEdit &&
                <div>
                  <div onDoubleClick={()=>this.edit(c)}>{c.name}</div>
                  <i className="glyphicon glyphicon-plus" onClick={()=>this.addChild(c)}></i>
                </div>
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

    render() {
      return (
        <div>
          {
            this.state.categories.map( (c, idx) => this.renderTree(c, idx))
          }
          <hr />
          <p />
        </div>
      )
    }

}

CategoriesEdit.tree = {
  name:'Electric',
  status:'collapse',
  subcategories:[
    {
      name:'desktop',
    },
    {
      name:'tv',
    },
    {
      name:'console',
    },
    {
      name:'laptops',
      status:'collapse',
      subcategories:[{
        name:'brand',
        subcategories:[
          {name:'ibm'},
          {name:'lenova'},
          {name:'dell'},
          {name:'hp'}
        ]
      },
      {
          name:'memory',
          status:'collapse',
          subcategories:[
            {name:'4g'},
            {name:'8g'},
            {name:'16g'}
          ]
      },
      {
          name:'disk',
          status:'collapse',
          subcategories:[
            {name:'64G'},
            {name:'128G'},
            {name:'500G'},
            {name:'1TB'}
          ]
      }
    ]
    },
    {
      name: 'software',
      status:'collapse',
      subcategories:[{
        name:'office'
      },{
        name:'sql server'
      },{
        name:'photoshop'
      },{
        name:'atom'
      }]
    }
  ]
}

export default CategoriesEdit;
