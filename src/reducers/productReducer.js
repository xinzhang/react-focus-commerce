import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {

    case types.LOAD_PRODUCTS_SUCESS:
      //return Object.assign([], state, action.payload);
    //   return Object.assign({}, state, {
    //    products: action.products
    //  })
      console.log("products reducer");
      return action.products;

    default:
      return state;
  }
}
