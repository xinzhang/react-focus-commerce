import React from 'react';
import {Link} from 'react-router';

class CartLine extends React.Component {
    render() {
      let widthStyle = {
        maxWidth:"200-px"
      }

      return (
                <tr>
                  <td className="text-center">
                    <Link to={'/products/detail/'+ this.props.cartItem.prod_id}>
                      <img className="img-thumbnail" title={this.props.cartItem.name} alt={this.props.cartItem.name} src={this.props.cartItem.prod_pic} />
                    </Link>
                  </td>
                  <td className="text-left">
                    <Link to={'/products/detail/'+ this.props.cartItem.prod_id}>
                      {this.props.cartItem.name}
                    </Link>
                  </td>
                  <td className="text-left">product 11</td>
                  <td className="text-left">
                  <div style={widthStyle} className="input-group btn-block">
                      <input type="text" className="form-control quantity" size="1" value={this.props.cartItem.qty} name="quantity" />
                      <span className="input-group-btn">
                      <button className="btn btn-primary" title="" data-toggle="tooltip" type="submit" data-original-title="Update">
                        <i className="fa fa-refresh"></i></button>
                      <button  className="btn btn-danger" title="" data-toggle="tooltip" type="button" data-original-title="Remove">
                        <i className="fa fa-times-circle"></i></button>
                      </span>
                  </div>
                  </td>
                  <td className="text-right">${this.props.cartItem.price}</td>
                  <td className="text-right">${this.props.cartItem.total}</td>
                </tr>
      );
    }
}

export default CartLine;
