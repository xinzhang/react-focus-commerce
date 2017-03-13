import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function newOrderReducer(state = initialState.newOrderStatus, action) {
  switch (action.type) {

    case types.ORDER_SUBMIT_SUCCESS:
      return Object.assign({}, {
        "status": "submitted",
        "order_number": action.order._id
      });

    default:
      return state;
  }
}
