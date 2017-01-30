import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case types.LOAD_SHOPING_CART_SUCESS:
      return action.cart;
    default:
      return state;
  }
}
