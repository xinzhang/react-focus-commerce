import * as types from './actionTypes';
import OrderApi from '../api/OrderApi';

export function loadOrders() {
   return function(dispatch) {
     return OrderApi.getAllOrders().then(data => {
      dispatch(loadOrdersSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadMyOrders(userid) {
  return function(dispatch) {
    return OrderApi.getMyOrders(userid).then(data => {
      dispatch(loadOrdersSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadOrdersSuccess(orders) {
  return {type: types.ORDER_LOAD_SUCCESS, orders}
}

export function submitOrder(order) {
  return function(dispatch) {
    return OrderApi.submitOrder(order).then(data => {
      dispatch(submitOrdersSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function submitOrdersSuccess(order) {
  return {type: types.ORDER_SUBMIT_SUCCESS, order}
}
