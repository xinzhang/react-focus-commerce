import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function specialProductReducer(state = initialState.specialProducts, action) {
  switch (action.type) {

    case types.LOAD_SPECIAL_PRODUCTS_SUCESS:
          return action.specialProducts;

    default:
      return state;
  }
}
