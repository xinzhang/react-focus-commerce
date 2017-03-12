import * as types from './actionTypes';

export function loadOrders() {
  // return function(dispatch) {
  //   return blogApi.getAllBlogs().then(data => {
  //     dispatch(loadShoppingCartSuccess(data));
  //   }).catch(error => {
  //     throw(error);
  //   });
  // }
}

export function loadMyOrders() {
  // return function(dispatch) {
  //   return blogApi.getAllBlogs().then(data => {
  //     dispatch(loadShoppingCartSuccess(data));
  //   }).catch(error => {
  //     throw(error);
  //   });
  // }
}

export function loadShoppingCartSuccess(cart) {
  //return {type: types.LOAD_SHOPING_CART_SUCESS, {}}
}

export function submitOrder(cartItem) {
  return {type: types.ADD_SHOPING_CART_ITEM, cartItem}
}

export function removeShoppingCart(id) {
  return {type: types.REMOVE_SHOPING_CART_ITEM, id}
}

export function updateShoppingCart(cartItem) {
  return {type: types.UPDATE_SHOPING_CART_ITEM, cartItem}
}
