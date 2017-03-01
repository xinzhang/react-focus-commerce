import * as types from '../actions/adminActionTypes';
import initialState from './initialState';

export default function adminProductReducer(state = initialState.admin_products, action) {
  switch (action.type) {

    case types.LOAD_ADMIN_PRODUCTS_SUCESS:
      return action.admin_products;

    case types.ADD_ADMIN_PRODUCTS_SUCESS:
      return [
        ...state.filter(p => p._id !== action.admin_prod._id), Object.assign({}, action.admin_prod)
      ]
    default:
      return state;
  }
}
