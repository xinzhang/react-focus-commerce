import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {
    case action.LOAD_PRODUCTS_SUCESS:
      return types.products;
    default:
      return state;
  }
}
