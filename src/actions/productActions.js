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

export function loadRelatedProducts(prodId) {
  return function(dispatch) {
    return ProductApi.getRelatedProducts(prodId).then(data => {
      dispatch(loadRelatedProductsSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadRelatedProductsSuccess(relatedProducts) {
  return {type: types.LOAD_RELATED_PRODUCTS_SUCESS, relatedProducts}
}

export function loadSpecialProducts() {
  return function(dispatch) {
    return ProductApi.getAllProducts(0).then(data => {
      let specialProducts = data.slice(0, 3);
      console.log(specialProducts);
      dispatch(loadSpecialProductsSuccess(specialProducts));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadSpecialProductsSuccess(specialProducts) {
  return {type: types.LOAD_SPECIAL_PRODUCTS_SUCESS, specialProducts}
}

export function loadLatestProducts() {
  return function(dispatch) {
    return ProductApi.getAllProducts(0).then(data => {
      dispatch(loadLatestProductsSuccess(data.slice(-3)));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadLatestProductsSuccess(latestProducts) {
  return {type: types.LOAD_LATEST_PRODUCTS_SUCESS, latestProducts}
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
