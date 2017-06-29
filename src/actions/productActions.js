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
    return ProductApi.getSpecialProducts(5).then(data => {
      //let specialProducts = data.slice(0, 3);
      dispatch(loadSpecialProductsSuccess(data));
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
    return ProductApi.getLatestProducts(5).then(data => {
      //let prod = data.slice(-3);
      dispatch(loadLatestProductsSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadLatestProductsSuccess(latestProducts) {
  return {type: types.LOAD_LATEST_PRODUCTS_SUCESS, latestProducts}
}

export function loadBestSellerProducts() {
  return function(dispatch) {
    return ProductApi.getAllProducts(0).then(data => {
      dispatch(loadBestSellerProductsSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadBestSellerProductsSuccess(bestSellerProducts) {
  return {type: types.LOAD_BESTSELLER_PRODUCTS_SUCESS, bestSellerProducts}
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

export function loadProductsByCategory(category) {
  return function(dispatch) {
    return ProductApi.getProductsByCategory(category).then(data => {
      dispatch(loadProductsSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}
