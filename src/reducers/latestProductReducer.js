import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function latestProductReducer(state = initialState.latestProducts, action) {
  switch (action.type) {

    case types.LOAD_LATEST_PRODUCTS_SUCESS:
          return action.latestProducts;

    default:
      return state;
  }
}
