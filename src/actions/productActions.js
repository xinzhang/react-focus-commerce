import * as types from './actionTypes';
import ProductApi from '../api/ProductApi';

export function loadProducts() {
  return function(dispatch) {
    return ProductApi.getAllProducts(0).then(data => {
      dispatch(loadProductsSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadProductsSuccess(products) {
  return {type: types.LOAD_PRODUCTS_SUCESS, products}  
}

export function loadProductDetail(id) {
  return function(dispatch) {
    return ProductApi.getProductDetail(id).then(data => {
      dispatch(loadProductDetailSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadProductDetailSuccess(product) {
  return {type: types.LOAD_Product_DETAIL_SUCESS, product}
}

export function loadCategories(id) {
  return function(dispatch) {
    return ProductApi.getCategories(id).then(data => {
      dispatch(loadCategoriesSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadCategoriesSuccess(Productcategories) {
  return {type: types.LOAD_CATEGORIES_SUCESS, Productcategories}
}
