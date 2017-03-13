import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.orders, action) {
  switch (action.type) {

    case types.ORDER_LOAD_SUCCESS:
      return Object.assign([], state, action.orders);

    case types.ORDER_SUBMIT_SUCCESS:
      return [...state, action.order];

    default:
      return state;
  }
}
