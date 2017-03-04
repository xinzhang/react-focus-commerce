import * as types from './adminActionTypes';
import adminProductApi from '../api/AdminProductApi';

export function getAdminProducts() {
  return function(dispatch) {
    return adminProductApi.getAllProducts().then(data => {
      dispatch(getAdminProductsSuccess(data));
    }).catch(error => {
      dispatch(getAdminProductsFailure(error));
      throw(error);
    });
  }
}

export function getAdminProductsSuccess(products) {
  return {type: types.LOAD_ADMIN_PRODUCTS_SUCESS, admin_products: products}
}

export function getAdminProductsFailure(error) {
  return {type: types.LOAD_ADMIN_PRODUCTS_FAILURE, error: "Load admin products error"}
}

export function addAdminProduct(prod) {
  return function(dispatch) {
    return adminProductApi.addProduct(prod).then(data => {
      dispatch(addAdminProductSuccess(data));
    }).catch(error => {
      dispatch(addAdminProductFailure(error));
      throw(error);
    });
  }
}

export function addAdminProductSuccess(data) {
  return {type: types.ADD_ADMIN_PRODUCTS_SUCESS, admin_product: data}
}

export function addAdminProductFailure(error) {
  return {type: types.ADD_ADMIN_PRODUCTS_FAILURE, error: "add admin product faiilure"}
}

export function updateAdminProduct(prod) {
  return function(dispatch) {
    return adminProductApi.updateProduct(prod).then(data => {
      dispatch(updateAdminProductSuccess(data));
    }).catch(error => {
      dispatch(updateAdminProductFailure(error));
      throw(error);
    });
  }
}

export function updateAdminProductSuccess(data) {
  return {type: types.UPDATE_ADMIN_PRODUCTS_SUCESS, admin_product: data}
}

export function updateAdminProductFailure(error) {
  return {type: types.UPDATE_ADMIN_PRODUCTS_FAILURE, error: "update admin product failure"}
}
