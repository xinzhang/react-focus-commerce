import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function relatedProductReducer(state = initialState.relatedProducts, action) {
  switch (action.type) {

    case types.LOAD_RELATED_PRODUCTS_SUCESS:
      return action.relatedProducts;

    default:
      return state;
  }
}
