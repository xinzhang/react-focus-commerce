import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function bestSellerProductReducer(state = initialState.bestSellerProducts, action) {
  switch (action.type) {

    case types.LOAD_BESTSELLER_PRODUCTS_SUCESS:
          return action.bestSellerProducts;

    default:
      return state;
  }
}
